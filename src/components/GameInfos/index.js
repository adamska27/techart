import idx from 'idx';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import getBetterCover from '../../utils/getBetterCover';
import Loader from '../common/Loader';
import media from '../../styles/media';
import Title from '../common/TitleSection';
import { Normal } from '../common/Text';

const HeaderImageContainer = styled.div`
  background-image: url(${props => (props.cover ? props.cover : null)});
  background-repeat: no-repeat;
  background-size: cover;
  height: 720px;
  width: 100%;

  ${media.phone`
    background-size: contain;
    height: 250px;
  `};
`;

const InfosContainer = styled.div`
  padding: 12px;
`;

const TextContainer = styled.div`
  margin: 0 auto;
  padding: 12px;
  width: 60%;
`;

export default class GameInfos extends React.PureComponent {
  static propTypes = {
    fetchGame: PropTypes.func,
    game: PropTypes.array,
    match: PropTypes.object
  };

  static defaultProps = {
    fetchGame: () => null,
    game: []
  };

  componentDidMount() {
    this.props.fetchGame(this.props.match.params.gameId);
  }

  renderInfos = (title, info) => (
    <InfosContainer>
      <h3>{title}</h3>
      <TextContainer>
        <Normal>
          {Array.isArray(info)
            ? info.map(i => <p>{i.name || 'N.C.'}</p>)
            : info ? info : 'N.C.'}
        </Normal>
      </TextContainer>
    </InfosContainer>
  );

  renderGame = game => {
    const artworks =
      idx(game, _ => _[0].artworks) || idx(game, _ => _[0].screenshots);
    let artworksLength = artworks.length || 0;
    // get a random number inferior at the sreenshots array length
    let artworksNumber = Math.floor(Math.random() * artworksLength);
    // use artworksNumber to get a random image among the screenshots available
    const cover = artworksLength
      ? getBetterCover(artworks[artworksNumber].url, /thumb/, '720p')
      : null;

    const developers = idx(game[0], _ => _.developers);
    const extensions = idx(game[0], _ => _.extensions);
    const franchises = idx(game[0], _ => _.franchises[0].name);
    const gameModes = idx(game[0], _ => _.game_modes);
    const genres = idx(game[0], _ => _.genres);
    const platforms = idx(game[0], _ => _.platforms);
    const publishers = idx(game[0], _ => _.publishers);
    const releaseDates = idx(game[0], _ => _.release_dates[0].human);
    const summary = idx(game[0], _ => _.summary);
    const themes = idx(game[0], _ => _.themes);
    return (
      <div>
        {game && (
          <React.Fragment>
            <div style={{ textAlign: 'center', textTransform: 'uppercase' }}>
              <HeaderImageContainer cover={cover} />
              <Title value={game[0].name} />
            </div>
            {this.renderInfos('Résumé', summary)}
            {this.renderInfos('Développeurs', developers)}
            {this.renderInfos('Éditeur', publishers)}
            {this.renderInfos('Genres', genres)}
            {this.renderInfos('Platforme', platforms)}
            {this.renderInfos('Extension', extensions)}
            {this.renderInfos('Thèmes', themes)}
            {this.renderInfos('Mode de jeu', gameModes)}
            {this.renderInfos('Date de sortie', releaseDates)}
            {this.renderInfos('Franchise', franchises)}
          </React.Fragment>
        )}
      </div>
    );
  };

  render() {
    const {
      game,
      isFetchingGameIgdb,
      isFetchingGame,
      isFetchingPostGame
    } = this.props;
    if (isFetchingGameIgdb || isFetchingGame || isFetchingPostGame) {
      return <Loader />;
    }
    return (
      <React.Fragment>
        {game && game[0] !== null && <div>{this.renderGame(game)}</div>}
      </React.Fragment>
    );
  }
}
