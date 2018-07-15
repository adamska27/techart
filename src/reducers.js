import { account } from './containers/AccountContainer/reducers';
import { combineReducers } from 'redux';
import { game } from './containers/GameContainer/reducers';
import { latestUsers } from './containers/LatestUsers/reducers';
import { navMobile } from './containers/Header/reducers';
import { popularGames } from './containers/PopularGames/reducers';
import { ratings } from './containers/Ratings/reducers';
import { recentGames } from './containers/RecentGames/reducers';
import { submitRatings } from './containers/RatingsFormContainer/reducers';
import { userOfTheWeek } from './containers/UserOfTheWeek/reducers';

const reducers = combineReducers({
  account,
  game,
  latestUsers,
  navMobile,
  popularGames,
  ratings,
  recentGames,
  submitRatings,
  userOfTheWeek
});

export default reducers;
