import './App.css';

// REACT
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'

// STYLES  
import { ThemeProvider } from 'emotion-theming'
import { Provider as ProviderRb } from 'rebass'
import { theme } from './theme'    

// REDUX  
import configureStore from 'rdx/configureStore'
import { Provider } from 'react-redux'

// ALL
import { phoneListFetch } from 'rdx/phoneList'
import Main from 'Main' 
import ScrollToTop from './components/ScrollToTop'

// Our css fluid rules the last one to overwrite any other rules..
 import 'globalCss'

// Store Initialization
const store = configureStore()   

// Start fetching list
store.dispatch( phoneListFetch() )

class App extends React.Component {

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
















