import { createStore } from 'solid-js/store';
import { SolidApexCharts } from 'solid-apexcharts';

function App() {
  let chartRef: unknown;
  const [options] = createStore({
    chart: {
      id: 'solidchart-example',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
  });
  const [series] = createStore({
    list: [
      {
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91],
      },
    ],
  });

  return <SolidApexCharts ref={chartRef} width="500" type="bar" options={options} series={series.list} />;
}

export default App;
