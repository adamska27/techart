import React from 'react';

import Account from '../../containers/AccountContainer';
import Wraper from '../../HOC/Wraper';

class LogIn extends React.Component {
  render() {
    return (
      <div>
        <Account template="login" />
      </div>
    );
  }
}

export default Wraper(LogIn);
