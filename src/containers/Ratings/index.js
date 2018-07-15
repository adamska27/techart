import { connect } from 'react-redux';

import { fetchUserRatings, fetchRatingsAverage } from './actions';

import RadarChart from '../../components/RadarChart';

const mapStateToProps = state => ({
  jwt: state.account.jwt,
  userRatings: state.ratings.userRatings,
  ratingsAverage: state.ratings.ratingsAverage
});

const mapDispatchToProps = dispatch => ({
  fetchUserRatings: (jwt, productId) =>
    dispatch(fetchUserRatings(jwt, productId)),
  fetchRatingsAverage: productId => dispatch(fetchRatingsAverage(productId))
});

const RatingContainer = connect(mapStateToProps, mapDispatchToProps)(
  RadarChart
);

export default RatingContainer;
