import {
  GET_COURSES,
  COURSE_ERROR,
  SEARCH_COURSES,
  SELECT_COURSE,
  UNSELECT_COURSE,
  CLEAN_COURSE,
  GET_COURSE,
  SET_COURSE,
  SELECT_SECTION
} from '../actions/types';

const initialState = {
  courses: [],
  course: null, //single
  loading: true,
  error: {},
  selectedCourses: [],
  currentCourse: null,
  professors: [],
  professor: '',
  sections: [],
  section: null,
  selectedSections: []
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
        // courses: state.courses.filter(course => course.code.includes(payload)),
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
        // selectedCourses: [
        //   ...new Set([payload.course, ...state.selectedCourses])
        // ],
        selectedCourses: state.selectedCourses.filter(
          course => course.id !== payload.id
        ),
        // selectedCourseNum: { ...(state.selectedCourseNum + 1) },
        // selectedCourseNum: state.selectedCourseNum + 1,
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

    // case REPLACE_PROF:
    //     return {
    //         ...state,
    //         selectedCourse: { ...state.selectedCourse, professors: payload },
    //         professors: payload,
    //         loading: false
    //     };

    case SET_COURSE:
      return {
        ...state,
        currentCourse: payload
      };

    case SELECT_SECTION:
      return {
        ...state,
        currentCourse: payload
      };

    default:
      return state;
  }
}
