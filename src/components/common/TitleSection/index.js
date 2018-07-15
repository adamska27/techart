import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  border-bottom: ${({ reverseColor, theme }) =>
    reverseColor
      ? `${theme.color.mainColor} solid 1px`
      : `${theme.color.sideColor} solid 1px`};
  color: ${({ reverseColor, theme }) =>
    reverseColor ? theme.color.sideColor : theme.color.mainColor};
  font-size: 20px;
  font-weight: 400;
  margin: 12px 0;
  padding: 3px 0;
`;

export default class TitleSection extends React.PureComponent {
  static propTypes = {
    reverseColor: PropTypes.string,
    value: PropTypes.string.isRequired
  };

  render() {
    const { reverseColor, value } = this.props;
    return <Title reverseColor={reverseColor}>{value}</Title>;
  }
}
