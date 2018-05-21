import {
  FETCH_RECENT_GAMES_FAILED,
  FETCH_RECENT_GAMES_REQUEST,
  FETCH_RECENT_GAMES_SUCCESS
} from './constants';

const initialState = {
  error: null,
  fetched: false,
  isFetching: false,
  lastFetch: 0,
  recentGames: []
};

export const recentGames = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_RECENT_GAMES_REQUEST:
    return { ...state, isFetching: true };
  case FETCH_RECENT_GAMES_SUCCESS:
    return {
      ...state,
      isFetching: false,
      fetched: true,
      lastFetch: action.lastFetch,
      recentGames: action.json
    };
  case FETCH_RECENT_GAMES_FAILED:
    return { ...state, isFetching: false, error: action.error };
  default:
    return state;
  }
};
