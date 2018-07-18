import { connect } from 'react-redux';
import React from 'react';

import GameContainer from '../../containers/GameContainer';
import Ratings from '../../containers/Ratings';
import Wraper from '../../HOC/Wraper';

const mapStateToProps = state => ({
  isFetchingGame: state.game.isFetching
});

class Game extends React.PureComponent {
  render() {
    const { fetched, match } = this.props;

    return (
      <React.Fragment>
        <GameContainer match={match} fetched={fetched} />
        <Ratings match={match} />
      </React.Fragment>
    );
  }
}

export default Wraper(connect(mapStateToProps, null)(Game));
