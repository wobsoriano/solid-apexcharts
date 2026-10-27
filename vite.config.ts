import solid from 'unplugin-solid/rolldown'
import { defineConfig } from 'vite-plus'

export default defineConfig({
  pack: [
    {
      entry: ['src/index.tsx'],
      platform: 'neutral',
      dts: true,
      plugins: [solid()],
    },
    {
      entry: ['src/index.tsx'],
      platform: 'neutral',
      dts: false,
      inputOptions: { transform: { jsx: 'preserve' } },
      outExtensions: () => ({ js: '.jsx' }),
    },
  ],
  staged: {
    '*.{ts,tsx,js,jsx}': 'vp check --fix',
    '*.{json,md,yml,yaml}': 'vp fmt',
  },
  fmt: {
    singleQuote: true,
    semi: false,
    printWidth: 100,
  },
  lint: {
    options: { typeAware: true },
  },
})
