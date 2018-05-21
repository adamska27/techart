import {
  FETCH_RECENT_GAMES_FAILED,
  FETCH_RECENT_GAMES_REQUEST,
  FETCH_RECENT_GAMES_SUCCESS
} from './constants';

import fetchAgain from '../../utils/fetchAgain.js';
import fetchIgdbApi from '../../utils/fetchIgdbApi';

const DATE_NOW = Date.now();

export const fetchRecentGamesFailed = error => ({
  type: FETCH_RECENT_GAMES_FAILED,
  error
});

export const fetchRecentGamesRequest = () => ({
  type: FETCH_RECENT_GAMES_REQUEST
});

export const fetchRecentGamesSuccess = (json, lastFetch) => ({
  type: FETCH_RECENT_GAMES_SUCCESS,
  json,
  lastFetch
});

export const fetchRecentGames = () => (dispatch, getState) => {
  const timeSinceLastFetch = getState().recentGames.lastFetch;
  const fetchOrNo = fetchAgain(timeSinceLastFetch);

  if (fetchOrNo) {
    dispatch(fetchRecentGamesRequest());

    const apiUrl = `https://api-2445582011268.apicast.io/games/?fields=name,cover,summary&filter[release_dates.date][lte]=${DATE_NOW}&order=release_dates.date:desc:min&limit=10`;

    fetchIgdbApi(apiUrl)
      .then(
        response => response.json(),
        error => dispatch(fetchRecentGamesFailed(error))
      )
      .then(json => {
        return dispatch(fetchRecentGamesSuccess(json, DATE_NOW));
      });
  }
};
