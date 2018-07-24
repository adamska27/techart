import { connect } from 'react-redux';
import { fetchSubmitRatingsReview } from './actions';

import RatingsReviewForm from '../../components/Forms/RatingsReview';

const mapStateToProps = state => ({
  error: state.submitRatingsReview.error,
  jwt: state.account.jwt
});

const mapDispatchToProps = dispatch => ({
  fetchSubmitRatingsReview: (jwt, product_id, ratings, review) =>
    dispatch(fetchSubmitRatingsReview(jwt, product_id, ratings, review))
});

const RatingsFormContainer = connect(mapStateToProps, mapDispatchToProps)(
  RatingsReviewForm
);

export default RatingsFormContainer;
