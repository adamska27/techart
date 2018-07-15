import {
  FETCH_USER_RATINGS_FAILED,
  FETCH_USER_RATINGS_REQUEST,
  FETCH_USER_RATINGS_SUCCESS,
  FETCH_RATINGS_AVERAGE_FAILED,
  FETCH_RATINGS_AVERAGE_REQUEST,
  FETCH_RATINGS_AVERAGE_SUCCESS
} from './constants';

export const fetchUserRatingsFailed = error => ({
  type: FETCH_USER_RATINGS_FAILED,
  error
});

export const fetchUserRatingsRequest = () => ({
  type: FETCH_USER_RATINGS_REQUEST
});

export const fetchUserRatingsSuccess = result => ({
  type: FETCH_USER_RATINGS_SUCCESS,
  result
});

export const fetchUserRatings = (jwt, productId) => dispatch => {
  dispatch(fetchUserRatingsRequest());

  fetch(`http://localhost:3005/rating/${productId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`
    }
  })
    .then(res => res.json())
    .then(result => dispatch(fetchUserRatingsSuccess(result)))
    .catch(error => dispatch(fetchUserRatingsFailed(error)));
};

export const fetchRatingsAverageFailed = error => ({
  type: FETCH_RATINGS_AVERAGE_FAILED,
  error
});

export const fetchRatingsAverageRequest = () => ({
  type: FETCH_RATINGS_AVERAGE_REQUEST
});

export const fetchRatingsAverageSuccess = result => ({
  type: FETCH_RATINGS_AVERAGE_SUCCESS,
  result
});

export const fetchRatingsAverage = productId => dispatch => {
  dispatch(fetchRatingsAverageRequest());

  fetch(`http://localhost:3005/rating/average/${productId}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(result => dispatch(fetchRatingsAverageSuccess(result)))
    .catch(error => dispatch(fetchRatingsAverageFailed(error)));
};
