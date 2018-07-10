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

import SectionHome from './SectionHome'

import {Helmet} from "react-helmet";

const Home = ({ theme, ...props }) => {

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
        <title>Phones's List</title>
      </Helmet>

      {/* Section Header */}
      <Ps.PageSection>

        {/* Header */}
        {/* <SectionHeader sectionDat={sectionData.header01} /> */}

        HEADER

      </Ps.PageSection>    

      {/* Space - Ratio */}
      <Bs.Box
        f='medium'
        flex='40 1 auto' />       

      {/* Section Title - Subtitle */}
      <Ps.PageSection >

        {/* <SectionTitleSubtitle sectionDat={sectionData.TitleSubtitle01} /> */}

      </Ps.PageSection> 

      {/* Space */}
      <Bs.Box
        f='medium'
        flex='25 1 auto'
        // maxHeight={['1.6em', '1.6em', '1.6em','1.6em', '1.6em', '1.6em']} 
        maxHeight={['4em']}
        minHeight={['0.5em']}
        />


    </Ps.PageN >
  )
}

// Data for sections
{/* const sectionData = {
  header01: dbWeb.sections.findOne({ id: 'header01' }),
  TitleSubtitle01: dbWeb.sections.findOne({ id: 'TitleSubtitle01' }),
  LoaderCircle01: dbWeb.sections.findOne({ id: 'LoaderCircle01' }),
  Image01: dbWeb.sections.findOne({ id: 'Image01' })
} */}

export default  withRouter( withTheme( Home ) )