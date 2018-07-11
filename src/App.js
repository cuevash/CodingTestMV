import './App.css';

// GLOBAL STYLES
// import './global'

// REACT
import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// STYLES  
import { ThemeProvider } from 'emotion-theming'
import { Provider as ProviderRb } from 'rebass'
import { theme } from './theme'    


// REDUX  
// import { actionIds, actions, rootEpic, rootReducer } from 'rdx'
import configureStore from 'rdx/configureStore'
import { Provider } from 'react-redux'
import { phoneListFetch } from 'rdx/phoneList'
// import { applyMiddleware, compose, createStore } from 'redux'
// import { createEpicMiddleware } from 'redux-observable';

// LIBS
// import * as DB from 'db/db'  
// import { db } from 'db/dbSchibsted'
// import Loadable from 'react-loadable';

// COMPONENTS
  import Main from 'Main' 
   
// HIGHCHARTS   
// Preparing highcharts loading the export modules

// import 'highcharts' 
// import 'highcharts/modules/export-data'
// import 'highcharts/modules/exporting'

// Components 
import ScrollToTop from './components/ScrollToTop'


// Our css fluid rules the last one to overwrite any other..

 import 'globalCss'

// Analytics
// import ReactGA from 'react-ga';

// ReactGA.initialize('UA-68426447-2');


// export const history = createHistory()
// history.listen((location, action) => {
//   ReactGA.set({ page: location.pathname })
//   ReactGA.pageview(location.pathname)
// })


// ReactDOM.render(
//   <Provider store={store}>
//     <ConnectedRouter history={history}>
//       <Route component={withTracker(App, { /* additional attributes */ } )} />
//     </ConnectedRouter>
//   </Provider>,
//   document.getElementById('root'),



// Store Initialization
const store = configureStore()   

// Start fetching list
let aaa = phoneListFetch()
console.log("jjjjjjj", aaa)

store.dispatch( aaa )

// Log the initial state
console.log("STORE INITIAL: ", store.getState())


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    } 
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <ProviderRb theme={theme}>
              <ScrollToTop>
                <Main />
              </ScrollToTop>
            </ProviderRb>
          </ThemeProvider>
        </BrowserRouter>
        </Provider>
    )
  }
}

export default App;
















