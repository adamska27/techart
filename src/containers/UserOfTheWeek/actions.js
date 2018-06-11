import {
  FETCH_USER_FAILED,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS
} from './constants';

import fetchAgain from '../../utils/fetchAgain';

const DATE_NOW = Date.now();

export const fetchUserFailed = error => ({ type: FETCH_USER_FAILED, error });

export const fetchUserRequest = () => ({ type: FETCH_USER_REQUEST });

export const fetchUserSuccess = (user, lastFetch) => ({
  type: FETCH_USER_SUCCESS,
  user,
  lastFetch
});

export const fetchUserOfTheWeek = () => async (dispatch, getState) => {
  const timeSinceLastFetch = getState().userOfTheWeek.lastFetch;
  const fetchOrNo = fetchAgain(timeSinceLastFetch);

  if (fetchOrNo) {
    dispatch(fetchUserRequest());

    try {
      const user = await fetch('http://localhost:3005/user/all', {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await user.json();
      dispatch(fetchUserSuccess(result, DATE_NOW));
    } catch (err) {
      dispatch(fetchUserFailed(err));
    }
  }
};
