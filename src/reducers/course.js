import {
  GET_COURSES,
  COURSE_ERROR,
  SEARCH_COURSES,
  SELECT_COURSE,
  UNSELECT_COURSE
} from '../actions/types';

const initialState = {
  courses: [],
  course: null, //single post
  loading: true,
  error: {},
  selectedCourses: [],
  selectedCourseNum: 0
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

    case SELECT_COURSE:
      return {
        ...state,
        selectedCourses: [payload, ...state.selectedCourses],
        // selectedCourseNum: { ...(state.selectedCourseNum + 1) },
        selectedCourseNum: state.selectedCourseNum + 1,
        loading: false
      };

    case UNSELECT_COURSE:
      return {
        ...state,
        // selectedCourses: [payload, ...state.selectedCourses],
        selectedCourses: state.selectedCourses.filter(
          course => course._id !== payload._id
        ),

        // selectedCourseNum: { ...(state.selectedCourseNum + 1) },
        selectedCourseNum: state.selectedCourseNum - 1,
        loading: false
      };

    default:
      return state;
  }
}
