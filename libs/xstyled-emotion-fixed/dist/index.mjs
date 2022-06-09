import * as React from 'react';
import { ThemeContext, ThemeProvider, Global, useTheme, css as css$1, jsx as jsx$1 } from '@emotion/react';
export { CacheProvider, ClassNames, Global, ThemeContext, ThemeProvider, keyframes, useTheme, withEmotionCache, withTheme } from '@emotion/react';
import { createColorModeProvider, createColorStyles, useThemeScreens, useThemeBreakpoint, useThemeUp, useThemeDown, createUseGetter, createTransform } from '@xstyled/core';
export { getColorModeInitScriptElement, getColorModeInitScriptTag, useColorMode, useViewportWidth } from '@xstyled/core';
import { th, getPreflightStyles, system as system$1 } from '@xstyled/system';
export * from '@xstyled/system';
import styled$1 from '@emotion/styled';
import { string, flatten, cascade } from '@xstyled/util';

function ColorModeStyle({ targetSelector }) {
  const colorModeStyles = React.useCallback((theme) => createColorStyles(theme, { targetSelector }), [targetSelector]);
  return /* @__PURE__ */ React.createElement(Global, {
    styles: colorModeStyles
  });
}
const ColorModeProvider = createColorModeProvider({
  ThemeContext,
  ThemeProvider,
  ColorModeStyle
});

const useScreens = () => useThemeScreens(useTheme());
const useBreakpoint = () => useThemeBreakpoint(useTheme());
const useUp = (key) => useThemeUp(useTheme(), key);
const useDown = (key) => useThemeDown(useTheme(), key);

const useTh = createUseGetter(th, useTheme);
const useAngle = createUseGetter(th.angle, useTheme);
const useAnimation = createUseGetter(th.animation, useTheme);
const useBorder = createUseGetter(th.border, useTheme);
const useBorderColor = createUseGetter(th.borderColor, useTheme);
const useBorderStyle = createUseGetter(th.borderStyle, useTheme);
const useBorderWidth = createUseGetter(th.borderWidth, useTheme);
const useColor = createUseGetter(th.color, useTheme);
const useDuration = createUseGetter(th.duration, useTheme);
const useFont = createUseGetter(th.font, useTheme);
const useFontSize = createUseGetter(th.fontSize, useTheme);
const useFontWeight = createUseGetter(th.fontWeight, useTheme);
const useInset = createUseGetter(th.inset, useTheme);
const useLetterSpacing = createUseGetter(th.letterSpacing, useTheme);
const useLineHeight = createUseGetter(th.lineHeight, useTheme);
const usePercent = createUseGetter(th.percent, useTheme);
const usePx = createUseGetter(th.px, useTheme);
const useRadius = createUseGetter(th.radius, useTheme);
const useRingWidth = createUseGetter(th.ringWidth, useTheme);
const useShadow = createUseGetter(th.shadow, useTheme);
const useSize = createUseGetter(th.size, useTheme);
const useSpace = createUseGetter(th.space, useTheme);
const useTimingFunction = createUseGetter(th.timingFunction, useTheme);
const useTransform = createUseGetter(th.transform, useTheme);
const useTransition = createUseGetter(th.transition, useTheme);
const useTransitionProperty = createUseGetter(th.transitionProperty, useTheme);
const useZIndex = createUseGetter(th.zIndex, useTheme);

const Preflight = () => {
  const theme = useTheme();
  return /* @__PURE__ */ React.createElement(Global, {
    styles: getPreflightStyles(theme)
  });
};

var __defProp$3 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
const styleToString = (style, props) => {
  if (Array.isArray(style))
    return style.reduce((str, style2) => str + styleToString(style2, props), "");
  if (typeof style === "function")
    return styleToString(style(props), props);
  return style;
};
const createCssFunction = (generator) => {
  const transform = createTransform(generator);
  return (strings, ...rawArgs) => {
    return (props) => {
      const emCssArgs = typeof strings === "function" ? css$1(strings(props)) : css$1(strings, ...rawArgs.map((arg) => {
        if (typeof arg === "function")
          return arg(props);
        return arg;
      }));
      return __spreadProps$1(__spreadValues$3({}, emCssArgs), {
        styles: styleToString(transform(emCssArgs.styles), props)
      });
    };
  };
};

const emStyled = typeof styled$1 === "function" ? styled$1 : styled$1.default;

var __defProp$2 = Object.defineProperty;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
const flattenArgs = (arg, props) => {
  if (typeof arg === "function")
    return flattenArgs(arg(props), props);
  if (Array.isArray(arg))
    return arg.map((arg2) => flattenArgs(arg2, props));
  return arg;
};
const getCreateStyle = (baseCreateStyle, css, generator) => {
  if (!generator) {
    return (strings, ...args) => baseCreateStyle((props) => css(strings, ...flattenArgs(args, props))(props));
  }
  return (strings, ...args) => {
    if (Array.isArray(strings)) {
      strings = [...strings, "\n"];
    }
    args = [...args, generator];
    return baseCreateStyle((props) => css(strings, ...flattenArgs(args, props))(props));
  };
};
const createShouldForwardProp = (generator) => {
  const propSet = new Set(generator.meta.props);
  return (prop) => prop !== "as" && !prop.startsWith("$") && !propSet.has(prop);
};
const createBaseStyled = (css, generator) => {
  const defaultOptions = generator ? {
    shouldForwardProp: createShouldForwardProp(generator)
  } : {};
  return (component, options) => getCreateStyle(emStyled(component, __spreadValues$2(__spreadValues$2({}, defaultOptions), options)), css, generator);
};
const createStyled = (generator) => {
  const css = createCssFunction(generator);
  const styled = createBaseStyled(css);
  const xstyled = createBaseStyled(css, generator);
  styled.box = xstyled("div");
  Object.keys(emStyled).forEach((key) => {
    styled[key] = styled(key);
    styled[`${key}Box`] = xstyled(key);
  });
  return styled;
};

const createX = (generator) => {
  const styled = createBaseStyled(createCssFunction(generator), generator);
  const x = {};
  Object.keys(emStyled).forEach((tag) => {
    x[tag] = styled(tag)``;
  });
  return x;
};

var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
const createCreateGlobalStyle = (generator) => {
  const css = createCssFunction(generator);
  return (...styles) => {
    const GlobalStyle = (props) => {
      const theme = useTheme();
      return /* @__PURE__ */ React.createElement(Global, {
        styles: css(...styles)(__spreadValues$1({ theme }, props))
      });
    };
    GlobalStyle.displayName = "GlobalStyle";
    return GlobalStyle;
  };
};

const createCx = (generator) => {
  const css = createCssFunction(generator);
  return (styles) => {
    if (string(styles))
      return styles;
    return (theme) => {
      const p = { theme };
      const parseStyle = (style) => {
        if (typeof style === "object") {
          style = css(style);
        }
        return cascade(style, p);
      };
      if (Array.isArray(styles)) {
        return flatten(styles).map(parseStyle);
      }
      return parseStyle(styles);
    };
  };
};

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const createJsx = (generator) => {
  const cx = createCx(generator);
  return function jsx(type, props, ...children) {
    if (props == null || !Object.prototype.hasOwnProperty.call(props, "css")) {
      return React.createElement.apply(void 0, arguments, ...children);
    }
    return jsx$1(type, __spreadProps(__spreadValues({}, props), { css: cx(props.css) }), ...children);
  };
};

const createCss = (generator) => {
  return {
    css: createCssFunction(generator),
    x: createX(generator),
    styled: createStyled(generator),
    createGlobalStyle: createCreateGlobalStyle(generator),
    cx: createCx(generator),
    jsx: createJsx(generator)
  };
};

const { css, styled, x, createGlobalStyle, cx, jsx } = createCss(system$1);

export { ColorModeProvider, Preflight, createCss, createGlobalStyle, css, cx, styled as default, jsx, useAngle, useAnimation, useBorder, useBorderColor, useBorderStyle, useBorderWidth, useBreakpoint, useColor, useDown, useDuration, useFont, useFontSize, useFontWeight, useInset, useLetterSpacing, useLineHeight, usePercent, usePx, useRadius, useRingWidth, useScreens, useShadow, useSize, useSpace, useTh, useTimingFunction, useTransform, useTransition, useTransitionProperty, useUp, useZIndex, x };
//# sourceMappingURL=index.mjs.map
