<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=solid-apexcharts&background=tiles&project=%20" alt="solid-apexcharts">
</p>

# solid-apexcharts

Build interactive visualizations in Solid. Powered by [ApexCharts](https://apexcharts.com/).

## Quick start

Install it:

```bash
npm install apexcharts solid-apexcharts
```

Use it:

```tsx
import { SolidApexCharts } from 'solid-apexcharts';

function App() {
  const [options] = createSignal({
    chart: {
      id: 'solidchart-example',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
  });
  const [series] = createSignal({
    list: [
      {
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91],
      },
    ]
  });

  // options and series can be a store or signal

  return <SolidApexCharts width="500" type="bar" options={options()} series={series().list} />;
}
```

This will render the following chart

<p><a href="https://github.com/wobsoriano/solid-apexcharts/blob/master/chartexample.svg"><img src="https://github.com/wobsoriano/solid-apexcharts/blob/master/chartexample.svg"></a></p>

## Props

| Prop         | Type          | Description                                                                                                                                                                                      |
| ------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **series\*** | Array         | The series is an array which accepts an object in the following format. To know more about the format of dataSeries, checkout [Series](https://apexcharts.com/docs/series/) docs on the website. |
| **type\***   | String        | `line`, `area`, `bar`, `pie`, `donut`, `scatter`, `bubble`, `heatmap`, `radialBar`, `candlestick`, `polarArea`                                                                                                |
| **width**    | Number/String | Possible values for width can be `100%` or `400px` or `400`                                                                                                                                      |
| **height**   | Number/String | Possible values for height can be `100%` or `300px` or `300`                                                                                                                                     |
| **options**  | Object        | The configuration object, see options on [API (Reference)](https://apexcharts.com/docs/options/chart/type/)                                                                                      |

## How do I update the chart?

Simple! Just change the `series` or any `option` and it will automatically re-render the chart.

## Methods

Changing the props will automatically update the chart. You only need to call these methods to update the chart forcefully.

```tsx
import ApexCharts from 'apexcharts';

function App() {
  let chartRef: ApexCharts;

  function updateChart() {
    chartRef.updateOptions({ colors: newColors });
  }

  return <SolidApexCharts ref={chartRef} />;
}
```

[Click here](https://apexcharts.com/docs/methods) to see all available methods.

## How to call methods of ApexCharts without referencing the chart element?

Target the chart by its `id` to call the methods from some other place

```tsx
import { createApexCharts } from 'solid-apexcharts';

const ApexCharts = createApexCharts();

ApexCharts.exec('solidchart-example', 'updateSeries', [
  {
    name: 'series-1',
    data: [60, 40, 20, 50, 49, 60, 95, 72],
  },
]);
```

## License

MIT
