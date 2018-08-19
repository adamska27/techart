import {
  FETCH_REVIEWS_OF_THE_WEEK_REQUEST,
  FETCH_REVIEWS_OF_THE_WEEK_FAILED,
  FETCH_REVIEWS_OF_THE_WEEK_SUCCESS
} from './constants';

const initialState = {
  error: null,
  isFetching: false,
  reviews: []
};

export const reviewsOfTheWeek = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_REVIEWS_OF_THE_WEEK_REQUEST:
    return { ...state, isFetching: true };
  case FETCH_REVIEWS_OF_THE_WEEK_FAILED:
    return { ...state, error: action.error, isFetching: false };
  case FETCH_REVIEWS_OF_THE_WEEK_SUCCESS:
    return { ...state, isFetching: false, reviews: action.reviews };
  default:
    return state;
  }
};
