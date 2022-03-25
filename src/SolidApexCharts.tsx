// @ts-expect-error: Apexcharts esm exports
import ApexCharts from 'apexcharts/dist/apexcharts.esm.js';
import type { Component } from 'solid-js';
import { createEffect, mergeProps, on, onCleanup, onMount } from 'solid-js';
import type { Store } from 'solid-js/store';
import { unwrap } from 'solid-js/store';

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
  | 'candlestick';

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

interface Props {
  options: Store<Record<any, any>>
  type: ChartType
  series: Store<ChartSeries> | ChartSeries
  width?: string | number
  height?: string | number
}

const isObject = (item: any) => {
  return (
    item && typeof item === 'object' && !Array.isArray(item) && item != null
  );
};

const extend = (target: Record<any, any>, source: Record<any, any>) => {
  if (typeof Object.assign !== 'function') {
    (function() {
      Object.assign = function(target: any) {
        // We must check against these specific cases.
        if (target === undefined || target === null)
          throw new TypeError('Cannot convert undefined or null to object');

        const output = Object(target);
        for (let index = 1; index < arguments.length; index++) {
          // eslint-disable-next-line prefer-rest-params
          const source = arguments[index];
          if (source !== undefined && source !== null) {
            for (const nextKey in source)
              if (source.nextKey) output[nextKey] = source[nextKey];
          }
        }
        return output;
      };
    })();
  }

  const output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, {
            [key]: source[key],
          });
        }
        else {
          output[key] = extend(target[key], source[key]);
        }
      }
      else {
        Object.assign(output, {
          [key]: source[key],
        });
      }
    });
  }
  return output;
};

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
        type: merged.type || merged.options.chart.type,
        height: merged.height,
        width: merged.width,
        events: {},
      },
      series: merged.series,
    };

    const config = extend(unwrap(merged.options), newOptions);
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
