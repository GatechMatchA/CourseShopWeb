import {
  GET_REVIEWS,
  UPVOTE,
  DOWNVOTE,
  REVIEW_ERROR,
  ADD_REVIEW,
  GET_REVIEW_COURSES,
  GET_REVIEW_PROFS
} from '../actions/types';

const initialState = {
  reviews: [],
  newReview: null,
  loading: true,
  allCourses: [],
  courseProfs: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_REVIEWS:
      return {
        ...state,
        reviews: payload,
        loading: false
      };

    case UPVOTE:
      return {
        ...state,
        reviews: state.reviews.map(review =>
          review.id === payload.reviewId
            ? { ...review, upvote: payload.up }
            : review
        ),
        loading: false
      };

    case DOWNVOTE:
      return {
        ...state,
        reviews: state.reviews.map(review =>
          review.id === payload.reviewId
            ? { ...review, downvote: payload.down }
            : review
        ),
        loading: false
      };

    case ADD_REVIEW:
      return {
        ...state,
        newReview: payload,
        loading: false
      };

    case GET_REVIEW_COURSES:
      return {
        ...state,
        allCourses: payload,
        loading: false
      };

    case GET_REVIEW_PROFS:
      return {
        ...state,
        courseProfs: payload,
        loading: false
      };

    case REVIEW_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };

    default:
      return state;
  }
}
