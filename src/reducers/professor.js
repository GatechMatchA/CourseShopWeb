import { GET_PROFS, SET_PROF, GET_COURSE_SECTIONS } from '../actions/types';

const initialState = {
  professors: [],
  currentprof: '',
  allsections: [],
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

    // case GET_COURSE_SECTIONS:
    //   return {
    //     ...state,
    //     allsections: payload,
    //     loading: false
    //   };

    default:
      return state;
  }
}
