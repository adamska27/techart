import {
  FETCH_GAME_FAILED,
  FETCH_GAME_REQUEST,
  FETCH_GAME_SUCCESS
} from './constants';

const initialState = {
  error: null,
  fetched: false,
  isFetching: false,
  game: null
};

export const game = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_GAME_REQUEST:
    return { ...state, isFetching: true };
  case FETCH_GAME_SUCCESS:
    return { ...state, isFetching: false, fetched: true, game: action.json };
  case FETCH_GAME_FAILED:
    return { ...state, isFetching: false, error: action.error };
  default:
    return state;
  }
};
