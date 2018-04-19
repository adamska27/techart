import { SIGNUP_FAILED, SIGNUP_REQUEST, SIGNUP_SUCCESS } from './constants';
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from './constants';

const initialState = {
  error: null,
  isFetching: false,
  register: false,
  login: false
};

export const account = (state = initialState, action) => {
  switch (action.type) {
  case SIGNUP_REQUEST:
    return { ...state, isFetching: true };
  case SIGNUP_SUCCESS:
    return { ...state, isFetching: false, register: true };
  case SIGNUP_FAILED:
    return { ...state, error: action.error, isFetching: true };
  case LOGIN_REQUEST:
    return { ...state, isFetching: true };
  case LOGIN_SUCCESS:
    return { ...state, isFetching: false, login: true };
  case LOGIN_FAILED:
    return { ...state, error: action.error, isFetching: true };
  default:
    return state;
  }
};
