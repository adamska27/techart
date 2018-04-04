import { connect } from 'react-redux';

import { fetchPopularGames } from './actions';
import PopularGames from '../../components/PopularGames';

const mapStateToProps = state => ({
  popularGames: state.popularGames.popularGames,
  isFetching: state.popularGames.isFetching
});

const mapDispatchToProps = dispatch => ({
  fetchPopularGames: () => dispatch(fetchPopularGames())
});

const PopularGamesContainer = connect(mapStateToProps, mapDispatchToProps)(
  PopularGames
);

export default PopularGamesContainer;