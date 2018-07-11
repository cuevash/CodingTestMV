import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import { phoneList, phoneListFetchingEpic } from 'rdx/phoneList';

export const rootEpic = combineEpics(
  phoneListFetchingEpic,
);

export const rootReducer = combineReducers({
  phoneList
});