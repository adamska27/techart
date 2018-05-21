import { connect } from 'react-redux';

import { openNavMobile, closeNavMobile } from './actions';
import { logout } from '../AccountContainer/actions';

import Header from '../../components/Header';

const mapStateToProps = state => ({
  navMobile: state.navMobile,
  jwt: state.account.jwt
});

const mapDispatchToProps = dispatch => ({
  openNavMobile: () => dispatch(openNavMobile()),
  closeNavMobile: () => dispatch(closeNavMobile()),
  logout: () => dispatch(logout())
});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
