import { combineReducers } from 'redux';
import { popularGames } from './containers/HomePage/reducers';

const reducers = combineReducers({ popularGames });

export default reducers;