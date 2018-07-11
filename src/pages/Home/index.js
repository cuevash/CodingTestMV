// REACT
import React from 'react'
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom"

// STYLES 
import { withTheme } from 'emotion-theming';
import styled, { css } from 'react-emotion'
import * as Ps from 'ProjStyles/'
import * as Bs from 'styles/base';
import * as CssUtils from 'ProjStyles/cssUtils';

// ALL
import PageStd from 'pages/PageStd'
import SectionHome from './SectionHome'

import {Helmet} from "react-helmet";

const Home = ({ theme, ...props }) => {

  return (
    <PageStd>

      <Helmet>
        <title>Phones's List</title>
      </Helmet>  

      {/* Space - Top */}
      <Bs.Box f='medium' py='1em'/>       

      <Ps.Title1>
        Phone Repertoire
      </Ps.Title1>

      <SectionHome/>

      {/* Space - Bottom */}
      <Bs.Box f='medium' flex='1 1 2em' />  

    </PageStd>
  )
}

export default  withRouter( withTheme( Home ) )