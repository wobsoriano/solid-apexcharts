import ApexCharts from 'apexcharts/dist/apexcharts.esm.js'
import type { ApexOptions } from 'apexcharts'
import type { Component } from 'solid-js'
import { createEffect, mergeProps, on, onCleanup, onMount } from 'solid-js'
import { unwrap } from 'solid-js/store'
import { defu } from 'defu'

type ChartType = NonNullable<NonNullable<ApexOptions['chart']>['type']>
type ChartSeries = NonNullable<ApexOptions['series']>

type FixMeLater = any

export interface ApexChartProps {
  type: ChartType
  options: ApexOptions
  series: ChartSeries
  width?: string | number
  height?: string | number
  [key: string]: FixMeLater
}

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

    const config = defu(unwrap(merged.options), newOptions)
    chart = new ApexCharts(rootEl, config)
    props.ref?.(chart)
    chart.render()
  }

  onMount(() => {
    init()
  })

  createEffect(
    on(
      () => merged.series,
      (series) => {
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
      (options) => {
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
