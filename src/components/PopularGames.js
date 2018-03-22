import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import getBetterCover from '../utils/getBetterCover';

const Container = styled.ul`
  display: grid;
  grid-auto-columns: min-content;
  /* grid-auto-rows: 1fr; */
  grid-template-areas: 'game game game game game game game game';
  grid-template-rows: 1fr;
  list-style-type: none;
  margin: 0 auto;
  overflow-y: scroll;
  padding: 0;
  width: 90%;
`;

const Cover = styled.img`
  grid-area: cover;
`;

const Game = styled.div`
  display: grid;
  grid-area: game;
  grid-template-areas:
    'cover'
    'title';
`;

const Title = styled.p`
  grid-area: title;
  font-size: 11px;
  font-weight: normal;
  text-align: center;
`;

export default class PopularGames extends React.Component {
  static propTypes = {
    fetchPopularGames: PropTypes.func,
    isFetching: PropTypes.bool,
    popularGames: PropTypes.array
  };

  fetchPopularGames = () => {
    return this.props.fetchPopularGames();
  };

  componentDidMount() {
    this.fetchPopularGames();
  }

  PopularGamesItem = game => {
    const cover = getBetterCover(game.cover.url);
    return (
      <Game>
        <Cover src={cover} />
        <Title>{game.name}</Title>
      </Game>
    );
  };

  render() {
    const { popularGames } = this.props;

    if (!popularGames.length) {
      return <p>Loading</p>;
    }

    return (
      <Container>
        {popularGames.map(game => {
          return (
            <Link key={game.id} to={`/game/${game.id}`}>
              <li>{this.PopularGamesItem(game)}</li>
            </Link>
          );
        })}
      </Container>
    );
  }
}
