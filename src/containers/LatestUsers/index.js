import { connect } from 'react-redux';

import { fetchLatestUsers } from './actions';

import LatestUsers from '../../components/LatestUsers';

const mapStateToProps = state => ({
  latestUsers: state.latestUsers.latestUsers
});

const mapDispatchToProps = dispatch => ({
  fetchLatestUsers: () => dispatch(fetchLatestUsers())
});

const LatestUsersContainer = connect(mapStateToProps, mapDispatchToProps)(
  LatestUsers
);

export default LatestUsersContainer;
