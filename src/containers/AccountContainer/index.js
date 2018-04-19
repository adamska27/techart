import { connect } from 'react-redux';
import { fetchSignUp, fetchLogin } from './actions';

import Account from '../../components/Forms/Account';

const mapStateToProps = state => ({
  error: state.error,
  isFetching: state.isFetching
});

const mapDispatchToProps = dispatch => ({
  fetchSignUp: data => dispatch(fetchSignUp(data)),
  fetchLogin: data => dispatch(fetchLogin(data))
});

const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(Account);

export default SignUpContainer;
