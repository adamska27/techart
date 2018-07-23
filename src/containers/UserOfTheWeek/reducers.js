import {
  FETCH_USER_OF_THE_WEEK_FAILED,
  FETCH_USER_OF_THE_WEEK_REQUEST,
  FETCH_USER_OF_THE_WEEK_SUCCESS
} from './constants';

const initialState = {
  error: null,
  fetched: false,
  isFetching: false,
  lastFetch: 0,
  user: {}
};

export const userOfTheWeek = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_USER_OF_THE_WEEK_REQUEST:
    return { ...state, isFetching: true };
  case FETCH_USER_OF_THE_WEEK_SUCCESS:
    return {
      ...state,
      fetched: true,
      isFetching: false,
      lastFetch: action.lastFetch,
      user: action.user
    };
  case FETCH_USER_OF_THE_WEEK_FAILED:
    return { ...state, error: action.error, isFetching: false };
  default:
    return state;
  }
};
