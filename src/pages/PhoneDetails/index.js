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
import PhoneDetailComponent from 'components/PhoneDetailComponent'

import phoneDat from 'mock/phoneDat'

import {Helmet} from "react-helmet";

const PhoneDetails = ({ theme, ...props }) => {


  const id = props.match.params.number

  console.log("phoneDat", phoneDat)
  let dat = phoneDat.find(phone => (phone.id === id))

  return (
    <PageStd>

      <Helmet>
        <title>Phones's List</title>
      </Helmet>  

      {/* Space - Top */}
      <Bs.Box f='medium' py='1em'/>       

      <Ps.Title1>
        Phone Details
      </Ps.Title1>

      <PhoneDetailComponent phoneDat={dat} />

      {/* Space - Bottom */}
      <Bs.Box f='medium' flex='1 1 2em' />  

    </PageStd>
  )
}

export default  withRouter( withTheme( PhoneDetails ) )