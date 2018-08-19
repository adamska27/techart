import { connect } from 'react-redux';

import { fetchReviews } from './actions';

import ReviewsOfTheWeek from '../../components/ReviewsOfTheWeek';

const mapStateToProp = state => ({
  error: state.reviewsOfTheWeek.error,
  reviews: state.reviewsOfTheWeek.reviews
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews())
});

const ReviewsOfTheWeekContainer = connect(mapStateToProp, mapDispatchToProps)(
  ReviewsOfTheWeek
);

export default ReviewsOfTheWeekContainer;
