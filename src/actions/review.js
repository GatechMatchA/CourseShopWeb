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
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  //   const data = { review: reviewId, status: status };
  const data = {
    review: reviewId,
    status: 1
  };
  //   console.log('payload reviewId', reviewId);
  try {
    // const res = await axios.put('/api/votes', data, config);
    dispatch({
      type: UPVOTE,
      payload: { reviewId, up: currentUp + 1 }
    });
  } catch (error) {
    console.log(error);
  }
};

export const downVote = (reviewId, currentDown) => async dispatch => {
  try {
    dispatch({
      type: DOWNVOTE,
      payload: { reviewId, down: currentDown + 1 }
    });
  } catch (error) {
    console.log(error);
  }
};
