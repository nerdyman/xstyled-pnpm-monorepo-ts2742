import { compose, createCss, style, system, th } from '@xstyled/styled-components';

export { style, th };

export const { css, x, createGlobalStyle, styled } = createCss(compose(system));
