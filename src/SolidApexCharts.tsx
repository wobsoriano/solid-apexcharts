// @ts-expect-error: Internal
import ApexCharts from 'apexcharts/dist/apexcharts.esm.js';
import type { ApexOptions } from 'apexcharts';
import type { Component } from 'solid-js';
import { createEffect, mergeProps, on, onCleanup, onMount } from 'solid-js';
import { unwrap } from 'solid-js/store';
import { defu } from 'defu';

type NonNullable<T> = Exclude<T, null | undefined>;
type ChartType = NonNullable<NonNullable<ApexOptions['chart']>['type']>;
type ChartSeries = NonNullable<ApexOptions['series']>;

export interface ApexChartProps {
  type: ChartType
  options: ApexOptions
  series: ChartSeries
  width?: string | number
  height?: string | number
  [key: string]: any
}

const SolidApexCharts: Component<ApexChartProps> = (props) => {
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
        type: merged.type || unwrap(merged.options)?.chart?.type,
        height: merged.height,
        width: merged.width,
        events: {},
      },
      series: unwrap(merged.series),
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
