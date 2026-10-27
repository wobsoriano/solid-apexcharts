import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'pnpm dev',
    port: 3000,
    reuseExistingServer: true,
  },
  testDir: 'test',
  testMatch: /(.+\.)?(test|spec)\.[jt]sx?$/,
}

export default config
