import {
  FETCH_PROFILE_FAILED,
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS
} from './constants';

const initialState = {
  error: null,
  isFetching: false,
  infos: {}
};

export const profile = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_PROFILE_REQUEST:
    return { ...state, isFetching: true };
  case FETCH_PROFILE_FAILED:
    return { ...state, isFetching: false, error: action.error };
  case FETCH_PROFILE_SUCCESS:
    return { ...state, isFetching: false, infos: action.infos };
  default:
    return state;
  }
};
