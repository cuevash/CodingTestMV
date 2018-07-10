// REDUX
import { actions, rootEpic, rootReducer, flags, surveyData } from 'rdx'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'

import { createEpicMiddleware } from 'redux-observable';

// DBs

import * as webApp from 'rdx/webApp'
import * as filters from 'rdx/filters'
import * as cookies from 'rdx/cookies'

import * as filtersUI from 'rdx/filtersUi'

// Typescript defs
// declare global {
//   interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
// }

// Redux Initialization
const epicMiddleware = createEpicMiddleware(rootEpic);

// dev tools middleware
// const reduxDevTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  flags,
  surveyData,
  webApp: webApp.reducer,
  filters: filters.reducer,
  cookies: cookies.reducer
})

const store = createStore(
  reducer,
 // compose( applyMiddleware(epicMiddleware), reduxDevTools )
  composeEnhancers(
    applyMiddleware(
      epicMiddleware
    )
  )
)

// Start fetching survey data
store.dispatch( actions.surveyDataFetching() )

// Set WebApp to loading State
store.dispatch( webApp.startLoading() )

// Log the initial state
// tslint:disable:no-console
console.log("STORE INITIAL: ", store.getState())

// const unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

// INIT GRAPH FILTERS

filtersUI.filtersUIConst.forEach( filterUI => {
  store.dispatch( filters.update( filterUI ) )
})  

const configureStore = () => {
  return store
}

export default configureStore