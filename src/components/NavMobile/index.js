import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import media from '../../styles/media';

const getTransformValue = ({ navMobile }) => {
  const value = navMobile ? '0' : '-100%';
  return `transform: translateX(${value})`;
};

const Container = styled.div.attrs({ transform: getTransformValue })`
  background-color: lightgrey;
  display: none;
  height: 10vh;
  width: 100%;

  ${media.tablet`
    display: block;
    ${props => props.transform};
    transition: transform 0.3s;
  `};
`;

export default class NavMobile extends React.PureComponent {
  static propTypes = {
    navMobile: PropTypes.bool
  };

  render() {
    const { navMobile } = this.props;
    return <Container navMobile={navMobile}>Je suis la nav mobile</Container>;
  }
}
