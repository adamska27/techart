import {
  FETCH_GAME_FAILED,
  FETCH_GAME_REQUEST,
  FETCH_GAME_SUCCESS
} from './constants';

const initialState = {
  error: null,
  fetched: false,
  isFetching: false,
  game: null,
  lastFetch: 0
};

export const game = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_GAME_REQUEST:
    return { ...state, isFetching: true, fetched: false };
  case FETCH_GAME_SUCCESS:
    return {
      ...state,
      isFetching: false,
      fetched: true,
      game: action.json,
      lastFetch: action.lastFetch
    };
  case FETCH_GAME_FAILED:
    return { ...state, isFetching: false, error: action.error };
  default:
    return state;
  }
};
