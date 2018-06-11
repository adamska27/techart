import {
  FETCH_LATEST_USERS_FAILED,
  FETCH_LATEST_USERS_REQUEST,
  FETCH_LATEST_USERS_SUCCESS
} from './constants';

import fetchAgain from '../../utils/fetchAgain';

const DATE_NOW = Date.now();

export const fetchLatestUsersFailed = error => ({
  type: FETCH_LATEST_USERS_FAILED,
  error
});

export const fetchLatestUsersRequest = () => ({
  type: FETCH_LATEST_USERS_REQUEST
});

export const fetchLatestUsersSuccess = (latestUsers, lastFetch) => ({
  type: FETCH_LATEST_USERS_SUCCESS,
  latestUsers,
  lastFetch
});

export const fetchLatestUsers = () => async (dispatch, getState) => {
  const timeSinceLastFetch = getState().latestUsers.lastFetch;
  const fetchOrNo = fetchAgain(timeSinceLastFetch);

  if (fetchOrNo) {
    dispatch(fetchLatestUsersRequest());

    try {
      const user = await fetch('http://localhost:3005/user/latest', {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await user.json();
      dispatch(fetchLatestUsersSuccess(result, DATE_NOW));
    } catch (err) {
      dispatch(fetchLatestUsersFailed(err));
    }
  }
};
