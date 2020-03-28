import { GET_REVIEWS, UPVOTE, DOWNVOTE } from '../actions/types';

const initialState = {
  reviews: [],
  loading: true
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

    default:
      return state;
  }
}
