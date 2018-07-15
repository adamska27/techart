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
    fetched: PropTypes.bool,
    fetchGame: PropTypes.func,
    game: PropTypes.array,
    match: PropTypes.object
  };

  static defaultProps = {
    fetched: false,
    fetchGame: () => null,
    game: []
  };

  componentDidMount() {
    this.props.fetchGame(this.props.match.params.gameId);
  }

  renderGame = game => {
    let screenshotsLength = idx(game, _ => _[0].screenshots.length);
    // get a random number inferior at the sreenshots array length
    let screenshotsNumber = Math.floor(Math.random() * screenshotsLength);
    // use screenshotsNumber to get a random image among the screenshots available
    const cover = idx(game, _ => _[0].screenshots.length)
      ? getBetterCover(
          game[0].screenshots[screenshotsNumber].url,
          /thumb/,
          '720p'
        )
      : null;
    return (
      <div>
        {game && (
          <React.Fragment>
            <div style={{ textAlign: 'center', textTransform: 'uppercase' }}>
              <HeaderImageContainer cover={cover} />
              <Title value={game[0].name} />
            </div>
            <InfosContainer>
              <h3>Résumé</h3>
              <TextContainer>
                <Normal>{game[0].summary}</Normal>
              </TextContainer>
              <h3>Date de sortie</h3>
              <TextContainer>
                <Normal>{game[0].release_dates[0].human}</Normal>
              </TextContainer>
            </InfosContainer>
          </React.Fragment>
        )}
      </div>
    );
  };

  render() {
    const { game, isFetching } = this.props;
    console.log({ game });
    if (isFetching) {
      return <Loader />;
    }
    return (
      <React.Fragment>
        {game && game[0] && <div>{this.renderGame(game)}</div>}
      </React.Fragment>
    );
  }
}
