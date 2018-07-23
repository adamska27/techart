import {
  FETCH_COLLECTION_FAILED,
  FETCH_COLLECTION_REQUEST,
  FETCH_COLLECTION_SUCCESS
} from './constants';

const fetchCollectionFailed = error => ({
  type: FETCH_COLLECTION_FAILED,
  error
});

const fetchCollectionRequest = () => ({
  type: FETCH_COLLECTION_REQUEST
});

const fetchCollectionSuccess = collection => ({
  type: FETCH_COLLECTION_SUCCESS,
  collection
});

export const fetchCollection = token => async dispatch => {
  const url = 'http://localhost:3005/user/collection';

  dispatch(fetchCollectionRequest());

  await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json(), error => dispatch(fetchCollectionFailed(error)))
    .then(collection => dispatch(fetchCollectionSuccess(collection)));
};
