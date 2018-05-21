import {
  FETCH_POPULAR_GAMES_FAILED,
  FETCH_POPULAR_GAMES_REQUEST,
  FETCH_POPULAR_GAMES_SUCCESS
} from './constants';

import fetchAgain from '../../utils/fetchAgain.js';
import fetchWithProxy from '../../utils/fetchWithProxy';

export const fetchPopularGamesFailed = error => ({
  type: FETCH_POPULAR_GAMES_FAILED,
  error
});

export const fetchPopularGamesRequest = () => ({
  type: FETCH_POPULAR_GAMES_REQUEST
});

export const fetchPopularGamesSuccess = json => ({
  type: FETCH_POPULAR_GAMES_SUCCESS,
  json
});

export const fetchPopularGames = () => (dispatch, getState) => {
  const timeSinceLastFetch = getState().popularGames.lastFetched;
  const fetchOrNo = fetchAgain(timeSinceLastFetch);

  if (fetchOrNo) {
    dispatch(fetchPopularGamesRequest());

    const apiUrl =
      'https://api-2445582011268.apicast.io/games/?fields=name,popularity,cover&filter[first_release_date][gt]=1526565146924&filter[hypes][gt]=50&order=popularity:desc&limit=8';

    fetchWithProxy(apiUrl)
      .then(
        response => response.json(),
        error => dispatch(fetchPopularGamesFailed(error))
      )
      .then(json => dispatch(fetchPopularGamesSuccess(json)));
  }
};
