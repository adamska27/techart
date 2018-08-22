import {
  FETCH_REVIEW_REQUEST,
  FETCH_REVIEW_FAILED,
  FETCH_REVIEW_SUCCESS
} from './constants';

const fetchReviewRequest = () => ({ type: FETCH_REVIEW_REQUEST });

const fetchReviewFailed = error => ({ type: FETCH_REVIEW_FAILED, error });

const fetchReviewSuccess = review => ({ type: FETCH_REVIEW_SUCCESS, review });

export const fetchReview = (productId, reviewId, token) => async dispatch => {
  dispatch(fetchReviewRequest());
  const url = `http://localhost:3005/reviews/review/${productId}/${reviewId}`;

  let headers;

  if (token) {
    headers = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
      }
    };
  } else {
    headers = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }

  await fetch(url, headers)
    .then(res => res.json(), error => dispatch(fetchReviewFailed(error)))
    .then(review => dispatch(fetchReviewSuccess(review)));
};
