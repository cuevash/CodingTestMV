import React from "react";
import styled, { css } from 'react-emotion'
import { withTheme } from 'emotion-theming';
import * as Bs from 'styles/base';
import * as CssUtils from 'ProjStyles/cssUtils';
import { withProps, defaultProps } from "recompose";
import * as Rb from 'rebass';

import { alignItems, alignSelf, backgroundImage, backgroundPosition, 
  backgroundRepeat, backgroundSize , borderColor,borderWidth, 
  borderTop, borderBottom ,borderLeft, color, display, flex, 
  flexDirection, fontFamily, fontSize, fontWeight, fWrap, height
, justifyContent, lineHeight, order, space, textAlign , width, responsiveStyle } from 'styled-system';


const PageBase = styled(Bs.Box)(
  {
     backgroundColor: 'red'
  }     
)


const TextAsH2 = Bs.Text.withComponent('h2')

const Title2 = withTheme( ({ theme, className, ...props }) => {
  return (
    <TextAsH2
      className={className}
      fontFamily={theme.altMainFont}
      fontSize={['huge','huge','huge','huge','huge','hugePlus']}
      lineHeight='0.92em'
      pt='0.24em'
      // my={CssUtils.calcVertGblPxToRem(58)}
      {...props} />
  )
} )

export const Title3 = withTheme(
  withProps(({ theme, ...props }) => ({
    fontFamily: theme.altFont,
    fontWeight: 'normal',
    fontSize: ['large','largePlus','largePlus','largePlus','largePlus','largePlus'],
    lineHeight: '1em',
    pt: '0.24em',
    ...props
  }))(styled(Bs.Text.withComponent('h3'))(
  ))
)


const Title4 = withTheme(
  withProps(({ theme, ...props }) => ({
    fontFamily: theme.font,
    fontSize: 'medium',
    lineHeight: '0.92em',
    pt: '0.24em',
    ...props
  }))(styled(Bs.Text.withComponent('h4'))(
  ))
)


const SectionGraph = withTheme( ({ theme, className, ...props }) => {
  return (
    <Bs.Flex
      className={className}
      fontFamily={theme.font}
      w={1}  
      flexDirection='column'
      fontSize='medium'
      fontWeight='normal'
      px={CssUtils.calcGblPxToRem(79)}
      mb={CssUtils.calcGblPxToRem(251)}
      {...props} />
  )
} )

// const Page = withProps({
// 	pt: '100px'
// })( PageBase )

const Page = ({ theme, className, ...props }) => {

  // tslint:disable:no-console
  console.log("cccccccc", props, " ", className)

  return (
    <Bs.Flex
      className={className}
      fontFamily={theme.font}
      w={1}  
      flexDirection='column'
      fontSize='medium'
      //px={theme.page.stdRespPx}
      px={CssUtils.calcGblPxToRem(79)}
      // py={['0.7em', '1em', '1.32em']}
      py={CssUtils.calcGblPxToRem(58)}
      css={{
        position: 'relative',
        minHeight: '100vh',
      }}
      {...props}
      />
  )
}

export const PageN = withTheme(
  withProps(({ theme, ...props }) => ({
    fontFamily: theme.font,
    w: 1,
    flexDirection: 'column',
    fontSize: 'medium',
   // py: CssUtils.calcGblPxToRem(58),
    ...props
  }))(styled(Bs.Flex)(
    (props) => ({
      position: 'relative',
      minHeight: '100vh',  
      overflow: 'hidden'
    })
  ))
)


export const Drawer = styled(Rb.Drawer)(
)


export const PageSection = withTheme(
  withProps(({ theme, ...props }) => ({
    fontFamily: theme.font,
    w: 1,
    flexDirection: 'column',
  //  flex: '1 1 auto',
    fontSize: 'medium',
    px: theme.page.stdRespPx,
    ...props
  }))(styled(Bs.Flex)(
    (props) => ({
      position: 'relative',
    })
  ))
)

export const SectionBase = withTheme(
  withProps(({ theme, ...props }) => ({
    fontFamily: theme.font,
    w: 1,
    flexDirection: 'column',
    fontSize: 'medium',
    ...props
  }))(styled(Bs.Flex)(
    (props) => ({
      position: 'relative',
    })
  ))
)

const SectionStd = withTheme(
  withProps(({ theme, ...props }) => ({
    px: theme.page.stdRespPx,
    ...props
  })) (SectionBase)
)

const PageSectionNoPx = withTheme(
  defaultProps({
    px: 0,
  })(styled(PageSection)(
  ))
)

export const SectionStdPx = withTheme( ({theme, children, ...rProps}) => (
  <SectionBase {...rProps}>
    {children(theme.page.stdRespPx)}
  </SectionBase>
))

const SpacerFluid = withTheme( ({ theme, className, vPx, ...props }) => {

  // tslint:disable:no-console
  console.log("cccccccc", props, " ", className)

  return (
    <Bs.Box
      className={className}
      w={1}
      fontSize='medium'
      pt={vPx}
      css={{
        flexGrow: '1'
      }}
      {...props}
      />
  )
} )

const SpacerFluidFixed = withTheme( ({ theme, className, vPx, ...props }) => {

  // tslint:disable:no-console
  console.log("cccccccc", props, " ", className)

  return (
    <Bs.Box
      className={className}
      w={1}
      fontSize='medium'
      pt={vPx}
      css={{
        //flex: '1 0 auto'
      }}
      {...props}
      />
  )
} )


export const ListFilters = withTheme((
  { title = 'Escoge la información que quieres ver:', children, theme, ...rProps }) => (
    <SectionBase {...rProps} >

      <Title4
        fontWeight='bold'
        fontFamily={theme.altFont}
        maxWidth='12.6em'
        px='1.5em'
        py='0.8em'
        mx='-1.5em'
        color={theme.colors.schibsted.primGreyNormal} 
        css={{
          boxShadow: '0px 3px 6px rgba(0,0,0,0.16)',
          borderRadius: '7px',
          alignSelf: 'center'
        }}
        >
        {title}
      </Title4>

      <Bs.Box
        fontSize='medium'
        pt='1.5em'
        pl='0.5em' >

        {React.Children.map(children, (child, idx) => (
          <Bs.Box>
            {child}
            {idx < (children.length - 1) ? (
              <Bs.Line
                w='calc(100% + 1em)'
                bg={theme.colors.schibsted.primGreyNormal}
                height='2px' 
                css={{
                  //width: '30%'
                }}/>
            ) : null
            }

          </Bs.Box>
        ))}

      </Bs.Box>

    </SectionBase>
  )
)

  const SectionInnerGraphs = withTheme(
    withProps( ({ theme, ...props }) => ({
      w: 1,
      flex:'1 1 auto',
      fontsize: 'medium',
      px:[0, 0, 0, '2.5em'],
      pb: '1.5em',
      ...props
    }))(styled(Bs.Flex)(
    ))
  )

export const SectionInnerGraphsNoPx = withTheme(styled(SectionInnerGraphs)({
  padding: 0
}))


// Const For Graphs sections
const minStd = '600'
const maxStd = '600'

export const GraphHiChartMaxHeight =[minStd, minStd, minStd, minStd]
export const GraphHiChartMinHeight =[maxStd, maxStd, maxStd, maxStd]

export const GraphSecImg = (
  { title, rowSize, minHeight, src, mlImg, mrImg, 
    alignImg, minWidthImg, maxWidthImg, ratio, theme, ...rProps }) => {

  return (
    <Bs.Flex
      f='medium'
      minHeight={ minHeight ?  minHeight : '7em'}
      w={[1, 1, 1, rowSize]}
      flexDirection='column'
      {...rProps}>

      {/* Title */}
      <Bs.Text 
        f='medium' 
        pb='2em'
        fontWeight='bold'
        color={theme.colors.schibsted.primGreyNormal}
        fontFamily={theme.altFont} 
        textAlign='left' >
        {title}
      </Bs.Text>

      {/* Image */}
      <Bs.Box 
        ml={mlImg ? mlImg : 0}
        mr={mrImg ? mrImg : 0}
        alignSelf={alignImg ? alignImg : 'inherit'}
        maxWidth={maxWidthImg ? maxWidthImg : ['150', '200', '250', '100%']} 
        minWidth={minWidthImg ? minWidthImg : ['150', '200', '250', '100%']} >
        <Bs.BackgroundImage
          ratio={ratio}
          fontSize='medium'
          bgImage={src}
          bgRepeat='no-repeat'
          backgroundSize='contain'
          backgroundPosition={`top center`}
        />
      </Bs.Box>  

    </Bs.Flex>

  )
}


export { SectionInnerGraphs, SectionStd, PageSectionNoPx, Page, SpacerFluid, SpacerFluidFixed, 
   SectionGraph, Title2 }