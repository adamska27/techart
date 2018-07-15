import {
  SUBMIT_RATINGS_FAILED,
  SUBMIT_RATINGS_REQUEST,
  SUBMIT_RATINGS_SUCCESS
} from './constants';

export const submitRatingsRequest = () => ({ type: SUBMIT_RATINGS_REQUEST });

export const submitRatingsFailed = error => ({
  type: SUBMIT_RATINGS_FAILED,
  error
});

export const submitRatingsSuccess = success => ({
  type: SUBMIT_RATINGS_SUCCESS,
  success
});

export const fetchSubmitRatings = (jwt, product_id, data) => dispatch => {
  dispatch(dispatch(submitRatingsRequest));

  fetch(`http://localhost:3005/rating/${product_id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(result => dispatch(submitRatingsSuccess(result)))
    .catch(err => dispatch(submitRatingsSuccess(err)));
};
