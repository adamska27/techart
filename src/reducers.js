import { combineReducers } from 'redux';

import { account } from './containers/AccountContainer/reducers';
import { collectionRatings } from './containers/CollectionRatings/reducers';
import { collectionReviews } from './containers/CollectionReviews/reducers';
import { game } from './containers/GameContainer/reducers';
import { latestUsers } from './containers/LatestUsers/reducers';
import { likeUnlikeReview } from './containers/LikeUnlikeReview/reducers';
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
  collectionRatings,
  collectionReviews,
  game,
  latestUsers,
  likeUnlikeReview,
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
