import React from 'react';
import styled from 'styled-components';

import loader from '../../../static/loader.gif';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export default class Loader extends React.PureComponent {
  render() {
    return (
      <Container>
        <img src={loader} alt="loading..." />
      </Container>
    );
  }
}
