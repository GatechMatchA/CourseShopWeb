import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../actions/types';

const initialState = {
  username: localStorage.getItem('username'), //token of state
  //   isAuthenticated: null,
  isLoggedIn: null,
  loading: true,
  user: null // user data: username, etc...
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('username', payload.username);
      return {
        ...state,
        ...payload,
        isLoggedIn: true,
        loading: false
      };

    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('username');

      return {
        ...state,
        username: null,
        isLoggedIn: false,
        loading: false,
        user: null
      };

    default:
      return state;
  }
}
