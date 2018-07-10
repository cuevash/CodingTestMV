// TS-LINT
// tslint:disable:object-literal-sort-keys 

import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable';
// import { ajax } from 'rxjs/observable/dom/ajax';
// import { mergeMap } from 'rxjs/operators';
// import Papa from 'papaparse'
import promiseFromPapaParse from 'util/promiseFromPapaParse'

import Rx from "rxjs/Rx";


// import { DataFrame as DataFrame } from 'dataframe-js';
// import { getPublicUrl, getHostName, getOrigin } from 'util/url-utils'

import { createDb } from 'db/dbSurvey'

import dataFile from 'data/out/data.csv'

/*
 * ACTION IDS
 */
const UPDATE_FLAGS = 'UPDATE_FLAGS'

const actionIds = {
  UPDATE_FLAGS
}

/*
 * ACTION CREATORS
 */


/*
 * REDUCERS
 */

const flags = ( state = null, action ) => {
  switch (action.type) {
    case UPDATE_FLAGS:
      return action.flags
    default:
      return state
  }
}

/*
 * EPICS
 */

const SURVEY_DATA_FETCHING = 'SURVEY_DATA_FETCHING';
const SURVEY_DATA_FETCHED = 'SURVEY_DATA_FETCHED';

const surveyDataFetching = () => ({ type: SURVEY_DATA_FETCHING, payload: '' });
const surveyDataFetched = (surveyDat) => ({ type: SURVEY_DATA_FETCHED, payload: surveyDat });

const surveyDataFetchingEpic = action$ =>
  action$.ofType(SURVEY_DATA_FETCHING)
    .mergeMap(action =>
     // Rx.Observable.fromPromise(DataFrame.fromDSV(`${getOrigin()}${dataFile}`, ';', true))
     Rx.Observable.fromPromise( promiseFromPapaParse( dataFile ) )
        .map(response => surveyDataFetched( response ) )
    );

const surveyData = ( state = {}, action) => {
  switch (action.type) {
    case SURVEY_DATA_FETCHING:
      return {
        loading: true,
        loaded: false,
        dat: null,
        error: null,
        db: null
      }
    case SURVEY_DATA_FETCHED:
      return Object.assign({}, state, 
        { 
          loading:false, 
          loaded: true,
          dat: action.payload, 
          error: false,
          db: createDb( action.payload )
        })
    default:
      return state;
  }
};




const rootReducer = combineReducers({
  flags,
  surveyData
})

const rootEpic = combineEpics(
  surveyDataFetchingEpic
);

const actions = {
  surveyDataFetching,
  surveyDataFetched
}

export { actionIds, actions, rootEpic, rootReducer, flags, surveyData }

