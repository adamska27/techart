import { initialState, reviewsAll } from '../reducers';

import {
  fetchAllReviewsRequest,
  fetchAllReviewsFailed,
  fetchAllReviewsSuccess
} from '../actions';

import { data } from './actions.test';

describe('ReviewsAll Reducers', () => {
  it('should return the initial state', () => {
    const expectedResult = initialState;
    expect(reviewsAll(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the fetchAllReviewsFailed action correctly and return error', () => {
    const error = 'error';
    const expectedResult = { ...initialState, error, isFetching: false };

    expect(reviewsAll(initialState, fetchAllReviewsFailed(error))).toEqual(
      expectedResult
    );
  });

  it('should handle the fetchAllReviewsRequest action correctly and update initialState', () => {
    const expectedResult = { ...initialState, isFetching: true };

    expect(reviewsAll(initialState, fetchAllReviewsRequest())).toEqual(
      expectedResult
    );
  });

  it('should handle the fetchAllReviewsSuccess action correctly and update initialState', () => {
    const expectedResult = {
      ...initialState,
      isFetching: false,
      reviews: data
    };

    expect(reviewsAll(initialState, fetchAllReviewsSuccess(data))).toEqual(
      expectedResult
    );
  });
});
