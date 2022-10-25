// @ts-expect-error: Internal
import ApexCharts from 'apexcharts/dist/apexcharts.esm';
import type { ApexOptions } from 'apexcharts';

export function createApexCharts(): {
  exec(chartID: string, fn: string, ...args: Array<any>): any
  getChartByID(chartID: string): ApexOptions['chart'] | undefined
};

export function createApexCharts() {
  return ApexCharts;
}
