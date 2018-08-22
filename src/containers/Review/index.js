import { connect } from 'react-redux';

import { fetchReview } from './actions';

import Review from '../../components/Review';

const mapStateToProps = state => ({
  error: state.review.error,
  isFetching: state.review.isFetching,
  review: state.review.review,
  token: state.account.jwt
});

const mapDispatchToProp = dispatch => ({
  fetchReview: (productId, reviewId, token) =>
    dispatch(fetchReview(productId, reviewId, token))
});

const ReviewContainer = connect(mapStateToProps, mapDispatchToProp)(Review);

export default ReviewContainer;
