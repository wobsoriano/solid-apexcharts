import type ApexCharts from 'apexcharts'
import type { ApexOptions } from 'apexcharts'
import type { Component } from 'solid-js'
import { createEffect, merge, onSettled, snapshot } from 'solid-js'
import { defu } from 'defu'

type ChartType = NonNullable<NonNullable<ApexOptions['chart']>['type']>
type ChartSeries = NonNullable<ApexOptions['series']>

type FixMeLater = any

interface ApexChartEvents {
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

const SolidApexCharts: Component<ApexChartProps> = (props) => {
  let rootEl: HTMLDivElement | undefined
  let chart: ApexCharts | undefined
  let disposed = false
  let generation = 0

  const merged = merge(
    {
      height: 'auto',
      width: '100%',
      series: [] as ChartSeries,
      type: 'line' as ChartType,
    },
    props,
  )

  const init = async () => {
    const current = ++generation
    const events: Record<string, unknown> = {}
    const newOptions = {
      chart: {
        type: merged.type,
        height: merged.height,
        width: merged.width,
        events,
      },
      series: snapshot(merged.series),
    }

    for (const key in props) {
      if (key.startsWith('on')) {
        const eventKey = key.charAt(2).toLowerCase() + key.slice(3)
        events[eventKey] = props[key]
      }
    }

    const config = defu(snapshot(merged.options), newOptions)
    const Chart = (await import('apexcharts/dist/apexcharts.esm.js')).default
    if (disposed || current !== generation || !rootEl) return

    const next = new Chart(rootEl, config)
    if (disposed || current !== generation) {
      next.destroy()
      return
    }
    chart = next
    props.ref?.(next)
    void next.render()
  }

  onSettled(() => {
    void init()
    return () => {
      disposed = true
      chart?.destroy()
    }
  })

  createEffect(
    () => {
      const series = merged.series
      return snapshot(series)
    },
    (series) => {
      void chart?.updateSeries(series)
    },
    { defer: true },
  )

  createEffect(
    () => {
      const options = merged.options
      return snapshot(options)
    },
    (options) => {
      void chart?.updateOptions(options)
    },
    { defer: true },
  )

  createEffect(
    () => [merged.type, merged.height, merged.width] as const,
    () => {
      chart?.destroy()
      chart = undefined
      void init()
    },
    { defer: true },
  )

  return <div ref={(el) => (rootEl = el)} />
}

export default SolidApexCharts
