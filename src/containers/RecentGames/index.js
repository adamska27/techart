import { connect } from 'react-redux';

import { fetchRecentGames } from './actions';

import RecentGames from '../../components/RecentGames';

const mapStateToProps = state => ({
  recentGames: state.recentGames.recentGames
});

const mapDispatchToProps = dispatch => ({
  fetchRecentGames: () => dispatch(fetchRecentGames())
});

const RecentGamesContainer = connect(mapStateToProps, mapDispatchToProps)(
  RecentGames
);

export default RecentGamesContainer;
