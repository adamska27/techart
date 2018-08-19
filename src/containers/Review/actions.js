import {
  FETCH_REVIEW_REQUEST,
  FETCH_REVIEW_FAILED,
  FETCH_REVIEW_SUCCESS
} from './constants';

const fetchReviewRequest = () => ({ type: FETCH_REVIEW_REQUEST });

const fetchReviewFailed = error => ({ type: FETCH_REVIEW_FAILED, error });

const fetchReviewSuccess = review => ({ type: FETCH_REVIEW_SUCCESS, review });

export const fetchReview = (productId, reviewId) => async dispatch => {
  dispatch(fetchReviewRequest());
  const url = `http://localhost:3005/reviews/review/${productId}/${reviewId}`;

  await fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json(), error => dispatch(fetchReviewFailed(error)))
    .then(review => dispatch(fetchReviewSuccess(review)));
};
