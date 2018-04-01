import React from 'react';
import styled from 'styled-components';

import media from '../../styles/media';

const StyledGridMobile = styled.div`
  ${media.tablet`
    display: grid;
    grid-template-columns: 80% 100%;
    grid-template-rows: auto;
    overflow: hidden;
  `};
`;

export default class GridMobile extends React.Component {
  render() {
    return <StyledGridMobile>{this.props.children}</StyledGridMobile>;
  }
}
