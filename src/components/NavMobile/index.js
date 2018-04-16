import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import media from '../../styles/media';

const getTransformValue = ({ navMobile }) => {
  const value = navMobile ? '0' : '-100%';
  return `transform: translateX(${value})`;
};

const Container = styled.ul.attrs({ transform: getTransformValue })`
  background-color: lightgrey;
  display: none;
  width: 100%;

  ${media.tablet`
    display: block;
    ${props => props.transform};
    transition: transform 0.3s;
  `};
`;

const LinkStyled = styled.div`
  border: 1px black solid;
  padding: 12px;
  text-align: center;
`;

export default class NavMobile extends React.PureComponent {
  static propTypes = {
    navMobile: PropTypes.bool
  };

  render() {
    const { navMobile } = this.props;
    return (
      <Container navMobile={navMobile}>
        <Link to="/">
          <LinkStyled>
            <li>Accueil</li>
          </LinkStyled>
        </Link>
        <Link to="/games">
          <LinkStyled>
            <li>Jeux</li>
          </LinkStyled>
        </Link>
        <Link to="/members">
          <LinkStyled>
            <li>membres</li>
          </LinkStyled>
        </Link>
        <Link to="/mygames">
          <LinkStyled>
            <li>mes jeux</li>
          </LinkStyled>
        </Link>
        <Link to="/signup">
          <LinkStyled>
            <li>Inscription</li>
          </LinkStyled>
        </Link>
        <Link to="/signin">
          <LinkStyled>
            <li>Connexion</li>
          </LinkStyled>
        </Link>
      </Container>
    );
  }
}
