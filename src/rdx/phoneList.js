import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable';

import Rx from "rxjs/Rx";


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

const phoneListFetch = () => ({
   type: Actions.PHONE_LIST_FETCH, 
   payload: '' 
  });

const phoneListFetched = (resp) => ({
   type: Actions.PHONE_LIST_FETCHED,
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
    case Actions.PHONE_LIST_FETCH:
      return {
        status: Status.LOADING,
        errorTxt: null,
        dat: null
      }
    case Actions.SURVEY_DATA_FETCHED:
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

const apiPoint = process.env.REACT_APP_SECRET_CODE + '/phones'

export const phoneListFetchingEpic = action$ => {
  // action$.ofType is the outer Observable
  return action$
    .ofType(Actions.PHONE_LIST_FETCH)
    .switchMap(() => {
      return Rx.Observable.ajax
        .getJSON(apiPoint)
        .map(data => data.results)
        .map(phones => phones.map(phone => ({
          id: phone.id,
          title: phone.title,
          imageUrl: whisky.img_url
        })))
    })
    .map(phones => phoneListFetched({
      status: Status.LOADED,
      errorTxt: null,
      dat: phones
    }))
    .catch(error => Rx.of(
      phoneListFetched({
        status: Status.ERROR,
        errorTxt: error.message,
        dat: null
      })
    ))
}


// export { actionIds, actions, rootEpic, rootReducer, flags, surveyData }

