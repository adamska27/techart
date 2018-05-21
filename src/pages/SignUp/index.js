import React from 'react';
import styled from 'styled-components';

import AccountContainer from '../../containers/AccountContainer';
import Wraper from '../../HOC/Wraper';

const Container = styled.div`
  background-color: lightgray;
  display: flex;
  height: 100vh;
`;

const Content = styled.div`
  align-self: center;
  background-color: lightcoral;
  display: flex;
  margin: 0 auto;
  padding: 12px;
`;

class SignUp extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <AccountContainer template="signup" />
        </Content>
      </Container>
    );
  }
}

export default Wraper(SignUp);
