import { connect } from 'react-redux';
import React from 'react';

import GameContainer from '../../containers/GameContainer';
import Ratings from '../../containers/Ratings';
import Loader from '../../components/common/Loader';
import Wraper from '../../HOC/Wraper';

const mapStateToProps = state => ({
  fetched: state.game.fetched,
  isFetchingGame: state.game.isFetching
});

class Game extends React.PureComponent {
  render() {
    const { fetched, isFetchingGame, match } = this.props;
    if (isFetchingGame && !fetched) {
      return <Loader />;
    }
    return (
      <React.Fragment>
        <GameContainer match={match} fetched={fetched} />
        <Ratings match={match} />
      </React.Fragment>
    );
  }
}

export default Wraper(connect(mapStateToProps, null)(Game));
