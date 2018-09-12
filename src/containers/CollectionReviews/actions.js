import {
  FETCH_COLLECTION_REVIEWS_FAILED,
  FETCH_COLLECTION_REVIEWS_REQUEST,
  FETCH_COLLECTION_REVIEWS_SUCCESS
} from './constants';

const fetchCollectionReviewsFailed = error => ({
  type: FETCH_COLLECTION_REVIEWS_FAILED,
  error
});

const fetchCollectionReviewsRequest = () => ({
  type: FETCH_COLLECTION_REVIEWS_REQUEST
});

const fetchCollectionReviewsSuccess = collection => ({
  type: FETCH_COLLECTION_REVIEWS_SUCCESS,
  collection
});

export const fetchCollectionReviews = token => async dispatch => {
  const url = `http://${window.location.hostname}:3005/user/collection/reviews`;

  dispatch(fetchCollectionReviewsRequest());

  await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    }
  })
    .then(
      res => res.json(),
      error => dispatch(fetchCollectionReviewsFailed(error))
    )
    .then(collection => dispatch(fetchCollectionReviewsSuccess(collection)));
};
