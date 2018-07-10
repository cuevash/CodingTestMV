import styled from 'react-emotion'
import { Link as Lnk } from "react-router-dom"
import { alignItems, alignSelf, backgroundImage, backgroundPosition, 
    backgroundRepeat, backgroundSize , borderColor,borderWidth, 
    borderTop, borderBottom ,borderLeft, color, display, flex, 
    flexDirection, fontFamily, fontSize, fontWeight, fWrap, height
  , justifyContent, lineHeight, order, ratio, space, textAlign , width, responsiveStyle } from 'styled-system';

  import { withProps } from 'recompose';
 
const top = responsiveStyle({
  prop: 'top',
  cssProperty: 'top',
  // convert number values to pixels
  numberToPx: true,
  // set a key for values in theme
  //key: 'radii'
})

const right = responsiveStyle({
  prop: 'right',
  cssProperty: 'right',
  // convert number values to pixels
  numberToPx: true,
  // set a key for values in theme
  //key: 'radii'
})

const maxWidth = responsiveStyle({
  prop: 'maxWidth',
  cssProperty: 'maxWidth',
  // convert number values to pixels
  numberToPx: true,
  // set a key for values in theme
  //key: 'radii'
})

const minWidth = responsiveStyle({
  prop: 'minWidth',
  cssProperty: 'minWidth',
  // convert number values to pixels
  numberToPx: true,
  // set a key for values in theme
  //key: 'radii'
})

const minHeight = responsiveStyle({
  prop: 'minHeight',
  cssProperty: 'minHeight',
  // convert number values to pixels
  numberToPx: true,
  // set a key for values in theme
  //key: 'radii'
})

const maxHeight = responsiveStyle({
  prop: 'maxHeight',
  cssProperty: 'maxHeight',
  // convert number values to pixels
  numberToPx: true,
  // set a key for values in theme
  //key: 'radii'
})

export const Box = styled('div')(
  space,
  width,
  fontSize,
  color,
  textAlign,
  fWrap,
  flex,
  alignSelf,
  borderColor,
  borderWidth,
  fontWeight,
  height,
  display,
  fontFamily,
  flex,
  top,
  right,
  maxWidth,
  minWidth,
  minHeight,
  maxHeight,
  order,
  borderTop,
   borderBottom ,
   borderLeft,
  {
    position: 'relative',
  }
)

export const Table = styled('table')(
  {
    position: 'relative',
  },
  display,
  space,
  width,
  fontSize,
  color,
  alignItems,
  alignSelf,
  fWrap,
  flex,
  flexDirection,
  borderColor,
  borderWidth,
  fontWeight,
  height,
  fontFamily,
  justifyContent,
  top,
  right,
  maxWidth,
  minWidth,
  minHeight,
  maxHeight,
  order,
  borderTop,
  borderBottom ,
  borderLeft
)


const Flex = styled('div')(
  {
    display: 'flex',
    position: 'relative',
  },
  display,
  space,
  width,
  fontSize,
  color,
  alignItems,
  alignSelf,
  fWrap,
  flex,
  flexDirection,
  borderColor,
  borderWidth,
  fontWeight,
  height,
  fontFamily,
  justifyContent,
  top,
  right,
  maxWidth,
  minWidth,
  minHeight,
  maxHeight,
  order,
  borderTop,
  borderBottom ,
  borderLeft
)

export const Text = styled('div')(
  {
    margin: 0
  },
  display,
  space,
  fontSize,
  color,
  textAlign,
  fontWeight,
  lineHeight,
  fontFamily, 
  order,
  borderColor,
  borderWidth,  
  borderTop,
  borderBottom ,
  borderLeft,
  maxWidth,
  minWidth,
  maxHeight,
  width,
  height
)

const Button = styled(Box)(
)

const Label = styled(Box)(
  {
    display: 'flex',
    align: 'center'
  }
)

export const Image = styled('img')(
  space,
  display,
  width,
  color,
  order,
  minWidth,
  maxWidth,
  minHeight,
  (props) => ({
    display: 'block',
    maxWidth: '100%',
    height: props.height || 'auto'
  })
)

const Link = styled('a')(
  space,
  width,
  color,
  order,
  (props) => ({
    display: 'block',
    width: '100%',
    textDecoration: 'none'
  })
)

export const LinkReactR = styled(Lnk)(
  space,
  width,
  color,
  order,
  (props) => ({
    display: 'block',
    textDecoration: 'none'
  })
)



export const BackgroundImage = styled(Box)(
  backgroundRepeat,
  backgroundImage,
  ratio,
  backgroundSize,
  backgroundPosition,
  display
)

// import sys from 'system-components'
// import { style } from 'styled-system'

// const bgImage = style({
//   prop: 'image',
//   alias: 'src',
//   cssProperty: 'backgroundImage',
//   getter: n => `url(${n})`
// })

// export const BackgroundImage = sys({
//   width: 1,
//   ratio: 3/4,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center'
// },
//   bgImage,
//   'ratio',
//   'backgroundSize',
//   'backgroundPosition',
//   'space',
//   'color',
// )

// BackgroundImage.displayName = 'BackgroundImage'

// export default BackgroundImage
const AllResponsive = [
  space,
  width,
  fontSize,
  color,
  textAlign,
  fWrap,
  flex,
  alignSelf,
  borderColor,
  borderWidth,
  fontWeight,
  height,
  display,
  fontFamily,
  flex,
  top,
  right,
  maxWidth,
  minWidth,
  minHeight,
  order,
  borderTop,
   borderBottom ,
   borderLeft,
]


const Line = styled(Box)(
  (props) => ({
    fontSize: 'medium',
    width: '100%'
  }),
  AllResponsive
)

export { Line, Flex, Button, Label }