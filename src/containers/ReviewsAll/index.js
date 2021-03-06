import { connect } from 'react-redux';

import { fetchReviews } from './actions';

import ReviewsAll from '../../components/ReviewsAll';

const mapStateToProps = state => ({
  error: state.reviewsAll.error,
  isFetching: state.reviewsAll.isFetching,
  reviews: state.reviewsAll.reviews
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: productId => dispatch(fetchReviews(productId))
});

const ReviewsAllContainer = connect(mapStateToProps, mapDispatchToProps)(
  ReviewsAll
);

export default ReviewsAllContainer;
