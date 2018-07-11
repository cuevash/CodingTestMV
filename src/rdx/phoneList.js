import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable';

import Rx from "rxjs/Rx";

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
        status: Status.loading,
        rawDat: null,
        errorTxt: null,
        dat: null
      }
    case Actions.SURVEY_DATA_FETCHED:
      return Object.assign({}, state, 
        { 
          status: Status.loading,
          rawDat: action.payload,
          errorTxt: null,
          dat: action.payload
        })
    default:
      return state;
  }
};

// Epics

export const phoneListFetchingEpic = action$ =>
  action$.ofType(Actions.PHONE_LIST_FETCH)
    .mergeMap(action =>
     // Rx.Observable.fromPromise(DataFrame.fromDSV(`${getOrigin()}${dataFile}`, ';', true))
     Rx.Observable.fromPromise( promiseFromPapaParse( dataFile ) )
        .map(response => surveyDataFetched( response ) )
    );

// export { actionIds, actions, rootEpic, rootReducer, flags, surveyData }

