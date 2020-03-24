import axios from 'axios';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './types';

// Register User
export const register = ({ username, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ username, password });

  try {
    await axios.post('/api/account/signup', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: { username }
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

  try {
    await axios.post('/api/account/login', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: { username }
    });
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
