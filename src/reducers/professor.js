import { GET_PROFS, SET_PROF } from '../actions/types';

const initialState = {
  professors: [],
  currentprof: '',
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFS:
      return {
        ...state,
        professors: payload,
        loading: false
      };

    case SET_PROF:
      return {
        ...state,
        currentprof: payload,
        loading: false
      };

    default:
      return state;
  }
}
