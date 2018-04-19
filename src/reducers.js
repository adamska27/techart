import { combineReducers } from 'redux';
import { popularGames } from './containers/PopularGames/reducers';
import { navMobile } from './containers/Header/reducers';
import { account } from './containers/AccountContainer/reducers';

const reducers = combineReducers({ popularGames, navMobile, account });

export default reducers;
