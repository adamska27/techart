import React from 'react';

import AccountContainer from '../../containers/AccountContainer';
import Wraper from '../../HOC/Wraper';

class SignUp extends React.Component {
  render() {
    return <AccountContainer template="signup" />;
  }
}

export default Wraper(SignUp);
