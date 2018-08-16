import { connect } from 'react-redux';

import {
  openNavMobile,
  closeNavMobile,
  lightTheme,
  darkTheme
} from './actions';
import { logout } from '../AccountContainer/actions';

import Header from '../../components/Header';

const mapStateToProps = state => ({
  navMobile: state.global.navMobile,
  jwt: state.account.jwt,
  theme: state.global.theme
});

const mapDispatchToProps = dispatch => ({
  openNavMobile: () => dispatch(openNavMobile()),
  closeNavMobile: () => dispatch(closeNavMobile()),
  changeToLightTheme: () => dispatch(lightTheme()),
  changeToDarkTheme: () => dispatch(darkTheme()),
  logout: () => dispatch(logout())
});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
