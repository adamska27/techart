import React from 'react';
import Loader from '../common/Loader';

export default class Profile extends React.PureComponent {
  componentDidMount() {
    const { fetchProfile, token } = this.props;
    fetchProfile(token);
  }

  render() {
    const { infos, isFetching } = this.props;

    if (isFetching) return <Loader />;
    return (
      <div>
        <p>Profile component</p>
        <p>{infos.firstName}</p>
        <p>{infos.lastName}</p>
        <p>{infos.userName}</p>
        <img src={`${infos.profilePicture}`} alt="profile-picture" />
      </div>
    );
  }
}
