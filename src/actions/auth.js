import axios from 'axios';
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

// Register User
export const register = ({ username, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ username, password });

  try {
    const res = await axios.post('/account/signup', body, config);

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
