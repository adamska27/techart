import {
  FETCH_ALL_REVIEWS_REQUEST,
  FETCH_ALL_REVIEWS_FAILED,
  FETCH_ALL_REVIEWS_SUCCESS
} from './constants';

const fetchAllReviewsRequest = () => ({ type: FETCH_ALL_REVIEWS_REQUEST });

const fetchAllReviewsFailed = error => ({
  type: FETCH_ALL_REVIEWS_FAILED,
  error
});

const fetchAllReviewsSuccess = reviews => ({
  type: FETCH_ALL_REVIEWS_SUCCESS,
  reviews
});

export const fetchReviews = productId => async dispatch => {
  dispatch(fetchAllReviewsRequest());
  const url = `http://localhost:3005/reviews/product/${productId}`;

  await fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json(), error => dispatch(fetchAllReviewsFailed(error)))
    .then(reviews => dispatch(fetchAllReviewsSuccess(reviews)));
};
