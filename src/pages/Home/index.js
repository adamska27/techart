import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import media from '../../styles/media';

import PopularGamesContainer from '../../containers/PopularGames';
import GridMobile from '../../components/GridMobile';
import NavMobile from '../../components/NavMobile';

import Wraper from '../../HOC/Wraper';

const getTransformValue = ({ navMobile }) => {
  const value = navMobile ? '0' : '-80%';
  return `transform: translateX(${value})`;
};

const Wrapper = styled.div.attrs({ transform: getTransformValue })`
  ${media.tablet`
    ${props => props.transform};
    transition: transform 0.3s;
  `};
`;

class Home extends React.Component {
  static propTypes = {
    navMobile: PropTypes.bool
  };

  render() {
    const { navMobile } = this.props;
    return (
      <div>
        <PopularGamesContainer />
        <div
          style={{
            height: '100px',
            width: '100%',
            border: '1px solid black'
          }}
        >
          Autre contenu
        </div>
        <div
          style={{
            height: '100px',
            width: '100%',
            border: '1px solid black'
          }}
        >
          Autre contenu
        </div>
        <div
          style={{
            height: '100px',
            width: '100%',
            border: '1px solid black'
          }}
        >
          Autre contenu
        </div>
        <div
          style={{
            height: '100px',
            width: '100%',
            border: '1px solid black'
          }}
        >
          Autre contenu
        </div>
      </div>
    );
  }
}

export default Wraper(Home);
