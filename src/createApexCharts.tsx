// @ts-expect-error: Internal
import ApexCharts from 'apexcharts/dist/apexcharts.esm';

// https://github.com/apexcharts/apexcharts.js/blob/main/types/apexcharts.d.ts
export function createApexCharts(): {
  updateOptions(
    options: any,
    redrawPaths?: boolean,
    animate?: boolean,
    updateSyncedCharts?: boolean
  ): Promise<void>
  updateSeries(
    newSeries: ApexAxisChartSeries | ApexNonAxisChartSeries,
    animate?: boolean
  ): Promise<void>
  appendSeries(
    newSeries: ApexAxisChartSeries | ApexNonAxisChartSeries,
    animate?: boolean
  ): Promise<void>
  appendData(data: any[], overwriteInitialSeries?: boolean): void
  toggleSeries(seriesName: string): any
  showSeries(seriesName: string): void
  hideSeries(seriesName: string): void
  resetSeries(): void
  zoomX(min: number, max: number): void
  toggleDataPointSelection(seriesIndex: number, dataPointIndex?: number): any
  destroy(): void
  setLocale(localeName: string): void
  paper(): void
  addXaxisAnnotation(options: any, pushToMemory?: boolean, context?: any): void
  addYaxisAnnotation(options: any, pushToMemory?: boolean, context?: any): void
  addPointAnnotation(options: any, pushToMemory?: boolean, context?: any): void
  removeAnnotation(id: string, options?: any): void
  clearAnnotations(options?: any): void
  dataURI(options?: { scale?: number; width?: number }): Promise<{ imgURI: string } | { blob: Blob }>
  exec(chartID: string, fn: string, ...args: Array<any>): any
  getChartByID(chartID: string): ApexCharts | undefined
  initOnLoad(): void
  exports: {
    cleanup(): string
    svgUrl(): string
    dataURI(options?: { scale?: number; width?: number }): Promise<{ imgURI: string } | { blob: Blob }>
    exportToSVG(): void
    exportToPng(): void
    exportToCSV(options?: { series?: any; fileName?: string; columnDelimiter?: string; lineDelimiter?: string }): void
    getSvgString(scale?: number): void
    triggerDownload(href: string, filename?: string, ext?: string): void
  }
};

export function createApexCharts() {
  return ApexCharts;
}
