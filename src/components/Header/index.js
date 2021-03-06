import decode from 'jwt-decode';
import idx from 'idx';
import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import media from '../../styles/media';
import yinYang from '../../static/yinYang.png';

import btnNavMobile from '../../static/btnNavMobile.svg';
import crossNavMobile from '../../static/crossNavMobile.png';

import Search from '../../containers/Search';

const AccountNav = styled.ul`
  display: flex;
  grid-area: AccountNav;
  list-style-type: none;
  justify-content: space-around;

  ${media.tablet`
    display: none;
  `};
`;

const BtnNavMobile = styled.div`
  cursor: pointer;
  display: none;
  grid-area: BtnNavMobile;

  ${media.tablet`
    display: block;
  `};
`;

const CrossNavMobile = styled(BtnNavMobile)`
  display: none;
  grid-area: BtnNavMobile;

  ${media.tablet`
    display: block;
  `};
`;

const ContainerHeader = styled.header`
  background: ${({ theme }) => theme.color.gradient};
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const ContainerNav = styled.nav`
  align-items: center;
  display: grid;
  grid-template-areas:
    'Logo MainNav AccountNav'
    'Logo SearchBarContainer .';
  grid-template-columns: 1fr 4fr 2fr;
  grid-template-rows: 40px 40px;
  padding: 10px;

  ${media.tablet`
    grid-template-areas: 
    'BtnNavMobile Logo'
    'SearchBarContainer SearchBarContainer';
    grid-template-columns: min-content 1fr;
  `};
`;

const Logo = styled.div`
  grid-area: Logo;

  ${media.tablet`
    text-align: right;
  `};
`;

const Logout = styled.li`
  cursor: pointer;
`;

const MainNav = styled.ul`
  display: flex;
  grid-area: MainNav;
  list-style-type: none;
  justify-content: space-around;

  ${media.tablet`
    display: none;
  `};
`;

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1 / 4;
  grid-area: SearchBarContainer;
`;

export default class Header extends React.Component {
  static propTypes = {
    changeToDarkTheme: PropTypes.func.isRequired,
    changeToLightTheme: PropTypes.func.isRequired,
    closeNavMobile: PropTypes.func.isRequired,
    jwt: PropTypes.string,
    logout: PropTypes.func.isRequired,
    navMobile: PropTypes.bool.isRequired,
    openNavMobile: PropTypes.func.isRequired,
    theme: PropTypes.string.isRequired
  };

  onBtnNavMobileClick = () => {
    this.props.openNavMobile();
  };

  onCrossNavMobileClick = () => {
    this.props.closeNavMobile();
  };

  onChangeTheme = () => {
    const { changeToDarkTheme, changeToLightTheme, theme } = this.props;
    if (theme === 'light') {
      changeToDarkTheme();
    } else {
      changeToLightTheme();
    }
  };

  logout = async () => {
    await this.props.logout();
  };

  render() {
    const { jwt, navMobile } = this.props;
    const decodedToken = jwt ? decode(jwt) : null;
    const id = idx(decodedToken, _ => _.id);

    return (
      <ContainerHeader>
        <ContainerNav>
          {navMobile ? (
            <CrossNavMobile onClick={this.onCrossNavMobileClick}>
              <img src={crossNavMobile} alt="cross-nav-mobile" />
            </CrossNavMobile>
          ) : (
            <BtnNavMobile onClick={this.onBtnNavMobileClick}>
              <img src={btnNavMobile} alt="button-nav-mobile" />
            </BtnNavMobile>
          )}
          <Logo>
            <img
              style={{ height: '50px', width: '50px' }}
              src={yinYang}
              alt="logo"
            />
          </Logo>
          <MainNav>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/collection">
              <li>My Games</li>
            </Link>
          </MainNav>
          <AccountNav>
            {/* check if there is a decodeToken and display the username */}
            {decodedToken ? (
              <React.Fragment>
                <Link to={`/user/${id}`}>
                  <li>Profil</li>
                </Link>
                <Logout onClick={this.logout}>Log Out</Logout>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link to="/signup">
                  <li>SignUp</li>
                </Link>
                <Link to="/login">
                  <li>LogIn</li>
                </Link>
              </React.Fragment>
            )}
          </AccountNav>
          <SearchBarContainer>
            <Search />
          </SearchBarContainer>
          {/* <button onClick={this.onChangeTheme}>change theme</button> */}
        </ContainerNav>
      </ContainerHeader>
    );
  }
}
