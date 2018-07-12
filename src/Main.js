// REACT
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// STYLES 
import { withTheme } from 'emotion-theming';
import * as Bs from 'styles/base';

// ALL
import Home from 'pages/Home'
import PhoneDetails from 'pages/PhoneDetails'

const Main = ({theme, ...rProps}) => {

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

export default  withTheme( Main )
