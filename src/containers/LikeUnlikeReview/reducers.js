import {
  LIKE_REVIEW_REQUEST,
  LIKE_REVIEW_FAILED,
  LIKE_REVIEW_SUCCESS,
  UNLIKE_REVIEW_REQUEST,
  UNLIKE_REVIEW_FAILED,
  UNLIKE_REVIEW_SUCCESS
} from './constants.js';

const initialState = {
  errorLike: null,
  errorUnlike: null,
  isFetchingLike: false,
  isFetchingUnlike: false,
  success: false
};

export const likeUnlikeReview = (state = initialState, action) => {
  switch (action.type) {
  case LIKE_REVIEW_REQUEST:
    return { ...state, isFetchingLike: true };
  case LIKE_REVIEW_FAILED:
    return { ...state, isFetchingLike: false, errorLike: action.error };
  case LIKE_REVIEW_SUCCESS:
    return { ...state, isFetchingLike: false, success: action.success };
  case UNLIKE_REVIEW_REQUEST:
    return { ...state, isFetchingUnlike: true };
  case UNLIKE_REVIEW_FAILED:
    return { ...state, isFetchingUnlike: false, errorUnlike: action.error };
  case UNLIKE_REVIEW_SUCCESS:
    return { ...state, isFetchingUnlike: false, success: action.success };
  default:
    return state;
  }
};
