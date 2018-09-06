import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import media from '../../styles/media';

import { closeNavMobile } from '../../containers/Header/actions';
import { logout } from '../../containers/AccountContainer/actions';

import Footer from '../../components/Footer';
import GridMobile from '../../components/GridMobile';
import NavMobile from '../../components/NavMobile';

const mapStateToProps = state => ({
  jwt: state.account.jwt,
  navMobile: state.global.navMobile,
  theme: state.global.theme
});

const mapDispatchToProps = dispatch => ({
  closeNavMobile: () => dispatch(closeNavMobile()),
  logout: () => dispatch(logout())
});

const getTransformValue = ({ navMobile }) => {
  const value = navMobile ? '0' : '-80%';
  return `transform: translateX(${value})`;
};

const ContainerPage = styled.div.attrs({ transform: getTransformValue })`
  background-color: ${({ theme, themeStyle }) =>
    themeStyle === 'dark'
      ? theme.color.backgroundDark
      : theme.color.backgroundLight};
  color: ${({ theme, themeStyle }) =>
    themeStyle === 'dark'
      ? theme.color.colorTextDark
      : theme.color.colorTextLight};
  /* to avoid the footer be in the middle of the page before data fetched */
  min-height: 85vh;
  padding-top: 100px;

  ${media.tablet`
    ${props => props.transform};
    transition: transform 0.3s;
  `};
`;

const Wraper = Component => {
  return class WrapComponent extends React.Component {
    render() {
      const { closeNavMobile, jwt, logout, navMobile, theme } = this.props;
      return (
        <React.Fragment>
          <GridMobile>
            <NavMobile
              navMobile={navMobile}
              closeNavMobile={closeNavMobile}
              jwt={jwt}
              logout={logout}
            />
            <ContainerPage themeStyle={theme} navMobile={navMobile}>
              <Component {...this.props} />
            </ContainerPage>
          </GridMobile>
          <Footer />
        </React.Fragment>
      );
    }
  };
};

export default Component =>
  connect(mapStateToProps, mapDispatchToProps)(Wraper(Component));
