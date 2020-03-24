import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';

//rootReducer
export default combineReducers({ alert, auth });
