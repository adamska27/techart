import {
  FETCH_REVIEWS_OF_THE_WEEK_REQUEST,
  FETCH_REVIEWS_OF_THE_WEEK_FAILED,
  FETCH_REVIEWS_OF_THE_WEEK_SUCCESS
} from './constants';

const fetchReviewsOfTheWeekRequest = () => ({
  type: FETCH_REVIEWS_OF_THE_WEEK_REQUEST
});

const fetchReviewsOfTheWeekFailed = error => ({
  type: FETCH_REVIEWS_OF_THE_WEEK_FAILED,
  error
});

const fetchReviewsOfTheWeekSuccess = reviews => ({
  type: FETCH_REVIEWS_OF_THE_WEEK_SUCCESS,
  reviews
});

export const fetchReviews = () => async dispatch => {
  dispatch(fetchReviewsOfTheWeekRequest());

  const url = 'http://localhost:3005/reviews/best';

  await fetch(url, {
    headers: {
      'Content-Types': 'application/json'
    }
  })
    .then(
      res => res.json(),
      error => dispatch(fetchReviewsOfTheWeekFailed(error))
    )
    .then(results => dispatch(fetchReviewsOfTheWeekSuccess(results)));
};
