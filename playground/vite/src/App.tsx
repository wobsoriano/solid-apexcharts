import { createStore } from 'solid-js/store';
import { SolidApexCharts } from 'solid-apexcharts'
import { onMount } from 'solid-js';

const App = () => {
  const [options] = createStore({
    chart: {
      id: 'solidchart-example',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
  });
  const [series, setSeries] = createStore({
    list: [
      {
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91],
      },
    ],
  });

  onMount(() => {
    setTimeout(() => {
      setSeries('list', prev => [...prev, {
        name: 'series-2',
        data: [40, 21, 35, 50, 49, 60, 70, 100],
      }]);
    }, 1000);
  });

  return <SolidApexCharts width="500" type="bar" options={options} series={series.list} />;
};

export default App;
