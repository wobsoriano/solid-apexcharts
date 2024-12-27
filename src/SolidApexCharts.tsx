import ApexCharts from 'apexcharts/dist/apexcharts.esm.js'
import type { ApexOptions } from 'apexcharts'
import type { Component } from 'solid-js'
import { createEffect, mergeProps, on, onCleanup, onMount } from 'solid-js'
import { unwrap } from 'solid-js/store'
import { defu } from 'defu'

type ChartType = NonNullable<NonNullable<ApexOptions['chart']>['type']>
type ChartSeries = NonNullable<ApexOptions['series']>

type FixMeLater = any

export interface ApexChartEvents {
  onAnimationEnd?(chart: ApexCharts, options?: ApexChartProps['options']): void
  onBeforeMount?(chart: ApexCharts, options?: ApexChartProps['options']): void
  onMounted?(chart: ApexCharts, options?: ApexChartProps['options']): void
  onUpdated?(chart: ApexCharts, options?: ApexChartProps['options']): void
  onMouseMove?(e: MouseEvent, chart?: ApexCharts, options?: ApexChartProps['options']): void
  onMouseLeave?(e: MouseEvent, chart?: ApexCharts, options?: ApexChartProps['options']): void
  onClick?(e: MouseEvent, chart?: ApexCharts, options?: ApexChartProps['options']): void
  onXAxisLabelClick?(e: MouseEvent, chart?: ApexCharts, options?: ApexChartProps['options']): void
  onLegendClick?(chart: ApexCharts, seriesIndex?: number, options?: ApexChartProps['options']): void
  onMarkerClick?(e: MouseEvent, chart?: ApexCharts, options?: ApexChartProps['options']): void
  onSelection?(chart: ApexCharts, options?: ApexChartProps['options']): void
  onDataPointSelection?(
    e: MouseEvent,
    chart?: ApexCharts,
    options?: ApexChartProps['options'],
  ): void
  onDataPointMouseEnter?(
    e: MouseEvent,
    chart?: ApexCharts,
    options?: ApexChartProps['options'],
  ): void
  onDataPointMouseLeave?(
    e: MouseEvent,
    chart?: ApexCharts,
    options?: ApexChartProps['options'],
  ): void
  onBeforeZoom?(chart: ApexCharts, options?: ApexChartProps['options']): void
  onBeforeResetZoom?(chart: ApexCharts, options?: ApexChartProps['options']): void
  onZoomed?(chart: ApexCharts, options?: ApexChartProps['options']): void
  onScrolled?(chart: ApexCharts, options?: ApexChartProps['options']): void
  onBrushScrolled?(chart: ApexCharts, options?: ApexChartProps['options']): void
}

export type ApexChartProps = {
  type: ChartType
  options: ApexOptions
  series: ChartSeries
  width?: string | number
  height?: string | number
  [key: string]: FixMeLater
} & ApexChartEvents

const SolidApexCharts: Component<ApexChartProps> = props => {
  let rootEl: HTMLDivElement
  let chart: ApexCharts

  const merged = mergeProps(
    {
      height: 'auto',
      width: '100%',
      series: [],
      type: 'line',
    },
    props,
  )

  const init = () => {
    const newOptions = {
      chart: {
        type: merged.type,
        height: merged.height,
        width: merged.width,
        events: {},
      },
      series: unwrap(merged.series),
    }

    for (const key in props) {
      if (key.startsWith('on')) {
        const eventKey = key.charAt(2).toLowerCase() + key.slice(3)
        // @ts-ignore
        newOptions.chart.events[eventKey] = props[key]
      }
    }

    const config = defu(unwrap(merged.options), newOptions)
    chart = new ApexCharts(rootEl!, config)
    props.ref?.(chart)
    chart.render()
  }

  onMount(() => {
    init()
  })

  createEffect(
    on(
      () => merged.series,
      series => {
        chart.updateSeries(series)
      },
      {
        defer: true,
      },
    ),
  )

  createEffect(
    on(
      () => merged.options,
      options => {
        chart.updateOptions(options)
      },
      {
        defer: true,
      },
    ),
  )

  createEffect(
    on(
      () => [merged.type, merged.height, merged.width],
      () => {
        chart.destroy()
        init()
      },
      {
        defer: true,
      },
    ),
  )

  onCleanup(() => {
    chart.destroy()
  })

  return <div ref={rootEl!} />
}

export default SolidApexCharts
