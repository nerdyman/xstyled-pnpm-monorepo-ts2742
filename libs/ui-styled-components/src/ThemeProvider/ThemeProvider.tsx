import { ThemeProvider as BaseThemeProvider } from '@xstyled/styled-components';
import type { FC } from 'react';
import React from 'react';

import { theme as baseTheme } from '~/theme';

import type { ThemeProviderProps } from './types';

export const ThemeProvider: FC<ThemeProviderProps> = ({ theme = baseTheme, ...props }) => (
  <BaseThemeProvider theme={theme} {...props} />
);
