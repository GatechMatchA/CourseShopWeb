import axios from 'axios';
import { setAlert } from './alert';
import { GET_REVIEWS, DOWNVOTE, UPVOTE } from './types';

// Get reviews by course and professor
export const getReviews = (courseId, profId) => async dispatch => {
  try {
    const res = await axios.get(
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
  const token = 'Basic ' + localStorage.getItem('token');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Basic dXNlcjQ6dGVzdA=='
    }
  };

  const status = 1;
  const data = JSON.stringify({
    reviewId,
    status
  });

  //   console.log('upvote', data, config);

  try {
    // const res = await axios.put('/api/votes', data, config);

    // console.log('res upvote', res.data.payload);
    console.log(currentUp);
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
