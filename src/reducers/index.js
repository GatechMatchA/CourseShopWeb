import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import course from './course';

//rootReducer
export default combineReducers({ alert, auth, course });
