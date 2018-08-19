import {
  FETCH_GAME_FAILED,
  FETCH_GAME_REQUEST,
  FETCH_GAME_SUCCESS,
  FETCH_POST_GAME_FAILED,
  FETCH_POST_GAME_REQUEST,
  FETCH_POST_GAME_SUCCESS,
  FETCH_GAME_IN_BASE_FAILED,
  FETCH_GAME_IN_BASE_REQUEST,
  FETCH_GAME_IN_BASE_SUCCESS
} from './constants';

import fetchIgdbApi from '../../utils/fetchIgdbApi';

// IGDB api actions
export const fetchGameFailed = error => ({ type: FETCH_GAME_FAILED, error });
export const fetchGameRequest = () => ({ type: FETCH_GAME_REQUEST });
export const fetchGameSuccess = json => ({ type: FETCH_GAME_SUCCESS, json });

// our api action
export const fetchGameInBaseFailed = error => ({
  type: FETCH_GAME_IN_BASE_FAILED,
  error
});
export const fetchGameInBaseRequest = () => ({
  type: FETCH_GAME_IN_BASE_REQUEST
});
export const fetchGameInBaseSuccess = json => ({
  type: FETCH_GAME_IN_BASE_SUCCESS,
  json
});

// post in our api actions
export const fetchPostGameFailed = error => ({
  type: FETCH_POST_GAME_FAILED,
  error
});
export const fetchPostGameRequest = () => ({ type: FETCH_POST_GAME_REQUEST });
export const fetchPostGameSuccess = json => ({
  type: FETCH_POST_GAME_SUCCESS,
  json
});

// async action (redux thunk)
export const fetchGame = id => async dispatch => {
  // first try to fetch the game in our base
  dispatch(fetchGameInBaseRequest());
  const checkproductInBase = await fetch(`http://localhost:3005/product/${id}`)
    .then(res => res.json())
    .then(result => dispatch(fetchGameInBaseSuccess(result)))
    .catch(error => dispatch(fetchGameInBaseFailed(error)));

  // check the result return by our api
  if (!checkproductInBase.json[0]) {
    const apiUrl = `https://api-2445582011268.apicast.io/games/${id}?fields=name,summary,cover,screenshots,storyline,release_dates,hypes,popularity,genres,collection,franchises,game_modes,developers,keywords,themes,platforms,expansions,artworks,videos,publishers&expand=genres,collection,franchises,game_modes,developers,game_engines,keywords,publishers,themes,platforms,expansions`;
    let game;

    // fetch IGDB api
    dispatch(fetchGameRequest());
    const result = await fetchIgdbApi(apiUrl)
      .then(
        response => response.json(),
        error => dispatch(fetchGameFailed(error))
      )
      .then(json => {
        game = json;
        return dispatch(fetchGameSuccess(json));
      });

    // save the result from IGDB api
    const {
      artworks,
      cover,
      developers,
      expansions,
      franchises,
      game_modes,
      genres,
      hypes,
      keywords,
      name,
      platforms,
      popularity,
      publishers,
      release_dates,
      screenshots,
      storyline,
      summary,
      themes,
      videos
    } = game[0];

    // post the result in our db
    dispatch(fetchPostGameRequest());
    await fetch(`http://localhost:3005/product/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        artworks,
        cover,
        developers,
        expansions,
        franchises,
        game_modes,
        genres,
        hypes,
        keywords,
        name,
        platforms,
        popularity,
        publishers,
        release_dates,
        screenshots,
        storyline,
        summary,
        themes,
        videos
      })
    })
      .then(res => res.json(), err => dispatch(fetchPostGameSuccess(result)))
      .then(result => dispatch(fetchPostGameSuccess(result)));
  }
};
