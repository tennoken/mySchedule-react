import { combineReducers } from 'redux';
import auth from './auth';
import calendar from './calendar';

const rootReducers = combineReducers({
  auth,
  calendar,
});

export default rootReducers;
