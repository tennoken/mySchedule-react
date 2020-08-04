import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import calendar from './calendar';
import loading from './loading';
import { all } from 'redux-saga/effects';

const rootReducers = combineReducers({
  auth,
  calendar,
  loading,
});

export function* rootSaga() {
  yield all([authSaga()]);
}

export default rootReducers;
