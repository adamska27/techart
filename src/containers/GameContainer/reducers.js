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

const initialState = {
  errorFetchGameIgdb: null,
  errorfetchGame: null,
  errorPostGame: null,
  isFetchingGameIgdb: false,
  isFetchingGame: false,
  isFetchingPostGame: false,
  game: {},
  lastFetch: 0,
  scraped: false
};

export const game = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_GAME_REQUEST:
    return { ...state, isFetchingGameIgdb: true };
  case FETCH_GAME_SUCCESS:
    return {
      ...state,
      isFetchingGameIgdb: false,
      game: action.json,
      lastFetch: action.lastFetch
    };
  case FETCH_GAME_FAILED:
    return {
      ...state,
      isFetchingGameIgdb: false,
      errorFetchGameIgdb: action.error
    };
  case FETCH_POST_GAME_REQUEST:
    return { ...state, isFetchingPostGame: true };
  case FETCH_POST_GAME_SUCCESS:
    return {
      ...state,
      isFetchingPostGame: false,
      scraped: true
    };
  case FETCH_POST_GAME_FAILED:
    return {
      ...state,
      isFetchingPostGame: false,
      errorPostGame: action.error
    };
  case FETCH_GAME_IN_BASE_REQUEST:
    return { ...state, isFetchingGame: true };
  case FETCH_GAME_IN_BASE_FAILED:
    return { ...state, isFetchingGame: false, errorfetchGame: action.error };
  case FETCH_GAME_IN_BASE_SUCCESS:
    return {
      ...state,
      game: action.json,
      isFetchingGame: false
    };
  default:
    return state;
  }
};
