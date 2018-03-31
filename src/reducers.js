import { combineReducers } from 'redux';
import { popularGames } from './containers/HomePage/reducers';
import { navMobile } from './containers/Header/reducers';

const reducers = combineReducers({ popularGames, navMobile });

export default reducers;
