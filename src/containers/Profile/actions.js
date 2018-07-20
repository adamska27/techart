import {
  FETCH_PROFILE_FAILED,
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS
} from './constants';

export const fetchProfileFailed = error => ({
  type: FETCH_PROFILE_FAILED,
  error
});

export const fetchProfileRequest = () => ({
  type: FETCH_PROFILE_REQUEST
});

export const fetchProfileSuccess = infos => ({
  type: FETCH_PROFILE_SUCCESS,
  infos
});

export const fetchProfile = token => async (dispatch, state) => {
  dispatch(fetchProfileRequest());

  const url = 'http://localhost:3005/user/profile';

  const result = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json(), error => dispatch(fetchProfileFailed(error)))
    .then(infos => dispatch(fetchProfileSuccess(infos)));
};
