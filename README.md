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
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
  });
  const [series] = createSignal([
    {
      name: 'series-1',
      data: [30, 40, 35, 50, 49, 60, 70, 91],
    },
  ]);

  return <SolidApexCharts width="500" type="bar" options={options()} series={series()} />;
}
```

This will render the following chart

<p><img src="https://raw.githubusercontent.com/wobsoriano/solid-apexcharts/main/chartexample.svg" /></p>

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

Here's an example updating the chart data with some random series to illustrate the point.

```tsx
import { SolidApexCharts } from 'solid-apexcharts';

function App() {
  const options = {
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
  };
  const [series, setSeries] = createSignal([
    {
      name: 'series-1',
      data: [30, 40, 35, 50, 49, 60, 70, 91],
    },
  ]);

  onMount(() => {
    setInterval(() => {
      const max = 90;
      const min = 20;

      setSeries((prevSeries) => {
        const newData = prevSeries[0].data.map(() => {
          return Math.floor(Math.random() * (max - min + 1)) + min
        })

        return [{ data: newData }]
      });
    }, 1000)
  })

  return <SolidApexCharts type="bar" options={options} series={series()} />;
}
```

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
import ApexCharts from 'apexcharts';

// or for ESM build
// import ApexCharts from 'apexcharts/dist/apexcharts.esm.js'

const [options] = createSignal({
  chart: {
    id: 'example',
  },
  // Other options
});

ApexCharts.exec('example', 'updateSeries', [
  {
    name: 'series-1',
    data: [60, 40, 20, 50, 49, 60, 95, 72],
  },
]);
```

## SolidStart

To use this component in SolidStart, you need to wrap your chart components with the [`clientOnly`](https://start.solidjs.com/api/clientOnly) function, making sure that the component is only rendered on the client side:

```tsx
import { clientOnly } from '@solidjs/start';

const MyChart = clientOnly(() => import('~/components/Chart'));

export default function Home() {
  return <MyChart fallback={<div>Loading</div>} />;
}
```

## License

MIT
