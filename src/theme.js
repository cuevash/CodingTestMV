// TS-LINT
/* tslint:disable:object-literal-sort-keys */

//
// IMPORTS
//
import * as CssUtils from 'ProjStyles/cssUtils';
import * as chroma from 'chroma-js'

const ratioR = 1.3
const ratioRInt = 1.1

const ratioFluidFonts = {
  mobile: 1.25,
  tablet: 1.25,
  desktop: 1.25  
} 

// Theme
let theme = {

  ratioFluidFonts: {
    ...ratioFluidFonts
  } ,

  unit: 'rem',
  unitSize: 8,
  spacing: 5,
  bgColor: 'darkgray',
  mainColor: 'green',
  stdButton_BgColor: 'red',

  // Top height in pixels 
  topHeight: '66px',
  topHeightNum: 66,

  // Footer height in pixels 
  footerHeight: '70px',
  footerHeightLength: '70',

  // Default link hover background
  link: {
    hover: {
      backgroundColor: '#cce2ff !important',
      color: 'rgba(0,0,0,.87) !important'
    }
  },

  // Title
  title: {
    fontSize: '20px',
    fontWeight: '400'
  },

  // SubTitle
  subTitle: {
    fontSize: '16px',
    fontWeight: '400'
  },  

  font: "'Merriweather Sans', sans-serif",
  altFont: "'Prelo Slab', serif",  
  altMainFont: "'SmgFlama Cond', serif", 
  
  breakpoints: [ '36em', '48em', '64em', '85.375em', '113.77em' ],

  space: [
    0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102
  ],

  fontSizes: {  
    massive: CssUtils.calcGblPxToRem(CssUtils.calcPxForRem(1) * Math.pow( ratioR, 5 )),
    hugePlus: CssUtils.calcGblPxToRem(CssUtils.calcPxForRem(1) * Math.pow( ratioR, 4 )),
    huge: CssUtils.calcGblPxToRem(CssUtils.calcPxForRem(1) * Math.pow( ratioR, 3 )),
    big: CssUtils.calcGblPxToRem(CssUtils.calcPxForRem(1) * Math.pow( ratioR, 2 )),
    largePlus: CssUtils.calcGblPxToRem(CssUtils.calcPxForRem(1) * Math.pow( ratioR, 1 ) * ratioRInt),
    large: CssUtils.calcGblPxToRem(CssUtils.calcPxForRem(1) * Math.pow( ratioR, 1 )) ,
    medium: `1rem`, // Like 35.7216px for 1920 screen, that is the reference
    small: CssUtils.calcGblPxToRem(CssUtils.calcPxForRem(1) * Math.pow( ratioR, -1 )),
    tiny: CssUtils.calcGblPxToRem(CssUtils.calcPxForRem(1) * Math.pow( ratioR, -2 )),
    mini: CssUtils.calcGblPxToRem(CssUtils.calcPxForRem(1) * Math.pow( ratioR, -3 )),
  },

  fontWeights: {
    ultraLight: 100,
    light: 300,
    normal: 400,
    bold: 700
  },
  
  colors: {
    black: '#000',
    white: '#FFF',
    greyDark: 'rgb(56, 67, 72)',
    orangeDark1: 'rgb(217, 52, 45)',
    orangeDark2: 'rgb(219, 56, 44)',
    purpleLight: chroma(240, 241, 249).alpha(0.6014).css()
  },

  monospace: '"Roboto Mono", Menlo, monospace',
  radius: 2,

  numFixedDecimalDefault: 2,

};

export {  theme }