import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';


// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/catch';
// import { ajax } from 'rxjs/observable/dom/ajax';

// Rx.Observable.ajax

// import { DataFrame as DataFrame } from 'dataframe-js';
// import { getPublicUrl, getHostName, getOrigin } from 'util/url-utils'

// LIBS
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

console.log("namesss", Actions)

export const phoneListFetch = () => ({
   type: Actions.FETCH, 
   payload: '' 
  });

export const phoneListFetched = (resp) => ({
   type: Actions.FETCHED,
   payload: resp 
  });

// Reducers

const Status = {
  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'error'
}

export const phoneList = ( state = {}, action ) => {
  switch (action.type) {
    case Actions.FETCH:
      return {
        status: Status.LOADING,
        errorTxt: null,
        dat: null
      }
    case Actions.FETCHED:
      return Object.assign({}, state, 
        { 
          status: action.status,
          errorTxt: action.errorTxt,
          dat: action.dat
        })
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
    .switchMap(() => {
      return ajax
        .getJSON(apiPoint)
        .map(data => {
          return data.results
        })
        .map(phones => phones.map(phone => ({
          id: phone.id,
          title: phone.title,
          imageUrl: phone.img_url
        })))
    })
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

export const phoneListFetchingEpic3 = action$ => {
  // action$.ofType is the outer Observable
  return action$
}


// export { actionIds, actions, rootEpic, rootReducer, flags, surveyData }

