import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import getBetterCover from '../../utils/getBetterCover';

const Container = styled.ul`
  display: grid;
  grid-auto-columns: min-content;
  grid-template-areas: 'game game game game game game game game';
  grid-template-rows: 1fr;
  margin: 0 auto;
  overflow-x: scroll;
  padding: 0;
  width: 100%;
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

export default class PopularGames extends React.PureComponent {
  static propTypes = {
    fetchPopularGames: PropTypes.func,
    isFetching: PropTypes.bool,
    popularGames: PropTypes.array
  };

  static defaultProps = {
    fetchPopularGames: () => null,
    isFetching: false,
    popularGames: []
  };

  fetchPopularGames = () => {
    this.props.fetchPopularGames();
  };

  componentDidMount() {
    this.fetchPopularGames();
  }

  PopularGamesItem = game => {
    const cover = game.cover
      ? getBetterCover(game.cover.url)
      : 'https://img.freepik.com/icones-gratuites/point-d-39-interrogation_318-52837.jpg?size=338&ext=jpg';
    return (
      <Game>
        <Cover src={cover} />
        <Title>{game.name}</Title>
      </Game>
    );
  };

  render() {
    const { isFetching, popularGames } = this.props;

    if (isFetching) {
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
