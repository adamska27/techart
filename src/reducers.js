import { account } from './containers/AccountContainer/reducers';
import { combineReducers } from 'redux';
import { game } from './containers/GameContainer/reducers';
import { navMobile } from './containers/Header/reducers';
import { popularGames } from './containers/PopularGames/reducers';
import { recentGames } from './containers/RecentGames/reducers';
import { userOfTheWeek } from './containers/UserOfTheWeek/reducers';
import { latestUsers } from './containers/LatestUsers/reducers';

const reducers = combineReducers({
  account,
  game,
  latestUsers,
  navMobile,
  popularGames,
  recentGames,
  userOfTheWeek
});

export default reducers;
