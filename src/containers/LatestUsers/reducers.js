import {
  FETCH_LATEST_USERS_FAILED,
  FETCH_LATEST_USERS_REQUEST,
  FETCH_LATEST_USERS_SUCCESS
} from './constants';

const initialState = {
  error: null,
  fetched: false,
  isFetching: false,
  lastFetch: 0,
  latestUsers: []
};

export const latestUsers = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_LATEST_USERS_REQUEST:
    return { ...state, isFetching: true };
  case FETCH_LATEST_USERS_SUCCESS:
    return {
      ...state,
      fetched: true,
      isFetching: false,
      lastFetch: action.lastFetch,
      latestUsers: action.latestUsers
    };
  case FETCH_LATEST_USERS_FAILED:
    return { ...state, error: action.error, isFetching: false };
  default:
    return state;
  }
};
