import PropTypes from 'prop-types';
import React from 'react';
import Loader from '../common/Loader';

export default class Profile extends React.PureComponent {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    infos: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      userName: PropTypes.string,
      profilePicture: PropTypes.string
    }).isRequired,
    token: PropTypes.string
  };

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
        <img src={`${infos.profilePicture}`} alt="profile" />
      </div>
    );
  }
}
