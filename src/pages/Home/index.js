// REACT
import React from 'react'
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom"

// STYLES 
import { withTheme } from 'emotion-theming';
import styled, { css } from 'react-emotion'
import * as Ps from 'ProjStyles/'
import * as Bs from 'styles/base';
import * as CssUtils from 'ProjStyles/cssUtils';
//import posed from 'react-pose'

// COMPONENTS
import { dbWeb } from 'db/dbSchibsted'
// import SectionHome from 'pages/Home/SectionHome'
// import SectionGrafDemography from 'pages/Home/SectionGrafDemography'
// import SectionCarRole from 'pages/Home/SectionCarRole'
// import SectionCarType from 'pages/Home/SectionCarType'
// import SectionMotorType from 'pages/Home/SectionMotorType'
// import SectionPlacesBought from 'pages/Home/SectionPlacesBought'
// import SectionBuyingProcess from 'pages/Home/SectionBuyingProcess'

import SectionHeader from 'sections/SectionHeader'
import SectionTitleSubtitle from 'sections/SectionTitleSubtitle'
import SectionLoaderCircle from 'sections/SectionLoaderCircle'
import SectionImage from 'sections/SectionImage'
import LoadingBar from 'react-redux-loading-bar'
import CookieLinks from 'components/CookieLinks'

import {Helmet} from "react-helmet";

const Home = ({ theme, ...props }) => {

  // tslint:disable:no-console
  console.log(" PXXX ", CssUtils.calcGblPxToRem([56, 56, 56, 56, 56, 56]))

  return (
    <Ps.PageN
      theme={theme}
      //bg={theme.colors.schibsted.primOrangeDark}
      bg={theme.colors.schibsted.primBlueLight2} 
      //px='2.5em'
      // py={['0.7em', '1em', '1.32em']}
      py='1.8em'
     >

      <Helmet>
        <title>Schibsted</title>
      </Helmet>

      {/* Section Header */}
      <Ps.PageSection>

        {/* Header */}
        <SectionHeader sectionDat={sectionData.header01} />

      </Ps.PageSection>    

      {/* Space */}
      <Bs.Box
        f='medium'
        flex='40 1 auto' />       

      {/* Section Title - Subtitle */}
      <Ps.PageSection >

        <SectionTitleSubtitle sectionDat={sectionData.TitleSubtitle01} />

      </Ps.PageSection> 

      {/* Space */}
      <Bs.Box
        f='medium'
        flex='25 1 auto'
        // maxHeight={['1.6em', '1.6em', '1.6em','1.6em', '1.6em', '1.6em']} 
        maxHeight={['4em']}
        minHeight={['0.5em']}
        />

      {/* Section Circle */}
      <Ps.SectionStdPx>
        {(pxInt) => 
          <SectionLoaderCircle
          linkTo='/perfil-sociodemografico'
          sectionDat={sectionData.LoaderCircle01} pxInt={pxInt} />
        }
      </Ps.SectionStdPx>

      {/* Space */}
      <Bs.Box
        f='medium'
        flex='35 1 1em' />  

      <Ps.PageSection>

        <SectionImage
          sectionDat={sectionData.Image01} height={CssUtils.calcVertGblPxToRem(35)} />

        {/* <Bs.Box height={`${459 + 140 + 12}`} bg='yellow'
        mx={[`-${theme.page.stdPx}`]}>
      </Bs.Box>     */}
      </Ps.PageSection>

      <CookieLinks />

    </Ps.PageN >
  )
}

// Data for sections
const sectionData = {
  header01: dbWeb.sections.findOne({ id: 'header01' }),
  TitleSubtitle01: dbWeb.sections.findOne({ id: 'TitleSubtitle01' }),
  LoaderCircle01: dbWeb.sections.findOne({ id: 'LoaderCircle01' }),
  Image01: dbWeb.sections.findOne({ id: 'Image01' })
}

export default  withRouter( withTheme( Home ) )