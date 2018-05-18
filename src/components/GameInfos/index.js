import idx from 'idx';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import getBetterCover from '../../utils/getBetterCover';

const HeaderImageContainer = styled.div`
  background-image: url(${props => (props.cover ? props.cover : null)});
  background-repeat: no-repeat;
  background-size: cover;
  height: 720px;
  width: 100%;
`;

export default class GameInfos extends React.Component {
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
          <div>
            <HeaderImageContainer cover={cover} />
            <div>{game[0].name}</div>
            <div>{game[0].summary}</div>
          </div>
        )}
      </div>
    );
  };

  render() {
    const { game } = this.props;
    return (
      <React.Fragment>
        {game && game[0] ? (
          <div>{this.renderGame(game)}</div>
        ) : (
          <div>loading</div>
        )}
      </React.Fragment>
    );
  }
}
