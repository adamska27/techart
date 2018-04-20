import { connect } from 'react-redux';

import { fetchSignUp, fetchLogin } from './actions';
import Account from '../../components/Forms/Account';

const mapStateToProps = state => ({
  error: state.account.error,
  isFetching: state.account.isFetching,
  login: state.account.login,
  register: state.account.register
});

const mapDispatchToProps = dispatch => ({
  fetchSignUp: data => dispatch(fetchSignUp(data)),
  fetchLogin: data => dispatch(fetchLogin(data))
});

const AccountContainer = connect(mapStateToProps, mapDispatchToProps)(Account);

export default AccountContainer;
