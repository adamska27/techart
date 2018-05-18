import { connect } from 'react-redux';

import { fetchGame } from './actions';
import GameInfos from '../../components/GameInfos';

const mapStateToProps = state => ({
  game: state.game.game
});

const mapDispatchToProps = dispatch => ({
  fetchGame: id => dispatch(fetchGame(id))
});

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(GameInfos);

export default GameContainer;
