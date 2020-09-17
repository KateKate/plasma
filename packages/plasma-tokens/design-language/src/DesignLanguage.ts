import {Color, DropShadow, Image, Lottie, Toward, Typograph, Font, LinearGradient, Point2D, TextAlignment} from '@diez/prefabs';
// import {Margin} from './components/Margin';

// import { plasmaStylesCopyTokens } from './designs/PlasmaStylesCopy.figma'
import { plasmaStylesTokens } from './designs/PlasmaStyles.figma'

import { colorToCss, linearGradientToCss } from '@diez/web-sdk-common';
// import { toRgba, toLGRgba, toPrecision } from './utils';



const colors = {
  white_primary: plasmaStylesTokens.colors.textIconsGblWhitePrimary,
  white_secondary: plasmaStylesTokens.colors.textIconsGblWhiteSecondary,
  white_tertiary: plasmaStylesTokens.colors.textIconsGblWhiteTetriary,

  black_primary: plasmaStylesTokens.colors.textIconsGblBlackPrimary,
  black_secondary: plasmaStylesTokens.colors.textIconsGblBlackSecondary,
  black_tertiary: plasmaStylesTokens.colors.textIconsGblBlackTetriary,

  white: plasmaStylesTokens.colors.textIconsGblWhitePrimary,
  black: plasmaStylesTokens.colors.textIconsGblBlackPrimary,

  transparent: Color.rgba(0, 0, 0, 0),
}


// const palette = {
const theme = {
  // dark
  dark_primary: plasmaStylesTokens.colors.textIconsPrimary1,
  dark_secondary: plasmaStylesTokens.colors.textIconsSecondary1,
  dark_tertiary: plasmaStylesTokens.colors.textIconsTertiary1,

  dark_warning: plasmaStylesTokens.colors.textIconsWarning1,
  dark_critical: plasmaStylesTokens.colors.textIconsCritical1,

  dark_sber: plasmaStylesTokens.colors.textIconsBrandSber1,
  dark_eva: plasmaStylesTokens.colors.textIconsBrandEva1,
  dark_joy: plasmaStylesTokens.colors.textIconsBrandJoy1,

  dark_bg: plasmaStylesTokens.colors.backgroundDefault,

  dark_bg_primary: plasmaStylesTokens.colors.background011,
  dark_bg_secondary: plasmaStylesTokens.colors.background021,
  dark_bg_tertiary: plasmaStylesTokens.colors.background031,

  dark_overlay: plasmaStylesTokens.colors.backgroundOverlay1,


  // light
  light_primary: plasmaStylesTokens.colors.textIconsPrimary,
  light_secondary: plasmaStylesTokens.colors.textIconsSecondary,
  light_tertiary: plasmaStylesTokens.colors.textIconsTertiary,

  light_warning: plasmaStylesTokens.colors.textIconsWarning,
  light_critical: plasmaStylesTokens.colors.textIconsCritical,

  light_sber: plasmaStylesTokens.colors.textIconsBrandSber,
  light_eva: plasmaStylesTokens.colors.textIconsBrandEva,
  light_joy: plasmaStylesTokens.colors.textIconsBrandJoy,

  light_bg: plasmaStylesTokens.colors.backgroundDefault1,

  light_bg_primary: plasmaStylesTokens.colors.background01,
  light_bg_secondary: plasmaStylesTokens.colors.background02,
  light_bg_tertiary: plasmaStylesTokens.colors.background03,


  light_overlay: plasmaStylesTokens.colors.backgroundOverlay,
};


const gradients = {
  // dark
  dark_bg_sber: plasmaStylesTokens.gradients.backgroundAssistantSber,
  dark_bg_eva: plasmaStylesTokens.gradients.backgroundAssistantEva,
  dark_bg_joy: plasmaStylesTokens.gradients.backgroundAssistantJoy,

  // light
  light_bg_sber: plasmaStylesTokens.gradients.backgroundAssistantSber1,
  light_bg_eva: plasmaStylesTokens.gradients.backgroundAssistantEva1,
  light_bg_joy: plasmaStylesTokens.gradients.backgroundAssistantJoy1,
}
// 
// /**
//  * You can reference properties from other components.
//  */
// const palette = {
//   contentBackground: colors.white,
//   text: colors.black,
//   caption: colors.purple,
//   headerBackground: LinearGradient.make(Toward.Bottom, colors.darkPurple, colors.black),
// }

/**
 * All of rich language features of TypeScript are at your disposal; for example,
 * you can define an object to keep track of your fonts.
 */
// const Fonts = {
//   SourceSansPro: {
//     Regular: Font.fromFile('assets/SourceSansPro-Regular.ttf'),
//   },
// }

/**
 * Typographs encapsulate type styles with support for a specific font, font size,
 * and color. More typograph properties are coming soon.
 */
// const typography = {
//   heading1: new Typograph({
//     font: Fonts.SourceSansPro.Regular,
//     fontSize: 24,
//     color: palette.text,
//   }),
// 
//   body: new Typograph({
//     font: Fonts.SourceSansPro.Regular,
//     fontSize: 18,
//     color: palette.text,
//     alignment: TextAlignment.Center,
//   }),
// 
//   caption: new Typograph({
//     font: Fonts.SourceSansPro.Regular,
//     fontSize: 14,
//     color: palette.caption,
//   }),
// }

const { typography: disigners } = plasmaStylesTokens;

const typography = {
  display1: disigners.sbS9696Display1Medium,
  display2: disigners.sbS6064Display2Medium,
  display3: disigners.sbS4852Display3Medium,

  headline1: disigners.sbS3236Headline1Bold,
  headline2: disigners.sbS2428Headline2Semibold,
  headline3: disigners.sbS2024Headline3Semibold,
  headline4: disigners.sbS2024Headline4Bold,

  body1: disigners.sbS1620Body1Medium,
  body2: disigners.sbS1620Body2Semibold,
  body3: disigners.sbS1620Body3Bold,

  paragraph1: disigners.sbS1622ParagraphText1Regular,
  paragraph2: disigners.sbS1622ParagraphText2Semibold,

  footnote1: disigners.sbS1418Footnote1Medium,
  footnote2: disigners.sbS1418Footnote2Semibold,

  button1: disigners.sbS1620Button1Semibold,
  button2: disigners.sbS1416Button2Semibold,

  caption: disigners.sbS1216CaptionMedium,

  underline: disigners.sbS1012Medium,

};

// ADD Helvetica & Arial to 'sans-serif' fallbacks
function addFallbacks(font: Font) {
  const fallback = font.fallbacks.pop();
  if (fallback === 'sans-serif') {
    font.fallbacks.push('Helvetica');
    font.fallbacks.push('Arial');
    font.fallbacks.push(fallback);
    console.log(`Add fallbacks ${font.fallbacks} to: ${font.name}`);
  }
}

const fonts = plasmaStylesTokens.fonts;
Object.keys(fonts.SbSansText).forEach(key => {
  const font = (fonts.SbSansText as { [key: string]: Font })[key];
  addFallbacks(font);
});



// 
// /**
//  * In addition to colors and typography, you can also collect other types of
//  * design language primitives in components as well — such as images, icons &
//  * animations.
//  */
// const images = {
//   logo: Image.responsive('assets/logo.png', 52, 48),
//   masthead: Image.responsive('assets/masthead.png', 208, 88),
// }
// 
// /**
//  * You can even collect your own custom components.
//  */
// const layoutValues = {
//   spacingSmall: 5,
//   spacingMedium: 25,
//   spacingLarge: 40,
//   contentMargin: new Margin({
//     top: 40,
//     left: 10,
//     right: 10,
//     bottom: 10,
//   }),
// }
// 
// /**
//  * You can also define strings.
//  */
// const strings = {
//   title: 'Diez',
//   caption: 'Keep your designs in sync with code',
//   helper: 'Modify the contents of “src/DesignLanguage.ts” (relative to the root of the Diez project) to see changes to the design language in real time.',
// }
// 
// const shadows = {
//   logo: new DropShadow({
//     offset: Point2D.make(0, 1),
//     radius: 16,
//     color: colors.black.fade(0.59),
//   }),
// }
// 
// /**
//  * Note how this component is exported from `index.ts`. Diez compiles these
//  * exported components for your apps' codebases.
//  *
//  * For example:
//  *   - If you run `yarn start web` or `npm run start web`, Diez will create a Node package called
//  *     `diez-plasma-tokens-web`. Look for `App.jsx` inside `examples/web` to see
//  *     how you can use Diez in a web codebase.
//  *   - If you run `yarn start ios` or `npm run start ios`, Diez will create a CocoaPods dependency
//  *     called `DiezPlasmaTokens`. Look for `ViewController.swift` inside
//  *     `examples/ios` to see how you can use Diez in an iOS codebase.
//  *   - If you run `yarn start android` or `npm run start android`, Diez will create an Android library.
//  *     Look for `MainActivity.kt` inside `examples/android` to see how you can
//  *     use Diez in an Android codebase.
//   *  - If you run `yarn start web` or `npm run start web`, Diez will create a Web App with your tokens.
//  */

// type Colourfull = { [key: string]: Color | LinearGradient | string }

// const transform = <T extends Colourfull>(colors: T) => {
//   return Object.entries(colors).reduce((a, [key, value]) => {
//     const acc: Colourfull = a as T;
//     if (value instanceof Color) {
//       acc[key] = toPrecision(value) as Color;
//       // console.log(key, value, acc[key]);
//     } else if (value instanceof LinearGradient) {
//       // TODO: transform lgrads too
//       // acc[key] = toLGRgba(linearGradientToCss(value));
//       acc[key] = value;
//     } else {
//       acc[key] = value;
//     }

//     return acc as T;
//   }, {} as T);
// };

export const designLanguage = {
  // palette,
  theme,
  colors,
//   colors: plasmaStylesTokens.colors,
  // typography: plasmaStylesTokens.typography,
  typography,
  gradients,
  // gradients: plasmaStylesTokens.gradients,
  // shadows: plasmaStylesTokens.shadows,
  // palette,
//   typography,
  // images,
  // layoutValues,
  // strings,
  // shadows,
  // loadingAnimation: Lottie.fromJson('assets/loadingAnimation.json', false),
}
