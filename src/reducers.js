import { combineReducers } from 'redux';

import { account } from './containers/AccountContainer/reducers';
import { collection } from './containers/Collection/reducers';
import { game } from './containers/GameContainer/reducers';
import { latestUsers } from './containers/LatestUsers/reducers';
import { navMobile } from './containers/Header/reducers';
import { popularGames } from './containers/PopularGames/reducers';
import { profile } from './containers/Profile/reducers';
import { ratings } from './containers/Ratings/reducers';
import { recentGames } from './containers/RecentGames/reducers';
import { submitRatings } from './containers/RatingsFormContainer/reducers';
import { userOfTheWeek } from './containers/UserOfTheWeek/reducers';

const reducers = combineReducers({
  account,
  collection,
  game,
  latestUsers,
  navMobile,
  popularGames,
  profile,
  ratings,
  recentGames,
  submitRatings,
  userOfTheWeek
});

export default reducers;
