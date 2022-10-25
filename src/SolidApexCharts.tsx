import ApexCharts from 'apexcharts';
import type { Accessor, Component } from 'solid-js';
import { createEffect, mergeProps, on, onCleanup, onMount } from 'solid-js';
import { unwrap } from 'solid-js/store';
import { defu } from 'defu';

type ChartType =
  | 'line'
  | 'area'
  | 'bar'
  | 'radar'
  | 'histogram'
  | 'pie'
  | 'donut'
  | 'radialBar'
  | 'scatter'
  | 'bubble'
  | 'heatmap'
  | 'candlestick'
  | 'rangeArea';

export interface ApexAxisChart {
  name?: string
  type?: string
  color?: string
  data:
  | (number | null)[]
  | {
    x: any
    y: any
    fillColor?: string
    strokeColor?: string
    meta?: any
    goals?: any
  }[]
  | [number, number | null][]
  | [number, (number | null)[]][]
}

export type ApexNonAxisChartSeries = number[];
export type ApexAxisChartSeries = ApexAxisChart[];

export type ChartSeries = ApexAxisChartSeries | ApexNonAxisChartSeries;

type AnyObj = Record<string, any>;

interface Props {
  options: Accessor<AnyObj> | AnyObj
  type: ChartType
  series: Accessor<ChartSeries> | ChartSeries
  width?: string | number
  height?: string | number
}

const SolidApexCharts: Component<Props> = (props) => {
  let el: HTMLDivElement;
  let chart: ApexCharts;

  const merged = mergeProps(
    {
      height: 'auto',
      width: '100%',
      series: [],
      type: 'line',
    },
    props,
  );

  const init = () => {
    const newOptions = {
      chart: {
        // @ts-expect-error: For accessor options
        type: merged.type || merged.options.chart.type,
        height: merged.height,
        width: merged.width,
        events: {},
      },
      series: merged.series,
    };

    const config = defu(unwrap(merged.options), newOptions);
    chart = new ApexCharts(el, config);
    chart.render();
  };

  onMount(() => {
    init();
  });

  createEffect(
    on(
      () => merged.series,
      () => {
        chart.updateSeries(merged.series);
      },
      {
        defer: true,
      },
    ),
  );

  createEffect(
    on(
      () => merged.options,
      () => {
        chart.updateOptions(merged.options);
      },
      {
        defer: true,
      },
    ),
  );

  createEffect(
    on(
      () => [merged.type, merged.height, merged.width],
      () => {
        chart.destroy();
        init();
      },
      {
        defer: true,
      },
    ),
  );

  onCleanup(() => {
    chart?.destroy();
  });

  return <div ref={el!} />;
};

export default SolidApexCharts;
