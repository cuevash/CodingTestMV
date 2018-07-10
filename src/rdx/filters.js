// TS-LINT
// tslint:disable:object-literal-sort-keys 

// LIBS
import * as R from 'ramda'

// Actions
const DB_NAME = 'FILTERS'

const ActionsNames = ['UPDATE']

const Actions = ActionsNames.reduce( 
  ( prev, actionName, idx) => ( 
      R.merge( prev, { [actionName]: DB_NAME + '-' + actionName } ) 
  ),
  {} 
)

const update = ( filter ) => ({
   type: Actions.UPDATE,
   filter
})

// Init
const InitState = {
}

// Reducer
const reducer = (state = InitState, action) => {
  switch (action.type) {
    case Actions.UPDATE:
      return (R.merge( state, { [action.filter.id]: action.filter } ) )
    default:
      return state;
  }
};


export { reducer, Actions, update }

