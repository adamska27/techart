import { connect } from 'react-redux';

import { openNavMobile, closeNavMobile } from './actions';

import Header from '../../components/Header';

const mapStateToProps = state => ({ navMobile: state.navMobile });

const mapDispatchToProps = dispatch => ({
  openNavMobile: () => dispatch(openNavMobile()),
  closeNavMobile: () => dispatch(closeNavMobile())
});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
