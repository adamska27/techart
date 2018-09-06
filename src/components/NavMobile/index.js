import decode from 'jwt-decode';
import idx from 'idx';
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
  margin-top: 100px;
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
    jwt: PropTypes.string,
    logout: PropTypes.func,
    navMobile: PropTypes.bool
  };

  logout = () => {
    this.props.logout();
  };

  render() {
    const { closeNavMobile, jwt, navMobile } = this.props;
    const decodedToken = jwt ? decode(jwt) : null;
    const id = idx(decodedToken, _ => _.id);
    return (
      <Container navMobile={navMobile} onClick={closeNavMobile}>
        <Link to="/">
          <LinkStyled>
            <li>Home</li>
          </LinkStyled>
        </Link>
        <Link to="/collection">
          <LinkStyled>
            <li>My Games</li>
          </LinkStyled>
        </Link>
        {jwt ? (
          <React.Fragment>
            <Link to={`/user/${id}`}>
              <LinkStyled>
                <li>Profile</li>
              </LinkStyled>
            </Link>
            <LinkStyled onClick={this.logout}>
              <li>Log Out</li>
            </LinkStyled>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link to="/signup">
              <LinkStyled>
                <li>SignUp</li>
              </LinkStyled>
            </Link>
            <Link to="/login">
              <LinkStyled>
                <li>LogIn</li>
              </LinkStyled>
            </Link>
          </React.Fragment>
        )}
      </Container>
    );
  }
}
