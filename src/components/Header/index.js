import idx from 'idx';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import decode from 'jwt-decode';

import media from '../../styles/media';

import btnNavMobile from '../../static/btnNavMobile.svg';
import crossNavMobile from '../../static/crossNavMobile.svg';

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
`;

const ContainerNav = styled.nav`
  align-items: center;
  display: grid;
  grid-template-areas: 'Logo MainNav AccountNav';
  grid-template-columns: 1fr 4fr 2fr;
  grid-template-rows: 40px;
  padding: 10px;

  ${media.tablet`
    grid-template-areas: 'BtnNavMobile Logo';
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

export default class Header extends React.Component {
  static propTypes = {
    closeNavMobile: PropTypes.func.isRequired,
    jwt: PropTypes.string,
    navMobile: PropTypes.bool.isRequired,
    openNavMobile: PropTypes.func.isRequired
  };

  onBtnNavMobileClick = () => {
    this.props.openNavMobile();
  };

  onCrossNavMobileClick = () => {
    this.props.closeNavMobile();
  };

  logout = () => {
    this.props.logout();
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
          <Link to="/">
            <Logo>Logo</Logo>
          </Link>
          <MainNav>
            <Link to="/">
              <li>Accueil</li>
            </Link>
            <Link to="/games">
              <li>Jeux</li>
            </Link>
            <Link to="/members">
              <li>membres</li>
            </Link>
            <Link to="/collection">
              <li>mes jeux</li>
            </Link>
          </MainNav>
          <AccountNav>
            {/* check if there is a decodeToken and display the username */}
            {decodedToken && decodedToken.userName ? (
              <React.Fragment>
                <Link to={`/user/${id}`}>
                  <li>{decodedToken.userName}</li>
                </Link>
                <Logout onClick={this.logout}>déconnexion</Logout>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link to="/signup">
                  <li>Inscription</li>
                </Link>
                <Link to="/login">
                  <li>Connexion</li>
                </Link>
              </React.Fragment>
            )}
          </AccountNav>
        </ContainerNav>
      </ContainerHeader>
    );
  }
}
