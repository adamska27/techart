import {
  FETCH_POPULAR_GAMES_FAILED,
  FETCH_POPULAR_GAMES_REQUEST,
  FETCH_POPULAR_GAMES_SUCCESS
} from './constants';

const initialState = {
  error: null,
  fetched: false,
  isFetching: false,
  lastFetched: 0,
  popularGames: []
};

export const popularGames = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_POPULAR_GAMES_REQUEST:
    return { ...state, isFetching: true };
  case FETCH_POPULAR_GAMES_SUCCESS:
    return {
      ...state,
      isFetching: false,
      fetched: true,
      lastFetched: Date.now(),
      popularGames: action.json
    };
  case FETCH_POPULAR_GAMES_FAILED:
    return { ...state, isFetching: false, error: action.error };
  default:
    return state;
  }
};
