import {
  SUBMIT_RATINGS_FAILED,
  SUBMIT_RATINGS_REQUEST,
  SUBMIT_RATINGS_SUCCESS,
  SUBMIT_REVIEW_FAILED,
  SUBMIT_REVIEW_REQUEST,
  SUBMIT_REVIEW_SUCCESS
} from './constants';

export const submitRatingsRequest = () => ({ type: SUBMIT_RATINGS_REQUEST });

export const submitRatingsFailed = error => ({
  type: SUBMIT_RATINGS_FAILED,
  error
});

export const submitRatingsSuccess = ratings => ({
  type: SUBMIT_RATINGS_SUCCESS,
  ratings
});

export const submitReviewRequest = () => ({ type: SUBMIT_REVIEW_REQUEST });

export const submitReviewFailed = error => ({
  type: SUBMIT_REVIEW_FAILED,
  error
});

export const submitReviewSuccess = review => ({
  type: SUBMIT_REVIEW_SUCCESS,
  review
});

export const fetchSubmitRatingsReview = (
  jwt,
  product_id,
  ratings,
  review
) => dispatch => {
  dispatch(dispatch(submitRatingsRequest));

  // post ratings
  fetch(`http://localhost:3005/rating/${product_id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`
    },
    body: JSON.stringify(ratings)
  })
    .then(res => res.json())
    .then(ratings => dispatch(submitRatingsSuccess(ratings)))
    .catch(err => dispatch(submitRatingsSuccess(err)));

  if (review) {
    // post review
    dispatch(submitReviewRequest());
    fetch(`http://localhost:3005/review/${product_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      },
      body: JSON.stringify({ review })
    })
      .then(res => res.json(), error => dispatch(submitReviewFailed(error)))
      .then(review => dispatch(submitReviewSuccess(review)));
  }
};
