// TS-LINT
/* tslint:disable:object-literal-sort-keys */

//
// IMPORTS
//
import * as CssUtils from 'ProjStyles/cssUtils';
import * as chroma from 'chroma-js'

// tslint:disable:no-console
console.log("Cgormamam", chroma('#393939').alpha(0.6014).css())

const ratioR = 1.3
const ratioRInt = 1.1

const ratioFluidFonts = {
  mobile: 1.25,
  tablet: 1.25,
  desktop: 1.25  
} 

// in rem
const mediumFluidFonts = {
  mobile: 1.14,
  tablet: 1.6,
  desktop: 1.6
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


  font: "'SmgFlama', serif",
  altFont: "'Prelo Slab', serif",  
  altMainFont: "'SmgFlama Cond', serif", 

  //breakpoints: [ '40em', '52em', '64em' ],
  
  breakpoints: [ '36em', '48em', '64em', '85.375em', '113.77em' ],

  space: [
    0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102
  ],

  // fontSizes: {
  //   massive: `${Math.pow(ratioFluidFonts.mobile, 4)}rem`,
  //   huge: `${Math.pow(ratioFluidFonts.mobile, 3)}rem`,
  //   big: `${Math.pow(ratioFluidFonts.mobile, 2)}rem`,
  //   large: `${Math.pow(ratioFluidFonts.mobile, 1)}rem`,
  //   medium: `1rem`,
  //   small: `${Math.pow(ratioFluidFonts.mobile, -1)}rem`,
  //   tiny: `${Math.pow(ratioFluidFonts.mobile, -2)}rem`,
  //   mini: `${Math.pow(ratioFluidFonts.mobile, -3)}rem`,
  // },

  // fontSizes: {
  //   massive: CssUtils.calcGblPxToRem(117),
  //   hugePlus: CssUtils.calcGblPxToRem(90),
  //   huge: CssUtils.calcGblPxToRem(77),
  //   big: CssUtils.calcGblPxToRem(50),
  //   large: CssUtils.calcGblPxToRem(30),
  //   medium: `1rem`, // Like 35.7216px for 1920 screen, that is the reference
  //   small: CssUtils.calcGblPxToRem(20),
  //   tiny: `${Math.pow(ratioFluidFonts.mobile, -2)}rem`,
  //   mini: `${Math.pow(ratioFluidFonts.mobile, -3)}rem`,
  // },

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




  // fontSizes: [
  //   `${Math.pow(ratioFluidFonts.mobile, -3)}rem`,
  //   `${Math.pow(ratioFluidFonts.mobile, -2)}rem`,
  //   `${Math.pow(ratioFluidFonts.mobile, -1)}rem`,
  //   `1rem`,
  //   `${Math.pow(ratioFluidFonts.mobile, 1)}rem`,
  //   `${Math.pow(ratioFluidFonts.mobile, 2)}rem`,
  //   `${Math.pow(ratioFluidFonts.mobile, 3)}rem`,
  //   `${Math.pow(ratioFluidFonts.mobile, 4)}rem`,  
  // ],

  // weights: [
  //   100, 400, 600, 900
  // ],

  fontWeights: {
    ultraLight: 100,
    light: 300,
    normal: 400,
    bold: 700
  },
  
  colors: {
    black: '#000',
    black01: '#393939',
    black01Op69: chroma('#393939').alpha(0.6014).css(),
    lightBlack: 'rgb(34,34,34)',
    white: '#fff',
    blue: '#07c',
    lightBlue: '#0077cc',
    orange: '#FCAC68',
    grey: '#666666',
    lightGrey: '#eee',
    grey2: '#efefef',
    grey2_rgb: 'rgb(239,239,239)',
    grey3: '#e6e6e6',
    grey4: '#dddddd',
    greySilver: 'rgb(192,192,192)',
    grey5: 'rgb(176,176,176)',
    grey6: '#efefef',
    lightGrey2: 'rgb(248,248,248)',
    lightGrey3: 'rgb(246,246,246)',
    lightGrey4: 'rgb(240,240,240)',
    purple: '#170e90',
    lightBlack2: '#5c5c5c',
    green: 'green',
    schibsted:{
      logoBlue: '#005496',
      primBlueNormal: '#2b91c1',
      primBlueDark: '#006c96',
      primBlueLight: '#b2d7ee',
      primBlueLight2: '#008BB0',
      primBlueLight3: '#006787',
      primBlueDark2: '#214C80',

      primOrangeNormal: '#d57c1b',
      primOrangeDark: '#c7421b',
      primOrangeLight: '#eab937',
      primOrangeLight2: '#F9B23C',

      primGreenNormal: '#8bb63c',
      primGreenDark: '#358e42',
      primGreenLight: '#abc767',
      
      primGreyNormal: '#707070',
      primGreyDark: '#636362',
      primGreyLight: '#dedede',  
      primGreyLight2: '#d0d0d0', 
      
      primYellowNormal: '#f8de53',
      primYellowDark: '#eec438',
      primYellowLight: '#fcec9c', 
      
      primPurpleNormal: '#755490',
      primPurpleDark: '#5b3670',
      primPurpleLight: '#a994bd',   
      primPurpleNormal2: '#805688',
    }
  },

  monospace: '"Roboto Mono", Menlo, monospace',
  radius: 2,

  numFixedDecimalDefault: 2,

  baseUnit: '10px',

  // Unit of rem in px for a 1400px width, the value depends on the fluid calculation in the
  // file "App.css". See: 
  // :root {
  //   font-size: calc(0.833vw + 0.833rem);
  //   .....
  // }

  // remUnit: 25,

  page: {
    stdRespPx: ['0.85em', '1.5em', '2.6em', '2.6em', '2.6em', '2.6em'],
    stdRespMinuxPx: ['-' + CssUtils.calcHoriGblPxToRem(79), '-' + CssUtils.calcHoriGblPxToRem(79)]
  }
};


// name of breakpoints media queries:
theme.namedMediaQueryTable = {
  phablet: `@media (min-width: ${theme.breakpoints[0]}em)`,
  tablet: `@media (min-width:  ${theme.breakpoints[1]}em)`,
  desktop: `@media (min-width: ${theme.breakpoints[2]}em)`
}

// Globals
const globals = {
  span : {
    color: 'red'
  },
  "@font-face": {
    roboto: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      src: "url('roboto.woff2') format('roboto')"
    }
  }
};


export {  theme, globals }