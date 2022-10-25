import { Title, unstable_clientOnly } from 'solid-start';
const SolidApexCharts = unstable_clientOnly(() => import('~/components/Chart'));

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <SolidApexCharts fallback={<div>hello</div>} />
    </main>
  );
}
