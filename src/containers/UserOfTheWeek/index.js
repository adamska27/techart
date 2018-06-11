import { connect } from 'react-redux';

import { fetchUserOfTheWeek } from './actions';

import UserOfTheWeek from '../../components/UserOfTheWeek';

const mapStateToProps = state => ({
  userOfTheWeek: state.userOfTheWeek.user
});

const mapDispatchToProps = dispatch => ({
  fetchUserOfTheWeek: () => dispatch(fetchUserOfTheWeek())
});

const UserOfTheWeekContainer = connect(mapStateToProps, mapDispatchToProps)(
  UserOfTheWeek
);

export default UserOfTheWeekContainer;
