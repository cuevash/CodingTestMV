// REACT
import React from 'react'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom"

// STYLES 
import { withTheme } from 'emotion-theming';
import styled, { css } from 'react-emotion'
import * as Ps from 'ProjStyles/'
import * as Bs from 'styles/base';
import * as CssUtils from 'ProjStyles/cssUtils';

// ALL
import { Status } from 'rdx/phoneList'
import Spinner from 'components/Spinner'
import PageStd from 'pages/PageStd'
import PhoneDetailComponent from 'components/PhoneDetailComponent'

import phoneDat from 'mock/phoneDat'

import {Helmet} from "react-helmet";
import { throwError } from 'rxjs';

const PhoneDetails = ({ theme, phoneListDat, ...props }) => {

  const id = props.match.params.number

  let Comp = null

  switch (phoneListDat.status) {
    case Status.LOADING:
      Comp = Spinner
      break;

    case Status.ERROR:
      Comp = (props) => (
        <Bs.Text
          f='medium'>
          {`Error: ${phoneListDat.errorTxt}`}
        </Bs.Text>
      )
    break;      

    case Status.LOADED:
      let dat = phoneListDat.dat.find(phone => (phone.id === id))
      Comp = (props) => <PhoneDetailComponent phoneDat={dat} />
    break;      
  
    default:
      throw new Error('No status value');
  }

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

      <Comp/>

      {/* Space - Bottom */}
      <Bs.Box f='medium' flex='1 1 2em' />  

    </PageStd>
  )
}


const mapStateToProps = (state) => ({
  phoneListDat: state.phoneList
})

const PhoneDetailsRdxContd = connect(
  mapStateToProps
)(PhoneDetails);

export default  withRouter( withTheme( PhoneDetailsRdxContd ) )