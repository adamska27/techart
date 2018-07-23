import {
  FETCH_USER_OF_THE_WEEK_FAILED,
  FETCH_USER_OF_THE_WEEK_REQUEST,
  FETCH_USER_OF_THE_WEEK_SUCCESS
} from './constants';

import fetchAgain from '../../utils/fetchAgain';

const DATE_NOW = Date.now();

export const fetchUserOfTheWeekFailed = error => ({
  type: FETCH_USER_OF_THE_WEEK_FAILED,
  error
});

export const fetchUserOfTheWeekRequest = () => ({
  type: FETCH_USER_OF_THE_WEEK_REQUEST
});

export const fetchUserOfTheWeekSuccess = (user, lastFetch) => ({
  type: FETCH_USER_OF_THE_WEEK_SUCCESS,
  user,
  lastFetch
});

export const fetchUserOfTheWeek = () => async (dispatch, getState) => {
  const timeSinceLastFetch = getState().userOfTheWeek.lastFetch;
  const fetchOrNo = fetchAgain(timeSinceLastFetch);

  if (fetchOrNo) {
    dispatch(fetchUserOfTheWeekRequest());

    try {
      const user = await fetch('http://localhost:3005/user/best', {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await user.json();
      dispatch(fetchUserOfTheWeekSuccess(result, DATE_NOW));
    } catch (err) {
      dispatch(fetchUserOfTheWeekFailed(err));
    }
  }
};
