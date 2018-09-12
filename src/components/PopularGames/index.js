import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Loader from '../common/Loader';
import PlaceHolder from '../common/PlaceHolderImage';
import TitleSection from '../common/TitleSection';
import { H3 } from '../common/Text';

import getBetterCover from '../../utils/getBetterCover';

const HeightPlaceHolder = 210;
const WidthPlaceHolder = 250;

const Container = styled.ul`
  display: grid;
  grid-auto-columns: min-content;
  grid-template-areas: 'game game game game game game game game game game game game';
  grid-template-rows: 1fr;
  margin: 0 auto;
  overflow-x: scroll;
  padding: 0;
  width: 100%;
`;

const Cover = styled.img`
  grid-area: cover;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  &:hover {
    -moz-transform: scale(1.05);
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
`;

const CoverContainer = styled.div`
  height: 250px;
  overflow: hidden;
  width: 100%;
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
        <CoverContainer>
          {cover ? (
            <Cover src={cover} />
          ) : (
            <PlaceHolder height={HeightPlaceHolder} width={WidthPlaceHolder} />
          )}
        </CoverContainer>
        <GameTitle>{game.name}</GameTitle>
      </Game>
    );
  };

  render() {
    const { isFetching, popularGames } = this.props;

    if (isFetching) return <Loader />;

    return (
      <React.Fragment>
        <TitleSection value="Most Popular" />
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
