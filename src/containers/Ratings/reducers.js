import {
  FETCH_USER_RATINGS_FAILED,
  FETCH_USER_RATINGS_REQUEST,
  FETCH_USER_RATINGS_SUCCESS,
  FETCH_RATINGS_AVERAGE_FAILED,
  FETCH_RATINGS_AVERAGE_REQUEST,
  FETCH_RATINGS_AVERAGE_SUCCESS
} from './constants';

const initialState = {
  userRatings: [],
  ratingsAverage: [],
  error: null,
  errorRatingsAverage: null,
  fetched: false,
  isFetching: false,
  isFetchingRatingsAverage: false,
  lastFetched: 0
};

export const ratings = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_USER_RATINGS_FAILED:
    return { ...state, error: action.error };
  case FETCH_RATINGS_AVERAGE_FAILED:
    return { ...state, errorAverage: action.error };
  case FETCH_USER_RATINGS_REQUEST:
    return { ...state, isFetching: true };
  case FETCH_RATINGS_AVERAGE_REQUEST:
    return { ...state, isFetchingRatingsAverage: true };
  case FETCH_USER_RATINGS_SUCCESS:
    return {
      ...state,
      userRatings: action.result,
      fetched: true,
      isFetching: false
    };
  case FETCH_RATINGS_AVERAGE_SUCCESS:
    return {
      ...state,
      ratingsAverage: action.result,
      isFetchingRatingsAverage: false
    };
  default:
    return state;
  }
};
