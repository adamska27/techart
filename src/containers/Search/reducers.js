import { SEARCH_REQUEST, SEARCH_FAILED, SEARCH_SUCCESS } from './constants';

const initialState = {
  error: null,
  isFetching: false,
  result: []
};

export const search = (state = initialState, action) => {
  switch (action.type) {
  case SEARCH_REQUEST:
    return { ...state, isFetching: true };
  case SEARCH_FAILED:
    return { ...state, isFetching: false, error: action.error };
  case SEARCH_SUCCESS:
    return { ...state, isFetching: false, result: action.result };
  default:
    return state;
  }
};
