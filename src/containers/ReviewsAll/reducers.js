import {
  FETCH_ALL_REVIEWS_REQUEST,
  FETCH_ALL_REVIEWS_FAILED,
  FETCH_ALL_REVIEWS_SUCCESS
} from './constants';

export const initialState = {
  error: null,
  isFetching: false,
  reviews: []
};

export const reviewsAll = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_ALL_REVIEWS_REQUEST:
    return { ...state, isFetching: true };
  case FETCH_ALL_REVIEWS_FAILED:
    return { ...state, isFetching: false, error: action.error };
  case FETCH_ALL_REVIEWS_SUCCESS:
    return { ...state, isFetching: false, reviews: action.reviews };
  default:
    return state;
  }
};
