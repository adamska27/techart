import {
  SUBMIT_RATINGS_FAILED,
  SUBMIT_RATINGS_REQUEST,
  SUBMIT_RATINGS_SUCCESS
} from './constants';

const initialState = {
  error: null,
  isFetching: false
};

export const submitRatings = (state = initialState, action) => {
  switch (action.type) {
  case SUBMIT_RATINGS_REQUEST:
    return { ...state, isFetching: true };
  case SUBMIT_RATINGS_SUCCESS:
    return { ...state, isFetching: false };
  case SUBMIT_RATINGS_FAILED:
    return { ...state, error: action.error };
  default:
    return state;
  }
};
