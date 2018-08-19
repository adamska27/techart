import { combineReducers } from 'redux';

import { account } from './containers/AccountContainer/reducers';
import { collection } from './containers/Collection/reducers';
import { game } from './containers/GameContainer/reducers';
import { latestUsers } from './containers/LatestUsers/reducers';
import { global } from './containers/Header/reducers';
import { popularGames } from './containers/PopularGames/reducers';
import { profile } from './containers/Profile/reducers';
import { ratings } from './containers/Ratings/reducers';
import { recentGames } from './containers/RecentGames/reducers';
import { review } from './containers/Review/reducers';
import { reviewsAll } from './containers/ReviewsAll/reducers';
import { reviewsOfTheWeek } from './containers/ReviewsOfTheWeek/reducers';
import { search } from './containers/Search/reducers';
import { submitRatingsReview } from './containers/RatingsReviewForm/reducers';
import { userOfTheWeek } from './containers/UserOfTheWeek/reducers';

const reducers = combineReducers({
  account,
  collection,
  game,
  latestUsers,
  global,
  popularGames,
  profile,
  ratings,
  recentGames,
  review,
  reviewsAll,
  reviewsOfTheWeek,
  search,
  submitRatingsReview,
  userOfTheWeek
});

export default reducers;
