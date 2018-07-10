// REACT
import React, { Component } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

// STYLES 

// COMPONENTS
import * as Bs from 'styles/base';
// import Carousel from 'pages/Carousel'
// import CarouselTest from 'pages/CarouselTest'
// import DemographicData from 'pages/DemographicData'
import CarType from 'pages/CarType'
import CarRole from 'pages/CarRole'
import InformationSrc from 'pages/InformationSrc'
import HomeInit from 'pages/HomeInit'

//import DemographicDataNew from 'pages/DemographicDataNew'

import * as webApp from 'rdx/webApp'


const Main = (props) => {

  // tslint:disable:no-console
  console.log("MAINNNNN", props)

  return (
    <Bs.Flex>
      {/* Routes */}

        <Switch>
          <Route exact path="/" component={} />
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

export default Main
