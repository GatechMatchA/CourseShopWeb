import {
  GET_COURSES,
  COURSE_ERROR,
  SEARCH_COURSES,
  SELECT_COURSE, //for course selection page
  UNSELECT_COURSE, //for course selection page
  CLEAN_COURSE, //for course selection page
  GET_COURSE,
  SET_COMPARE_COURSE, //for course comparison page
  CLEAN_COMPARE_COURSE, //for course comparison page
  SELECT_SECTION,
  UNSELECT_SECTION
} from '../actions/types';

const initialState = {
  courses: [],
  course: null, //single
  loading: true,
  error: {},
  selectedCourses: [],
  currentCourseCompare: ''
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COURSES:
      return {
        ...state,
        courses: payload.payload,
        loading: false
      };

    case SEARCH_COURSES:
      return {
        ...state,
        courses: payload,
        loading: false
      };
    case COURSE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };

    case CLEAN_COURSE:
      return {
        ...state,
        selectedCourses: state.selectedCourses.filter(
          course => course.id !== payload.id
        ),
        loading: false
      };

    case SELECT_COURSE:
      return {
        ...state,
        selectedCourses: [payload, ...state.selectedCourses],
        loading: false
      };

    case UNSELECT_COURSE:
      return {
        ...state,
        selectedCourses: state.selectedCourses.filter(
          course => course.id !== payload.id
        ),
        loading: false
      };

    case GET_COURSE:
      return {
        ...state,
        selectedCourse: payload,
        loading: false
      };

    case SET_COMPARE_COURSE:
      return {
        ...state,
        currentCourseCompare: payload
      };

    case CLEAN_COMPARE_COURSE:
      return {
        ...state,
        currentCourseCompare: ''
      };

    case SELECT_SECTION:
      return {
        ...state,
        currentCourse: payload,
        selectedCourses: [
          ...state.selectedCourses.map(course =>
            course.id === payload.id ? payload : course
          )
        ]
      };

    case UNSELECT_SECTION:
      return {
        ...state,
        currentCourse: payload,
        selectedCourses: [
          ...state.selectedCourses.map(course =>
            course.id === payload.id ? payload : course
          )
        ]
      };

    default:
      return state;
  }
}
