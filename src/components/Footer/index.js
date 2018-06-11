import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: lightgray;
  height: 100px;
`;

export default class Footer extends React.PureComponent {
  render() {
    return (
      <FooterContainer>
        <h1>FOOTER</h1>
      </FooterContainer>
    );
  }
}
