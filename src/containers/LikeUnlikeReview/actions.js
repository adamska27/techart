import {
  LIKE_REVIEW_REQUEST,
  LIKE_REVIEW_FAILED,
  LIKE_REVIEW_SUCCESS,
  UNLIKE_REVIEW_REQUEST,
  UNLIKE_REVIEW_FAILED,
  UNLIKE_REVIEW_SUCCESS
} from './constants.js';

const likeReviewRequest = () => ({
  type: LIKE_REVIEW_REQUEST
});

const likeReviewFailed = error => ({
  type: LIKE_REVIEW_FAILED,
  error
});

const likeReviewSuccess = success => ({
  type: LIKE_REVIEW_SUCCESS,
  success
});

export const likeReview = (token, reviewId) => dispatch => {
  dispatch(likeReviewRequest());

  const url = `http://localhost:3005/reviews/like/${reviewId}`;
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  fetch(url, options)
    .then(res => res.json(), error => dispatch(likeReviewFailed(error)))
    .then(result => dispatch(likeReviewSuccess(result)));
};

const unlikeReviewRequest = () => ({
  type: UNLIKE_REVIEW_REQUEST
});

const unlikeReviewFailed = error => ({
  type: UNLIKE_REVIEW_FAILED,
  error
});

const unlikeReviewSuccess = success => ({
  type: UNLIKE_REVIEW_SUCCESS,
  success
});

export const unlikeReview = (token, reviewId) => dispatch => {
  dispatch(unlikeReviewRequest());

  const url = `http://localhost:3005/reviews/unlike/${reviewId}`;
  const options = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  fetch(url, options)
    .then(res => res.json(), error => dispatch(unlikeReviewFailed(error)))
    .then(result => dispatch(unlikeReviewSuccess(result)));
};
