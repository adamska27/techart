import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
  background-color: black;
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
    closeNavMobile: PropTypes.func,
    navMobile: PropTypes.bool,
    openNavMobile: PropTypes.func
  };

  onBtnNavMobileClick = () => {
    this.props.openNavMobile();
  };

  onCrossNavMobileClick = () => {
    this.props.closeNavMobile();
  };

  render() {
    const { navMobile } = this.props;
    return (
      <ContainerHeader>
        <ContainerNav>
          {navMobile ? (
            <CrossNavMobile onClick={this.onCrossNavMobileClick}>
              <img src={crossNavMobile} />
            </CrossNavMobile>
          ) : (
            <BtnNavMobile onClick={this.onBtnNavMobileClick}>
              <img src={btnNavMobile} />
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
            <Link to="/mygames">
              <li>mes jeux</li>
            </Link>
          </MainNav>
          <AccountNav>
            <Link to="/signup">
              <li>Inscription</li>
            </Link>
            <Link to="/signin">
              <li>Connexion</li>
            </Link>
          </AccountNav>
        </ContainerNav>
      </ContainerHeader>
    );
  }
}
