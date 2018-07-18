import {
  FETCH_POPULAR_GAMES_FAILED,
  FETCH_POPULAR_GAMES_REQUEST,
  FETCH_POPULAR_GAMES_SUCCESS
} from './constants';

import fetchAgain from '../../utils/fetchAgain.js';
import fetchIgdbApi from '../../utils/fetchIgdbApi';

const DATE_NOW = Date.now();

export const fetchPopularGamesFailed = error => ({
  type: FETCH_POPULAR_GAMES_FAILED,
  error
});

export const fetchPopularGamesRequest = () => ({
  type: FETCH_POPULAR_GAMES_REQUEST
});

export const fetchPopularGamesSuccess = (json, lastFetch) => ({
  type: FETCH_POPULAR_GAMES_SUCCESS,
  json,
  lastFetch
});

export const fetchPopularGames = () => (dispatch, getState) => {
  const timeSinceLastFetch = getState().popularGames.lastFetch;
  const fetchOrNo = fetchAgain(timeSinceLastFetch);

  if (fetchOrNo) {
    dispatch(fetchPopularGamesRequest());

    const apiUrl = `https://api-2445582011268.apicast.io/games/?fields=name,popularity,cover&filter[first_release_date][lte]=${DATE_NOW}&filter[hypes][gt]=50&order=popularity:desc&limit=8`;

    fetchIgdbApi(apiUrl)
      .then(
        response => response.json(),
        error => dispatch(fetchPopularGamesFailed(error))
      )
      .then(json => {
        return dispatch(fetchPopularGamesSuccess(json, DATE_NOW));
      });
  }
};
