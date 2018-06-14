import { connect } from 'react-redux';
import { fetchSubmitRatings } from './actions';

import RatingsForm from '../../components/Forms/Ratings';

const mapStateToProps = state => ({
  error: state.submitRatings.error,
  jwt: state.account.jwt
});

const mapDispatchToProps = dispatch => ({
  fetchSubmitRatings: (user_id, product_id, data) =>
    dispatch(fetchSubmitRatings(user_id, product_id, data))
});

const RatingsFormContainer = connect(mapStateToProps, mapDispatchToProps)(
  RatingsForm
);

export default RatingsFormContainer;
