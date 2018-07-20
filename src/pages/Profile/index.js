import React from 'react';

import ProfileContainer from '../../containers/Profile';
import Wraper from '../../HOC/Wraper';

class Profile extends React.PureComponent {
  render() {
    return <ProfileContainer />;
  }
}

export default Wraper(Profile);
