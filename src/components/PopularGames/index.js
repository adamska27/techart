import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import PlaceHolder from '../common/PlaceHolderImage';
import TitleSection from '../common/TitleSection';
import getBetterCover from '../../utils/getBetterCover';

const HeightPlaceHolder = 210;
const WidthPlaceHolder = 250;

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
    popularGames: PropTypes.array
  };

  static defaultProps = {
    fetchPopularGames: () => null,
    popularGames: []
  };

  fetchPopularGames = () => {
    this.props.fetchPopularGames();
  };

  componentDidMount() {
    this.fetchPopularGames();
  }

  PopularGamesItem = game => {
    let cover = game.cover ? getBetterCover(game.cover.url) : null;
    return (
      <Game>
        {cover ? (
          <Cover src={cover} />
        ) : (
          <PlaceHolder height={HeightPlaceHolder} width={WidthPlaceHolder} />
        )}
        <Title>{game.name}</Title>
      </Game>
    );
  };

  render() {
    const { popularGames } = this.props;

    return (
      <React.Fragment>
        <TitleSection value="Les Plus Attendu" />
        <Container>
          {popularGames &&
            popularGames.map(game => {
              return (
                <Link key={game.id} to={`/game/${game.id}`}>
                  <li>{this.PopularGamesItem(game)}</li>
                </Link>
              );
            })}
        </Container>
      </React.Fragment>
    );
  }
}
