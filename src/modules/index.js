import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import calendar from './calendar';
import loading from './loading';
import { all } from 'redux-saga/effects';
import user, { userSaga } from './user';

const rootReducers = combineReducers({
  auth,
  calendar,
  loading,
  user,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}

export default rootReducers;
