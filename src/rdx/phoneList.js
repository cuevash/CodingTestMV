import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';

import * as R from 'ramda'

// Actions
const DB_NAME = 'PHONE_LIST'

const ActionsNames = ['FETCH', 'FETCHED']

const Actions = ActionsNames.reduce( 
  ( prev, actionName, idx) => ( 
      R.merge( prev, { [actionName]: DB_NAME + '-' + actionName } ) 
  ),
  {} 
)

export const phoneListFetch = () => ({
   type: Actions.FETCH, 
   payload: '' 
  });

export const phoneListFetched = (resp) => ({
   type: Actions.FETCHED,
   payload: resp 
  });

// Reducers

export const Status = {
  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'error'
}

const initState =  {
  status: null,
  errorTxt: null,
  dat: null
}

export const phoneList = ( state = initState, action ) => {
  switch (action.type) {
    case Actions.FETCH:
      return {
        status: Status.LOADING,
        errorTxt: null,
        dat: null
      }
    case Actions.FETCHED:
      return { 
          status: action.payload.status,
          errorTxt: action.payload.errorTxt,
          dat: action.payload.dat
        }
    default:
      return state;
  }
};

// Epics

const apiPoint = process.env.REACT_APP_PHONE_API + '/phones'

export const phoneListFetchingEpic = action$ => {
  // action$.ofType is the outer Observable
  return action$
    .ofType(Actions.FETCH)
    .switchMap(() => ajax.getJSON(apiPoint) )
    .map(phones => phoneListFetched({
      status: Status.LOADED,
      errorTxt: null,
      dat: phones
    }))
    .catch(error => Observable.of(
      phoneListFetched({
        status: Status.ERROR,
        errorTxt: error.message,
        dat: null
      })
    ))
}

