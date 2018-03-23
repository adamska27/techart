import {
  FETCH_POPULAR_GAMES_FAILED,
  FETCH_POPULAR_GAMES_REQUEST,
  FETCH_POPULAR_GAMES_SUCCESS
} from './constants';

import fetchAgain from '../../utils/fetchAgain.js';

export const fetchPopularGamesFailed = error => {
  return { type: FETCH_POPULAR_GAMES_FAILED, error };
};
export const fetchPopularGamesRequest = () => {
  return { type: FETCH_POPULAR_GAMES_REQUEST };
};
export const fetchPopularGamesSuccess = json => {
  return { type: FETCH_POPULAR_GAMES_SUCCESS, json };
};

export const fetchPopularGames = () => (dispatch, getState) => {
  const timeSinceLastFetch = getState().popularGames.lastFetched;
  const fetchOrNo = fetchAgain(timeSinceLastFetch);

  if (fetchOrNo) {
    dispatch(fetchPopularGamesRequest());
    // use a proxy cause of restrictions API
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl =
      'https://api-2445582011268.apicast.io/games/?fields=name,popularity,cover&order=popularity:desc&limit=8';

    fetch(`${proxyUrl}${apiUrl}`, {
      headers: {
        'user-key': 'secret'
      }
    })
      .then(
        response => response.json(),
        error => dispatch(fetchPopularGamesFailed(error))
      )
      .then(json => dispatch(fetchPopularGamesSuccess(json)));
  }
};
