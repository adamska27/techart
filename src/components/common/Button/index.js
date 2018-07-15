import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background: white;
  border-radius: 6px;
  color: black;
  cursor: pointer;
  padding: 12px 6px;
  box-shadow: ${({ theme }) =>
    `0px 0px 5px 1px ${theme.color.mainColorTransparent}`};
  height: 100%;
  width: 100%;

  &:hover {
    background: ${({ theme }) => theme.color.gradient};
    color: white;
  }
`;

export default class Button extends React.PureComponent {
  static propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    type: PropTypes.string
  };

  static defaultProps = {
    backgroundColor: 'white',
    color: 'black',
    type: 'button'
  };

  render() {
    const { backgroundColor, color, type, value } = this.props;
    return (
      <ButtonStyled backgroundColor={backgroundColor} color={color} type={type}>
        {value}
      </ButtonStyled>
    );
  }
}
