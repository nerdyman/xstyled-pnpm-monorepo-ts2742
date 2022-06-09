import type { PropsWithChildren } from 'react';

import type { Theme } from '~/theme';

export type ThemeProviderProps = PropsWithChildren<{
  theme?: Theme;
}>;
