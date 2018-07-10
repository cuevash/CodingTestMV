// TS-LINT
// tslint:disable:object-literal-sort-keys 

// LIBS
import * as R from 'ramda'

// Actions
const NAME = 'COOKIES'

const ActionsNames = ['UPDATE']

const Actions = ActionsNames.reduce( 
  ( prev, actionName, idx) => ( 
      R.merge( prev, { [actionName]: NAME + '-' + actionName } ) 
  ),
  {} 
)

const update = ( cookies ) => ({
   type: Actions.UPDATE,
   cookies
})

// Init
const InitState = {
  googleAnalytics: false
}

// Reducer
const reducer = (state = InitState, action) => {
  switch (action.type) {
    case Actions.UPDATE:
      return (R.merge( state, action.cookies ) )
    default:
      return state;
  }
};


export { reducer, Actions, update }

