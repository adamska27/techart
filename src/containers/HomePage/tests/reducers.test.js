import { popularGames } from '../reducers';
import {
  fetchPopularGamesFailed,
  FETCH_POPULAR_GAMES_REQUEST,
  fetchPopularGamesRequest,
  fetchPopularGamesSuccess
} from '../actions';

describe('Home Reducers', () => {
  const state = {
    error: null,
    fetched: false,
    isFetching: false,
    lastFetched: 0,
    popularGames: []
  };

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(popularGames(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the fetchPopularGamesFailed action correctly and throw an error', () => {
    const payload = 'error';
    const expectedResult = { ...state, error: payload };

    expect(popularGames(state, fetchPopularGamesFailed(payload))).toEqual(
      expectedResult
    );
  });

  it('should handle the fetchPopularGamesRequest action correctly and set isFetching to true', () => {
    const expectedResult = { ...state, isFetching: true };

    expect(popularGames(state, fetchPopularGamesRequest())).toEqual(
      expectedResult
    );
  });

  it('should handle the fetchPopularGamesSuccess action correctly and feed popularGames', () => {
    const payload = [
      {
        id: 42,
        name: 'Attack of the sushi killers',
        popularity: 10000,
        cover: {
          url:
            'https://media.senscritique.com/media/000005659665/240/Dead_Sushi.png',
          cloudinary_id: 'ppppppppp',
          width: 394,
          height: 500
        }
      }
    ];
    const expectedResult = {
      ...state,
      fetched: true,
      lastFetched: Date.now(),
      popularGames: payload
    };

    expect(popularGames(state, fetchPopularGamesSuccess(payload))).toEqual(
      expectedResult
    );
  });
});
