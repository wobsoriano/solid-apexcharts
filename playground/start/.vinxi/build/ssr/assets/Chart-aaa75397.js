import { ssr, ssrHydrationKey, createComponent } from "solid-js/web";
import { unwrap, createStore } from "solid-js/store";
import ApexCharts from "apexcharts/dist/apexcharts.esm.js";
import { mergeProps, onMount, createEffect, on, onCleanup, createSignal } from "solid-js";
import { defu } from "defu";
const _tmpl$ = ["<div", "></div>"];
var SolidApexCharts = (props) => {
  let rootEl;
  let chart;
  const merged = mergeProps({
    height: "auto",
    width: "100%",
    series: [],
    type: "line"
  }, props);
  const init = () => {
    const newOptions = {
      chart: {
        type: merged.type || unwrap(merged.options)?.chart?.type,
        height: merged.height,
        width: merged.width,
        events: {}
      },
      series: unwrap(merged.series)
    };
    const config = defu(unwrap(merged.options), newOptions);
    chart = new ApexCharts(rootEl, config);
    props.ref?.(chart);
    chart.render();
  };
  onMount(() => {
    init();
  });
  createEffect(on(() => merged.series, () => {
    chart?.updateSeries(merged.series);
  }, {
    defer: true
  }));
  createEffect(on(() => merged.options, () => {
    chart?.updateOptions(merged.options);
  }, {
    defer: true
  }));
  createEffect(on(() => [merged.type, merged.height, merged.width], () => {
    chart?.destroy();
    init();
  }, {
    defer: true
  }));
  onCleanup(() => {
    chart?.destroy();
  });
  return ssr(_tmpl$, ssrHydrationKey());
};
var SolidApexCharts_default = SolidApexCharts;
function Chart() {
  const [options] = createStore({
    chart: {
      id: "solidchart-example"
    },
    stroke: {
      colors: ["#fff"]
    },
    fill: {
      opacity: 0.8
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: "bottom"
        }
      }
    }]
  });
  const [series] = createSignal([14, 23, 21, 17, 15, 10, 12, 17, 21]);
  return createComponent(SolidApexCharts_default, {
    width: "500",
    type: "polarArea",
    options,
    get series() {
      return series();
    }
  });
}
export {
  Chart as default
};
