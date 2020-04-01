import axios from 'axios';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './types';
import API from './API';

// Register User
export const register = ({ username, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ username, password });

  const token = Buffer.from(`${username}:${password}`, 'utf8').toString(
    'base64'
  );

  try {
    await API.post('/api/account/signup', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: { token }
    });

    dispatch(setAlert('Register Successfully', 'success'));
  } catch (err) {
    const error = err.response.data.error;
    dispatch(setAlert(error.message, 'danger'));

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = ({ username, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ username, password });

  const token = Buffer.from(`${username}:${password}`, 'utf8').toString(
    'base64'
  );

  try {
    await API.post('/api/account/login', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: { token }
    });

    dispatch(setAlert('Login Successfully', 'success'));
  } catch (err) {
    const error = err.response.data.error;
    dispatch(setAlert(error.message, 'danger'));

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout / Clear Profile
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
