import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const PlaceHolder = styled.div`
  align-items: center;
  background-color: lightgrey;
  display: flex;
  filter: blur(1px);
  font-size: ${({ height }) => `${height / 2}px`};
  height: ${({ height }) => `${height}px`};
  justify-content: center;
  width: ${({ width }) => `${width}px`};
`;

export default class PlaceHolderImage extends React.PureComponent {
  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  };

  render() {
    const { height, width } = this.props;
    return (
      <PlaceHolder height={height} width={width}>
        ?
      </PlaceHolder>
    );
  }
}
