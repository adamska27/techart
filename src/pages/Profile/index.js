import React from 'react';

import ProfileContainer from '../../containers/Profile';
import Wraper from '../../HOC/Wraper';

class Profile extends React.PureComponent {
  render() {
    const { match } = this.props;
    return <ProfileContainer match={match} />;
  }
}

export default Wraper(Profile);
