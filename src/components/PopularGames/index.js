import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import PlaceHolder from '../common/PlaceHolderImage';
import TitleSection from '../common/TitleSection';
import { H3 } from '../common/Text';
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

  &:hover {
    filter: grayscale(100%);
  }
`;

const GameTitle = styled(H3)`
  padding: 3px 0;
  overflow-wrap: break-word;
  text-align: center;
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
        <GameTitle>{game.name}</GameTitle>
      </Game>
    );
  };

  render() {
    const { popularGames } = this.props;

    return (
      <React.Fragment>
        <TitleSection value="Les Plus Populaires" />
        {popularGames && popularGames.length ? (
          <Container>
            {popularGames.map(game => {
              return (
                <Link key={game.id} to={`/game/${game.id}`}>
                  <li>{this.PopularGamesItem(game)}</li>
                </Link>
              );
            })}
          </Container>
        ) : (
          <div>
            <p>Un problème est survenu</p>
          </div>
        )}
      </React.Fragment>
    );
  }
}
