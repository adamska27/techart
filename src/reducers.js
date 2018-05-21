import { account } from './containers/AccountContainer/reducers';
import { combineReducers } from 'redux';
import { game } from './containers/GameContainer/reducers';
import { navMobile } from './containers/Header/reducers';
import { popularGames } from './containers/PopularGames/reducers';
import { recentGames } from './containers/RecentGames/reducers';

const reducers = combineReducers({
  account,
  game,
  navMobile,
  popularGames,
  recentGames
});

export default reducers;
