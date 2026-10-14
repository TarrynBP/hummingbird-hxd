import { defineConfig, mergeConfig } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import viteConfig from './vite.config';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// Reuse the application's Vite configuration (aliases, plugins, define) so that
// stories resolve modules exactly like the running app does.
const appConfig = viteConfig({ mode: 'test', command: 'serve' });

export default mergeConfig(
  appConfig,
  defineConfig({
    test: {
      projects: [
        {
          extends: true,
          plugins: [storybookTest({ configDir: path.join(dirname, '.storybook') })],
          test: {
            name: 'storybook',
            environment: 'jsdom',
            setupFiles: [path.join(dirname, '.storybook/vitest.setup.ts')],
            testTimeout: 20000,
          },
        },
      ],
    },
  }),
);
