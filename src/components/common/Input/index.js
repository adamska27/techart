import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const transformLabel = ({ focus }) => {
  const value = focus ? `0` : `24px`;
  return `transform: translateY(${value}) scale(${focus ? 0.8 : 1});`;
};

const InputStyled = styled.input`
  -webkit-appearance: none;
  background-color: transparent;
  border: none;
  display: block;
  font-size: 14px;
  line-height: 16px;
  outline: none;
  padding: 8px 0;
  position: relative;
  transition-duration: 0.4s;
  width: 100%;
`;

const InputContainer = styled.div`
  position: relative;
  padding-top: 5px;

  &::after {
    content: '';
    height: 1px;
    width: 100%;
    position: absolute;
    bottom: 4px;
    left: 0;
    transition: transform 0.4s;
    background-color: ${props =>
      props.focus ? props.theme.color.mainColor : 'black'};
  }
`;

const Label = styled.label.attrs({
  transform: transformLabel
})`
  color: ${({ theme }) => theme.color.sideColor};
  display: block;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  padding-top: 10px;
  position: relative;
  transform-origin: top left;
  transition-duration: 0.4s;
  width: 100%;
  ${props => props.transform};
  ${props => props.scale};
`;

export default class Input extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  };

  static defaultProps = {
    required: false,
    type: 'text'
  };

  state = {
    focus: false
  };

  onBlur = () => {
    const { value } = this.props;
    if (!value.length) {
      this.setState({ focus: false });
    }
  };

  onFocus = () => {
    this.setState({ focus: true });
  };

  render() {
    const {
      className,
      label,
      name,
      onChange,
      required,
      type,
      value
    } = this.props;
    const { focus } = this.state;

    return (
      <InputContainer className={className} focus={focus}>
        <Label focus={focus} for={label}>
          {label}
        </Label>
        <InputStyled
          name={name}
          onBlur={this.onBlur}
          onChange={onChange}
          onFocus={this.onFocus}
          required={required}
          type={type}
          value={value}
        />
      </InputContainer>
    );
  }
}
