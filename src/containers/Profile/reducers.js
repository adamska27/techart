import {
  FETCH_USER_PROFILE_FAILED,
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_MY_PROFILE_FAILED,
  FETCH_MY_PROFILE_REQUEST,
  FETCH_MY_PROFILE_SUCCESS
} from './constants';

const initialState = {
  errorUserProfile: null,
  isFetchingUserProfile: false,
  userInfos: {},
  errorMyProfile: null,
  isFetchingMyProfile: false,
  myInfos: {}
};

export const profile = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_USER_PROFILE_REQUEST:
    return { ...state, isFetchingUserProfile: true };
  case FETCH_USER_PROFILE_FAILED:
    return {
      ...state,
      isFetchingUserProfile: false,
      errorUserProfile: action.error
    };
  case FETCH_USER_PROFILE_SUCCESS:
    return {
      ...state,
      isFetchingUserProfile: false,
      userInfos: action.userInfos
    };
  case FETCH_MY_PROFILE_REQUEST:
    return { ...state, isFetchingMyProfile: true };
  case FETCH_MY_PROFILE_FAILED:
    return {
      ...state,
      isFetchingMyProfile: false,
      errorMyProfile: action.error
    };
  case FETCH_MY_PROFILE_SUCCESS:
    return { ...state, isFetchingMyProfile: false, myInfos: action.myInfos };
  default:
    return state;
  }
};
