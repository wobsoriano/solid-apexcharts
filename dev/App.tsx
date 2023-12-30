import { createSignal, onMount } from 'solid-js'
import type ApexCharts from 'apexcharts'
import { type ApexChartProps, SolidApexCharts } from 'src'

function App() {
  let chartRef: ApexCharts
  const [type, setType] = createSignal<ApexChartProps['type']>('bar')
  const [options] = createSignal<ApexChartProps['options']>({
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
  })
  const [series] = createSignal([
    {
      name: 'series-1',
      data: [30, 40, 35, 50, 49, 60, 70, 91],
    },
  ])

  onMount(() => {
    setTimeout(() => {
      // chartRef?.destroy();
    }, 2000)
  })

  return (
    <div>
      <SolidApexCharts
        ref={chartRef!}
        width="500"
        type={type()}
        options={options()}
        series={series()}
      />
      <button onClick={() => setType((prev) => prev === 'line' ? 'bar' : 'line')}>Change type</button>
    </div>
  )
}

export default App
