'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var react = require('@emotion/react');
var core = require('@xstyled/core');
var system = require('@xstyled/system');
var styled$1 = require('@emotion/styled');
var util = require('@xstyled/util');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled$1);

function ColorModeStyle({ targetSelector }) {
  const colorModeStyles = React__namespace.useCallback((theme) => core.createColorStyles(theme, { targetSelector }), [targetSelector]);
  return /* @__PURE__ */ React__namespace.createElement(react.Global, {
    styles: colorModeStyles
  });
}
const ColorModeProvider = core.createColorModeProvider({
  ThemeContext: react.ThemeContext,
  ThemeProvider: react.ThemeProvider,
  ColorModeStyle
});

const useScreens = () => core.useThemeScreens(react.useTheme());
const useBreakpoint = () => core.useThemeBreakpoint(react.useTheme());
const useUp = (key) => core.useThemeUp(react.useTheme(), key);
const useDown = (key) => core.useThemeDown(react.useTheme(), key);

const useTh = core.createUseGetter(system.th, react.useTheme);
const useAngle = core.createUseGetter(system.th.angle, react.useTheme);
const useAnimation = core.createUseGetter(system.th.animation, react.useTheme);
const useBorder = core.createUseGetter(system.th.border, react.useTheme);
const useBorderColor = core.createUseGetter(system.th.borderColor, react.useTheme);
const useBorderStyle = core.createUseGetter(system.th.borderStyle, react.useTheme);
const useBorderWidth = core.createUseGetter(system.th.borderWidth, react.useTheme);
const useColor = core.createUseGetter(system.th.color, react.useTheme);
const useDuration = core.createUseGetter(system.th.duration, react.useTheme);
const useFont = core.createUseGetter(system.th.font, react.useTheme);
const useFontSize = core.createUseGetter(system.th.fontSize, react.useTheme);
const useFontWeight = core.createUseGetter(system.th.fontWeight, react.useTheme);
const useInset = core.createUseGetter(system.th.inset, react.useTheme);
const useLetterSpacing = core.createUseGetter(system.th.letterSpacing, react.useTheme);
const useLineHeight = core.createUseGetter(system.th.lineHeight, react.useTheme);
const usePercent = core.createUseGetter(system.th.percent, react.useTheme);
const usePx = core.createUseGetter(system.th.px, react.useTheme);
const useRadius = core.createUseGetter(system.th.radius, react.useTheme);
const useRingWidth = core.createUseGetter(system.th.ringWidth, react.useTheme);
const useShadow = core.createUseGetter(system.th.shadow, react.useTheme);
const useSize = core.createUseGetter(system.th.size, react.useTheme);
const useSpace = core.createUseGetter(system.th.space, react.useTheme);
const useTimingFunction = core.createUseGetter(system.th.timingFunction, react.useTheme);
const useTransform = core.createUseGetter(system.th.transform, react.useTheme);
const useTransition = core.createUseGetter(system.th.transition, react.useTheme);
const useTransitionProperty = core.createUseGetter(system.th.transitionProperty, react.useTheme);
const useZIndex = core.createUseGetter(system.th.zIndex, react.useTheme);

const Preflight = () => {
  const theme = react.useTheme();
  return /* @__PURE__ */ React__namespace.createElement(react.Global, {
    styles: system.getPreflightStyles(theme)
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
  const transform = core.createTransform(generator);
  return (strings, ...rawArgs) => {
    return (props) => {
      const emCssArgs = typeof strings === "function" ? react.css(strings(props)) : react.css(strings, ...rawArgs.map((arg) => {
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

const emStyled = typeof styled__default["default"] === "function" ? styled__default["default"] : styled__default["default"].default;

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
      const theme = react.useTheme();
      return /* @__PURE__ */ React__namespace.createElement(react.Global, {
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
    if (util.string(styles))
      return styles;
    return (theme) => {
      const p = { theme };
      const parseStyle = (style) => {
        if (typeof style === "object") {
          style = css(style);
        }
        return util.cascade(style, p);
      };
      if (Array.isArray(styles)) {
        return util.flatten(styles).map(parseStyle);
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
      return React__namespace.createElement.apply(void 0, arguments, ...children);
    }
    return react.jsx(type, __spreadProps(__spreadValues({}, props), { css: cx(props.css) }), ...children);
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

const { css, styled, x, createGlobalStyle, cx, jsx } = createCss(system.system);

Object.defineProperty(exports, 'CacheProvider', {
  enumerable: true,
  get: function () { return react.CacheProvider; }
});
Object.defineProperty(exports, 'ClassNames', {
  enumerable: true,
  get: function () { return react.ClassNames; }
});
Object.defineProperty(exports, 'Global', {
  enumerable: true,
  get: function () { return react.Global; }
});
Object.defineProperty(exports, 'ThemeContext', {
  enumerable: true,
  get: function () { return react.ThemeContext; }
});
Object.defineProperty(exports, 'ThemeProvider', {
  enumerable: true,
  get: function () { return react.ThemeProvider; }
});
Object.defineProperty(exports, 'keyframes', {
  enumerable: true,
  get: function () { return react.keyframes; }
});
Object.defineProperty(exports, 'useTheme', {
  enumerable: true,
  get: function () { return react.useTheme; }
});
Object.defineProperty(exports, 'withEmotionCache', {
  enumerable: true,
  get: function () { return react.withEmotionCache; }
});
Object.defineProperty(exports, 'withTheme', {
  enumerable: true,
  get: function () { return react.withTheme; }
});
Object.defineProperty(exports, 'getColorModeInitScriptElement', {
  enumerable: true,
  get: function () { return core.getColorModeInitScriptElement; }
});
Object.defineProperty(exports, 'getColorModeInitScriptTag', {
  enumerable: true,
  get: function () { return core.getColorModeInitScriptTag; }
});
Object.defineProperty(exports, 'useColorMode', {
  enumerable: true,
  get: function () { return core.useColorMode; }
});
Object.defineProperty(exports, 'useViewportWidth', {
  enumerable: true,
  get: function () { return core.useViewportWidth; }
});
exports.ColorModeProvider = ColorModeProvider;
exports.Preflight = Preflight;
exports.createCss = createCss;
exports.createGlobalStyle = createGlobalStyle;
exports.css = css;
exports.cx = cx;
exports["default"] = styled;
exports.jsx = jsx;
exports.useAngle = useAngle;
exports.useAnimation = useAnimation;
exports.useBorder = useBorder;
exports.useBorderColor = useBorderColor;
exports.useBorderStyle = useBorderStyle;
exports.useBorderWidth = useBorderWidth;
exports.useBreakpoint = useBreakpoint;
exports.useColor = useColor;
exports.useDown = useDown;
exports.useDuration = useDuration;
exports.useFont = useFont;
exports.useFontSize = useFontSize;
exports.useFontWeight = useFontWeight;
exports.useInset = useInset;
exports.useLetterSpacing = useLetterSpacing;
exports.useLineHeight = useLineHeight;
exports.usePercent = usePercent;
exports.usePx = usePx;
exports.useRadius = useRadius;
exports.useRingWidth = useRingWidth;
exports.useScreens = useScreens;
exports.useShadow = useShadow;
exports.useSize = useSize;
exports.useSpace = useSpace;
exports.useTh = useTh;
exports.useTimingFunction = useTimingFunction;
exports.useTransform = useTransform;
exports.useTransition = useTransition;
exports.useTransitionProperty = useTransitionProperty;
exports.useUp = useUp;
exports.useZIndex = useZIndex;
exports.x = x;
Object.keys(system).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return system[k]; }
  });
});
//# sourceMappingURL=index.cjs.map
