import withSolid from 'rollup-preset-solid';

export default withSolid({
  input: 'src/index.tsx',
  printInstructions: true,
  external: ['apexcharts/dist/apexcharts.esm.js'],
});
