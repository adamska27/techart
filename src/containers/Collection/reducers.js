import {
  FETCH_COLLECTION_FAILED,
  FETCH_COLLECTION_REQUEST,
  FETCH_COLLECTION_SUCCESS
} from './constants';

const initialState = {
  error: null,
  isFetching: false,
  collection: []
};

export const collection = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_COLLECTION_REQUEST:
    return { ...state, isFetching: true };
  case FETCH_COLLECTION_FAILED:
    return { ...state, isFetching: false, error: action.error };
  case FETCH_COLLECTION_SUCCESS:
    return { ...state, isFetching: false, collection: action.collection };
  default:
    return state;
  }
};
