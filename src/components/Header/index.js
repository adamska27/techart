import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AccountNav = styled.ul`
  display: flex;
  grid-area: AccountNav;
  list-style-type: none;
  justify-content: space-around;
`;

const ContainerHeader = styled.header`
  background-color: lightgrey;
`;

const ContainerNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 4fr 2fr;
  grid-template-areas: 'Logo MainNav AccountNav';
`;

const Logo = styled.div`
  grid-area: Logo;
`;

const MainNav = styled.ul`
  display: flex;
  grid-area: MainNav;
  list-style-type: none;
  justify-content: space-around;
`;

export default class Header extends React.Component {
  render() {
    return (
      <ContainerHeader>
        <ContainerNav>
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
