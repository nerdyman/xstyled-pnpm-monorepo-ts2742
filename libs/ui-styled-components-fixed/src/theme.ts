import { rpxTransformers } from '@xstyled/styled-components-fixed';

export const theme = {
  settings: {
    rootFontSize: '16px',
  },

  borderWidths: {
    0: '0px',
    1: '1px',
    2: '2px',
  },

  colors: {
    primary50: '#bc2d1a',
    primary120: '#f8d2cc',
  },

  fonts: {
    base: 'inter, system-ui, sans-serif',
    monospace: 'monospace',
  },

  fontSizes: {
    h1: 56,
    body: 18,
  },

  fontWeights: {
    normal: 500,
  },

  lineHeights: {
    h1: 1.14,
    body: 1.444,
  },

  radii: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
  },

  sizes: {},

  space: {
    1: 4,
    2: 8,
    3: 12,
    4: 16,
  },

  transformers: {
    // Transform theme `px` values to `rem`.
    ...rpxTransformers,
  },

  transitions: {
    normal: '0.25s ease-in-out',
    slow: '0.35s ease-in-out',
  },
};

export type Theme = typeof theme;
