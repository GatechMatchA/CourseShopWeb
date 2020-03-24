import { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types';

const initialState = {
  username: localStorage.getItem('username'), //token of state
  //   password: localStorage.getItem('password'), //token of state
  isAuthenticated: null,
  loading: true,
  user: null // user data: username, etc...
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem('username', payload.username); //payload is an object
      //   localStorage.setItem('password', payload.password); //payload is an object
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };

    case REGISTER_FAIL:
      //clear token
      localStorage.removeItem('username');
      //   localStorage.removeItem('password');

      return {
        ...state,
        username: null,
        password: null,
        isAuthenticated: false,
        loading: false,
        user: null
      };

    default:
      return state;
  }
}
