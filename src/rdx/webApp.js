// TS-LINT
// tslint:disable:object-literal-sort-keys 

// LIBS
import * as R from 'ramda'

// Actions
const DB_NAME = 'WEB_APP_INIT'

const ActionsNames = ['START_LOADING', 'LOADED']

const Actions = ActionsNames.reduce( 
  ( prev, actionName, idx) => ( 
      R.merge( prev, { [actionName]: DB_NAME + '-' + actionName } ) 
  ),
  {} 
)

const startLoading = () => ({
  type: Actions.START_LOADING
})

const loaded = () => ({
   type: Actions.LOADED
})


// STATE: WebApp
const LOAD_STATES = {
  PRELOADING: 'PRELOADING',
  LOADING: 'LOADING',
  LOADED: 'LOADED'
}

// Init
const InitState = {
  load: LOAD_STATES.PRELOADING
}

// Reducer
const reducer = (state = InitState, action) => {
  switch (action.type) {
    case Actions.PRELOADING:
      return {
        load: LOAD_STATES.PRELOADING
      }
    case Actions.START_LOADING:
      return {
        load: LOAD_STATES.LOADING
      }
    case Actions.LOADED:
      return {
        load: LOAD_STATES.LOADED
      }
    default:
      return state;
  }
};


export { reducer, Actions, startLoading, loaded, LOAD_STATES }

