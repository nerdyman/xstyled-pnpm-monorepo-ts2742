/* eslint import/no-default-export: 0 */
import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  clean: !options.watch,
  dts: true,
  entryPoints: ['src/**/index.ts'],
  external: [
    '@emotion/react',
    '@xstyled/emotion',
    '@xstyled/system',
    '@xstyled/styled-components',
    '@xstyled/utils',
    'react',
    'react-dom',
    'styled-components',
  ],
  format: ['esm'],
  incremental: !options.watch,
  minify: !options.watch,
  target: 'es2020',
  sourcemap: true,
  splitting: !options.watch,
}));
