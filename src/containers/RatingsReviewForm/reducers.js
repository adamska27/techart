import {
  SUBMIT_RATINGS_FAILED,
  SUBMIT_RATINGS_REQUEST,
  SUBMIT_RATINGS_SUCCESS,
  SUBMIT_REVIEW_FAILED,
  SUBMIT_REVIEW_REQUEST,
  SUBMIT_REVIEW_SUCCESS
} from './constants';

const initialState = {
  errorRatings: null,
  errorReview: null,
  isFetchingRatings: false,
  isFetchingReview: false,
  ratings: {},
  review: {}
};

export const submitRatingsReview = (state = initialState, action) => {
  switch (action.type) {
  case SUBMIT_RATINGS_REQUEST:
    return { ...state, isFetchingRatings: true };
  case SUBMIT_RATINGS_SUCCESS:
    return { ...state, isFetchingRatings: false, ratings: action.ratings };
  case SUBMIT_RATINGS_FAILED:
    return { ...state, errorRatings: action.error, isFetchingRatings: false };
  case SUBMIT_REVIEW_REQUEST:
    return { ...state, isFetchingReview: true };
  case SUBMIT_REVIEW_SUCCESS:
    return { ...state, isFetchingReview: false, review: action.review };
  case SUBMIT_REVIEW_FAILED:
    return { ...state, errorReview: action.error, isFetchingReview: false };
  default:
    return state;
  }
};
