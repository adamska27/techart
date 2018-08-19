import { connect } from 'react-redux';

import { fetchReview } from './actions';

import Review from '../../components/Review';

const mapStateToProps = state => ({
  error: state.review.error,
  isFetching: state.review.isFetching,
  review: state.review.review
});

const mapDispatchToProp = dispatch => ({
  fetchReview: (productId, reviewId) =>
    dispatch(fetchReview(productId, reviewId))
});

const ReviewContainer = connect(mapStateToProps, mapDispatchToProp)(Review);

export default ReviewContainer;
