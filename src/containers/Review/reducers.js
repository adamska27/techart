import {
  FETCH_REVIEW_REQUEST,
  FETCH_REVIEW_FAILED,
  FETCH_REVIEW_SUCCESS
} from './constants';

const initialState = {
  error: null,
  isFetching: false,
  review: {}
};

export const review = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_REVIEW_REQUEST:
    return { ...state, isFetching: true };
  case FETCH_REVIEW_FAILED:
    return { isFetching: false, error: action.error };
  case FETCH_REVIEW_SUCCESS:
    return { ...state, isFetching: false, review: action.review };
  default:
    return state;
  }
};
