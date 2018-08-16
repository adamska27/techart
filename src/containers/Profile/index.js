import { connect } from 'react-redux';

import { fetchUserProfile, fetchMyProfile } from './actions';

import Profile from '../../components/Profile';

const mapStateToProps = state => ({
  isFetchingUserProfile: state.profile.isFetchingUserProfile,
  isFetchingMyProfile: state.profile.isFetchingMyProfile,
  userInfos: state.profile.userInfos,
  myInfos: state.profile.myInfos,
  token: state.account.jwt
});

const mapDispatchToProps = dispatch => ({
  fetchUserProfile: id => dispatch(fetchUserProfile(id)),
  fetchMyProfile: token => dispatch(fetchMyProfile(token))
});

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
