import { FETCH_POPULAR_GAMES_FAILED, FETCH_POPULAR_GAMES_REQUEST, FETCH_POPULAR_GAMES_SUCCESS } from '../constants';

import { fetchPopularGamesFailed, fetchPopularGamesRequest, fetchPopularGamesSuccess } from '../actions';

describe('Home Actions', () => {
    describe('fetchPopularGamesFailed', () => {
        it('should return the correct type and passed an error', () => {
            const error = 'fetching error';
            const expectedResult = {
                type: FETCH_POPULAR_GAMES_FAILED,
                error: error,
            };
            expect(fetchPopularGamesFailed(error)).toEqual(expectedResult);
        });
    });

    describe('fetchPopularGamesRequest', () => {
        it('should return the correct type', () => {
            const expectedResult = {
                type: FETCH_POPULAR_GAMES_REQUEST,
            };
            expect(fetchPopularGamesRequest()).toEqual(expectedResult);
        });
    });

    describe('fetchPopularGamesSuccess', () => {
        it('should return the correct type and pass the results', () => {
            const payload = [{ 
                id: 42,
                name: 'Attack of the sushi killers',
                popularity: 10000,
                cover: {
                    url: 'https://media.senscritique.com/media/000005659665/240/Dead_Sushi.png',
                    cloudinary_id: 'ppppppppp',
                    width: 394,
                    height: 500,
                },
            }];
            const expectedResult = {
                type: FETCH_POPULAR_GAMES_SUCCESS,
                json: payload,
            };
            expect(fetchPopularGamesSuccess(payload)).toEqual(expectedResult);
        });
    });
});