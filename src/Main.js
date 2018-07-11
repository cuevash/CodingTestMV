// REACT
import React, { Component } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

// STYLES 
import { withTheme } from 'emotion-theming';
import styled, { css } from 'react-emotion'
import * as Ps from 'ProjStyles/'
import * as Bs from 'styles/base';
import * as Rb from 'rebass';
import * as CssUtils from 'ProjStyles/cssUtils';

// COMPONENTS
// import Carousel from 'pages/Carousel'
// import CarouselTest from 'pages/CarouselTest'
// import DemographicData from 'pages/DemographicData'
// import CarType from 'pages/CarType'
// import CarRole from 'pages/CarRole'
// import InformationSrc from 'pages/InformationSrc'
import Home from 'pages/Home'
import PhoneDetails from 'pages/PhoneDetails'

//import DemographicDataNew from 'pages/DemographicDataNew'

// import * as webApp from 'rdx/webApp'


const Main = ({theme, ...rProps}) => {

  // tslint:disable:no-console
  console.log("MAINNNNN", rProps)

  return (
    <Bs.Flex
      fontFamily={theme.font}>

      {/* Routes */}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/phone/:number' component={PhoneDetails}/>
        </Switch>
    </Bs.Flex>
  )
}

// const mapStateToProps = state => {
//   return ({
//     webLoaded: (state.webApp.load === webApp.LOAD_STATES.LOADED)
//   })
// }

// const MainRdxContd = connect(
//   mapStateToProps
// )(Main);

//export default  withRouter( MainRdxContd )

export default  withTheme( Main )
