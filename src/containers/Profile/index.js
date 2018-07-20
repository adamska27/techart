import { connect } from 'react-redux';

import { fetchProfile } from './actions';

import Profile from '../../components/Profile';

const mapStateToProps = state => ({
  isFetching: state.profile.isFetching,
  infos: state.profile.infos,
  token: state.account.jwt
});

const mapDispatchToProps = dispatch => ({
  fetchProfile: token => dispatch(fetchProfile(token))
});

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
