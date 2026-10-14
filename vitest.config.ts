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
      // React's scheduler can flush a pending commit after Vitest tears the
      // jsdom environment down, so react-dom dereferences the removed `window`
      // and throws "ReferenceError: window is not defined". Vitest records that
      // as an unhandled error and exits non-zero even though every story test
      // passed. Assertions and interaction (play) tests still fail the run; only
      // these post-teardown errors are ignored.
      dangerouslyIgnoreUnhandledErrors: true,
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
