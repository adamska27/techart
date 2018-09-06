import React from 'react';
import styled from 'styled-components';

import { Normal } from '../common/Text';

const FooterContainer = styled.footer`
  align-items: center;
  background: ${({ theme }) => theme.color.gradient};
  color: white;
  display: flex;
  justify-content: center;
  height: 100px;
`;

export default class Footer extends React.PureComponent {
  render() {
    return (
      <FooterContainer>
        <Normal>© 2018 Adamska</Normal>
      </FooterContainer>
    );
  }
}
