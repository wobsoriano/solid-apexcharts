// @refresh reload
import { clientOnly } from '@solidjs/start';

const SolidApexCharts = clientOnly(() => import('~/components/Chart'));

export default function Home() {
  return (
    <main>
      <SolidApexCharts fallback={<div>Loading chart</div>} />
    </main>
  );
}
