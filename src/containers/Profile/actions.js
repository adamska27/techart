import {
  FETCH_USER_PROFILE_FAILED,
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_MY_PROFILE_FAILED,
  FETCH_MY_PROFILE_REQUEST,
  FETCH_MY_PROFILE_SUCCESS
} from './constants';

export const fetchUserProfileFailed = error => ({
  type: FETCH_USER_PROFILE_FAILED,
  error
});

export const fetchUserProfileRequest = () => ({
  type: FETCH_USER_PROFILE_REQUEST
});

export const fetchUserProfileSuccess = userInfos => ({
  type: FETCH_USER_PROFILE_SUCCESS,
  userInfos
});

export const fetchMyProfileFailed = error => ({
  type: FETCH_MY_PROFILE_FAILED,
  error
});

export const fetchMyProfileRequest = () => ({
  type: FETCH_MY_PROFILE_REQUEST
});

export const fetchMyProfileSuccess = myInfos => ({
  type: FETCH_MY_PROFILE_SUCCESS,
  myInfos
});

export const fetchMyProfile = token => async dispatch => {
  dispatch(fetchMyProfileRequest());

  const url = `http://localhost:3005/user/profile`;

  const headers = {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    }
  };

  await fetch(url, headers)
    .then(res => res.json(), error => dispatch(fetchMyProfileFailed(error)))
    .then(myInfos => dispatch(fetchMyProfileSuccess(myInfos)));
};

export const fetchUserProfile = id => async dispatch => {
  dispatch(fetchUserProfileRequest());

  const url = `http://localhost:3005/user/profile/${id}`;

  const headers = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  await fetch(url, headers)
    .then(res => res.json(), error => dispatch(fetchUserProfileFailed(error)))
    .then(userInfos => dispatch(fetchUserProfileSuccess(userInfos)));
};
