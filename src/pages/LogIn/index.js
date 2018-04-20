import React from 'react';

import AccountContainer from '../../containers/AccountContainer';
import Wraper from '../../HOC/Wraper';

class LogIn extends React.Component {
  render() {
    return (
      <div>
        <AccountContainer template="login" />
      </div>
    );
  }
}

export default Wraper(LogIn);
