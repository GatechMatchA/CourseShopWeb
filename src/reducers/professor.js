import {
  GET_PROFS,
  SET_PROF,
  CLEAN_CURRENT_PROF,
  SORT_PROF_DOWN,
  SORT_PROF_UP
} from '../actions/types';

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

    case CLEAN_CURRENT_PROF:
      return {
        ...state,
        currentprof: '',
        loading: false
      };

    case SORT_PROF_UP:
      return {
        ...state,
        professors: [
          ...state.professors.sort((a, b) => a[payload] - b[payload])
        ],
        loading: false
      };

    case SORT_PROF_DOWN:
      return {
        ...state,
        professors: [
          ...state.professors.sort((a, b) => b[payload] - a[payload])
        ],
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
