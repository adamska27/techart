import { account } from './containers/AccountContainer/reducers';
import { combineReducers } from 'redux';
import { game } from './containers/GameContainer/reducers';
import { navMobile } from './containers/Header/reducers';
import { popularGames } from './containers/PopularGames/reducers';

const reducers = combineReducers({
  account,
  game,
  navMobile,
  popularGames
});

export default reducers;
