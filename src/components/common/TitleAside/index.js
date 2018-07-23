import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h4`
  border-top: ${({ reverseColor, theme }) =>
    reverseColor
      ? `${theme.color.sideColor} solid 1px`
      : `${theme.color.mainColor} solid 1px`};
  color: ${({ reverseColor, theme }) =>
    reverseColor ? theme.color.mainColor : theme.color.sideColor};
  font-size: 18px;
  font-weight: 400;
  padding-top: 10px;
`;

export default class TitleAside extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    reverseColor: PropTypes.string,
    value: PropTypes.string.isRequired
  };

  render() {
    const { className, reverseColor, value } = this.props;
    return (
      <Title className={className} reverseColor={reverseColor}>
        {value}
      </Title>
    );
  }
}
