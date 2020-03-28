import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_COURSES,
  COURSE_ERROR,
  SEARCH_COURSES,
  SELECT_COURSE,
  UNSELECT_COURSE,
  CLEAN_COURSE,
  SELECT_SECTION,
  GET_COURSE,
  SET_COMPARE_COURSE,
  CLEAN_COMPARE_COURSE
} from './types';

// Get all courses
export const getCourses = searchText => async dispatch => {
  try {
    const res = await axios.get('/api/courses?&orderBy=code');

    if (searchText === '') {
      await dispatch({
        type: GET_COURSES,
        payload: res.data
      });
    } else {
      searchText = searchText.toUpperCase();

      const courses = res.data.payload.filter(course =>
        course.code
          .split(' ')
          .join('')
          .includes(searchText.trim())
      );

      await dispatch({
        type: SEARCH_COURSES,
        payload: courses
      });
    }
  } catch (err) {
    dispatch(setAlert(err.response.statusText, 'danger'));

    dispatch({
      type: COURSE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Search courses using course code
export const searchCourses = searchText => async dispatch => {
  try {
    const res = await axios.get('/api/courses?&orderBy=code');
    searchText = searchText.toUpperCase();

    const courses = res.data.payload.filter(course =>
      course.code.includes(searchText)
    );

    dispatch({
      type: SEARCH_COURSES,
      payload: courses
    });
  } catch (err) {
    dispatch({
      type: COURSE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Select this course
export const selectCourse = course => async dispatch => {
  //   console.log(course);
  dispatch({
    type: CLEAN_COURSE,
    payload: course
  });
  dispatch({
    type: SELECT_COURSE,
    payload: course
  });
};

export const unselectCourse = course => async dispatch => {
  //   console.log(course);
  dispatch({
    type: UNSELECT_COURSE,
    payload: course
  });
};

// Get single course
export const getCourse = courseId => async dispatch => {
  try {
    const res = await axios.get(`/api/courses/${courseId}`);
    // console.log(res.data.payload.id);
    dispatch({
      type: GET_COURSE,
      payload: res.data.payload
    });
  } catch (err) {
    console.log(err);
    dispatch(setAlert(err.response.statusText, 'danger'));

    dispatch({
      type: COURSE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Set current selected course
export const setCourse = course => async dispatch => {
  dispatch({
    type: SET_COMPARE_COURSE,
    payload: course
  });
};

//Select this section
export const selectSection = (course, section) => async dispatch => {
  course.section = section;
  dispatch({
    type: SELECT_SECTION,
    payload: course
  });
};

//Clear current course for compare
export const clearCourseCompare = () => async dispatch => {
  dispatch({
    type: CLEAN_COMPARE_COURSE,
    payload: null
  });
};
