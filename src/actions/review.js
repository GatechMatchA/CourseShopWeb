import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_REVIEWS,
  DOWNVOTE,
  UPVOTE,
  ADD_REVIEW,
  REVIEW_ERROR,
  GET_REVIEW_COURSES,
  GET_REVIEW_PROFS
} from './types';
import API from './API';

// Get reviews by course and professor
export const getReviews = (courseId, profId) => async dispatch => {
  try {
    const res = await API.get(
      `/api/reviews?course=${courseId}&professor=${profId}`
    );

    dispatch({
      type: GET_REVIEWS,
      payload: res.data.payload
    });
  } catch (error) {}
};

// Up/down Vote
export const upVote = (reviewId, currentUp) => async dispatch => {
  //   const token = 'Basic ' + localStorage.getItem('token');
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: token
  //     }
  //   };

  //   const review = reviewId;
  //   const status = 1;
  //   const data = JSON.stringify({
  //     review,
  //     status
  //   });

  //   console.log('upvote', data, config);

  try {
    // const res = await API.put('/api/votes', data, config);

    // console.log('res upvote', res.data.payload);
    // console.log(currentUp);
    dispatch({
      type: UPVOTE,
      payload: { reviewId, up: currentUp + 1 }
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const downVote = (reviewId, currentDown) => async dispatch => {
  try {
    dispatch({
      type: DOWNVOTE,
      payload: { reviewId, down: currentDown + 1 }
    });
  } catch (error) {
    console.log(error.response);
  }
};

// Add new review
export const addReview = formData => async dispatch => {
  const token = 'Basic ' + localStorage.getItem('token');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  };

  try {
    const res = await API.post('/api/reviews/new', formData, config);

    dispatch({
      type: ADD_REVIEW,
      payload: res.data.payload
    });

    dispatch(setAlert('Post Created', 'success'));
  } catch (error) {
    dispatch({
      type: REVIEW_ERROR,
      payload: {
        msg: error.response.message,
        status: error.response.status
      }
    });
  }
};

// Get review courses
export const getAllCourses = () => async dispatch => {
  try {
    const res = await API.get('/api/courses?&orderBy=code');

    await dispatch({
      type: GET_REVIEW_COURSES,
      payload: res.data.payload
    });
  } catch (err) {
    dispatch(setAlert(err.response.statusText, 'danger'));
    console.log(err.response);
    dispatch({
      type: REVIEW_ERROR,
      payload: { msg: err.response.error.message, status: err.response.status }
    });
  }
};

// Get professors of the selected course
export const getCourseProf = courseId => async dispatch => {
  try {
    const res = await API.get(`/api/courses/${courseId}/professors`);
    const profs = res.data.payload;
    const newProfs = [];

    for (const prof of profs) {
      const res1 = await getProfDetails(prof);
      newProfs.push(res1);
    }

    dispatch({
      type: GET_REVIEW_PROFS,
      payload: newProfs
    });
  } catch (error) {
    console.log(error.response);
    dispatch(setAlert(error.response.message, 'danger'));
  }
};

// Get professor details
export const getProfDetails = async prof => {
  try {
    const res = await API.get(`/api/professors/${prof.professor}`);
    prof.name = res.data.payload;
    return prof;
  } catch (error) {
    console.log(error);
  }
};
