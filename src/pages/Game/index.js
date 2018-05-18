import React from 'react';

import GameContainer from '../../containers/GameContainer';
import Wraper from '../../HOC/Wraper';

class Game extends React.Component {
  render() {
    const { match } = this.props;
    return <GameContainer match={match} />;
  }
}

export default Wraper(Game);
