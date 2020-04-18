import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import course from './course';
import professor from './professor';
import review from './review';
import calendar from './calendar';

//rootReducer
export default combineReducers({
  alert,
  auth,
  course,
  professor,
  review,
  calendar,
});
