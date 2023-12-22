import { createStore } from 'solid-js/store';
import { SolidApexCharts } from 'solid-apexcharts';
import { createSignal } from 'solid-js';

function Chart() {
  const [options] = createStore({
    chart: {
      id: 'solidchart-example',
    },
    stroke: {
      colors: ['#fff'],
    },
    fill: {
      opacity: 0.8,
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    }],
  });
  const [series] = createSignal([14, 23, 21, 17, 15, 10, 12, 17, 21]);

  return <SolidApexCharts width="500" type="polarArea" options={options} series={series()} />;
}

export default Chart;
