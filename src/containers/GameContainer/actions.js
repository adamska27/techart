import {
  FETCH_GAME_FAILED,
  FETCH_GAME_REQUEST,
  FETCH_GAME_SUCCESS
} from './constants';

import fetchIgdbApi from '../../utils/fetchIgdbApi';

export const fetchGameFailed = error => ({ type: FETCH_GAME_FAILED, error });

export const fetchGameRequest = () => ({ type: FETCH_GAME_REQUEST });

export const fetchGameSuccess = json => ({ type: FETCH_GAME_SUCCESS, json });

export const fetchGame = id => dispatch => {
  dispatch(fetchGameRequest());

  const apiUrl = `https://api-2445582011268.apicast.io/games/${id}?fields=name,summary,screenshots,artworks,hypes,release_dates`;

  fetchIgdbApi(apiUrl)
    .then(
      response => response.json(),
      error => dispatch(fetchGameFailed(error))
    )
    .then(json => dispatch(fetchGameSuccess(json)));
};
