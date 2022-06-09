import * as React from 'react';
import * as _xstyled_system from '@xstyled/system';
import { Theme as Theme$1, StyleGenerator, StyleGeneratorProps, Screens } from '@xstyled/system';
export * from '@xstyled/system';
import { SerializedStyles, Theme, jsx as jsx$1 } from '@emotion/react';
export { CacheProvider, ClassNames, Global, ThemeContext, ThemeProvider, keyframes, useTheme, withEmotionCache, withTheme } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import { StyledComponent, CreateStyled, CreateStyledComponent } from '@emotion/styled';
import * as _xstyled_core from '@xstyled/core';
import { BoxElements } from '@xstyled/core';
export { getColorModeInitScriptElement, getColorModeInitScriptTag, useColorMode, useViewportWidth } from '@xstyled/core';

interface Props {
    theme?: Theme;
}
interface CSSInterpolationFn {
    (props: Props): CSSInterpolation;
}
interface SerializedStylesFn {
    (props: Props): SerializedStyles;
}
interface XCSSFunction {
    (fn: CSSInterpolationFn): SerializedStylesFn;
    (...args: CSSInterpolation[]): SerializedStylesFn;
    (strings: TemplateStringsArray, ...rawArgs: CSSInterpolation[]): SerializedStylesFn;
    (strings: TemplateStringsArray | CSSInterpolation | CSSInterpolationFn, ...rawArgs: CSSInterpolation[]): SerializedStylesFn;
}

interface Cx {
    (styles: SerializedStylesFn | SerializedStylesFn[]): string | ((theme: Theme$1) => any);
}

interface XCreateGlobalStyle {
    <P extends object = {}>(...styles: Parameters<XCSSFunction>): React.FC<P>;
}

declare type JSXElementKeys = keyof JSX.IntrinsicElements;
declare type X<TGen extends StyleGenerator> = {
    [Key in JSXElementKeys]: StyledComponent<StyleGeneratorProps<TGen> & {
        as?: React.ElementType;
        theme?: Theme;
    }, Omit<JSX.IntrinsicElements[Key], 'color'>>;
};

declare type BoxStyledTags<TProps extends object> = {
    [Tag in keyof BoxElements]: CreateStyledComponent<TProps & {
        as?: React.ElementType;
        theme?: Theme;
    }, JSX.IntrinsicElements[BoxElements[Tag]]>;
};
interface XStyled<TGen extends StyleGenerator> extends CreateStyled, BoxStyledTags<StyleGeneratorProps<TGen>> {
}

declare const ColorModeProvider: React.FC<_xstyled_core.ColorModeProviderProps>;

declare const useScreens: () => Screens;
declare const useBreakpoint: () => string | null;
declare const useUp: (key: string | number) => boolean;
declare const useDown: (key: string | number) => boolean;

declare const useTh: (value: any, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;
declare const useAngle: (value: _xstyled_system.Angle, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;
declare const useAnimation: (value: _xstyled_system.ThemeAnimation<_xstyled_system.Theme>, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;
declare const useBorder: (value: _xstyled_system.ThemeBorder<_xstyled_system.Theme>, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;
declare const useBorderColor: (value: _xstyled_system.ThemeBorderColor<_xstyled_system.Theme>, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;
declare const useBorderStyle: (value: _xstyled_system.ThemeBorderStyle<_xstyled_system.Theme>, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;
declare const useBorderWidth: (value: _xstyled_system.ThemeBorderWidth<_xstyled_system.Theme>, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;
declare const useColor: (value: _xstyled_system.ThemeColor<_xstyled_system.Theme>, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;
declare const useDuration: (value: _xstyled_system.Duration<_xstyled_system.Theme>, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;
declare const useFont: (value: _xstyled_system.ThemeFont<_xstyled_system.Theme>, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;
declare const useFontSize: (value: _xstyled_system.ThemeFontSize<_xstyled_system.Theme>, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;
declare const useFontWeight: (value: _xstyled_system.ThemeFontWeight<_xstyled_system.Theme>, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;
declare const useInset: (value: _xstyled_system.ThemeInset<_xstyled_system.Theme>, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;
declare const useLetterSpacing: (value: _xstyled_system.ThemeLetterSpacing<_xstyled_system.Theme>, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;
declare const useLineHeight: (value: _xstyled_system.ThemeLineHeight<_xstyled_system.Theme>, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;
declare const usePercent: (value: _xstyled_system.Percent, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;
declare const usePx: (value: _xstyled_system.Pixel, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;
declare const useRadius: (value: _xstyled_system.ThemeRadius<_xstyled_system.Theme>, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;
declare const useRingWidth: (value: _xstyled_system.ThemeRingWidth<_xstyled_system.Theme>, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;
declare const useShadow: (value: _xstyled_system.ThemeShadow<_xstyled_system.Theme>, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;
declare const useSize: (value: _xstyled_system.ThemeSize<_xstyled_system.Theme>, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;
declare const useSpace: (value: _xstyled_system.ThemeSpace<_xstyled_system.Theme>, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;
declare const useTimingFunction: (value: _xstyled_system.ThemeTimingFunction<_xstyled_system.Theme>, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;
declare const useTransform: (value: _xstyled_system.ThemeTransform<_xstyled_system.Theme>, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;
declare const useTransition: (value: _xstyled_system.ThemeTransition<_xstyled_system.Theme>, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;
declare const useTransitionProperty: (value: _xstyled_system.ThemeTransitionProperty<_xstyled_system.Theme>, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;
declare const useZIndex: (value: _xstyled_system.ThemeZIndex<_xstyled_system.Theme>, defaultValue?: _xstyled_system.CSSScalar) => _xstyled_system.CSSScalar;

declare const Preflight: React.FC;

declare type XJsx = typeof jsx$1;

interface XStyledSet<TGen extends StyleGenerator> {
    css: XCSSFunction;
    x: X<TGen>;
    styled: XStyled<TGen>;
    createGlobalStyle: XCreateGlobalStyle;
    cx: Cx;
    jsx: XJsx;
}
declare const createCss: <TGen extends StyleGenerator<{}>>(generator: TGen) => XStyledSet<TGen>;

declare const css: XCSSFunction;
declare const styled: XStyled<_xstyled_system.StyleGenerator<_xstyled_system.SystemProps<_xstyled_system.Theme>>>;
declare const x: X<_xstyled_system.StyleGenerator<_xstyled_system.SystemProps<_xstyled_system.Theme>>>;
declare const createGlobalStyle: XCreateGlobalStyle;
declare const cx: Cx;
declare const jsx: typeof React.createElement;

export { ColorModeProvider, Preflight, createCss, createGlobalStyle, css, cx, styled as default, jsx, useAngle, useAnimation, useBorder, useBorderColor, useBorderStyle, useBorderWidth, useBreakpoint, useColor, useDown, useDuration, useFont, useFontSize, useFontWeight, useInset, useLetterSpacing, useLineHeight, usePercent, usePx, useRadius, useRingWidth, useScreens, useShadow, useSize, useSpace, useTh, useTimingFunction, useTransform, useTransition, useTransitionProperty, useUp, useZIndex, x };
