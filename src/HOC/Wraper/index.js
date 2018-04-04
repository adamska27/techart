import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import media from '../../styles/media';

import GridMobile from '../../components/GridMobile';
import NavMobile from '../../components/NavMobile';

const mapStateToProps = state => ({ navMobile: state.navMobile });

const getTransformValue = ({ navMobile }) => {
  const value = navMobile ? '0' : '-80%';
  return `transform: translateX(${value})`;
};

const ContainerPage = styled.div.attrs({ transform: getTransformValue })`
  ${media.tablet`
    ${props => props.transform};
    transition: transform 0.3s;
  `};
`;

const Wraper = Component => {
  return class WrapComponent extends React.Component {
    render() {
      const { navMobile } = this.props;
      return (
        <GridMobile>
          <NavMobile navMobile={this.props.navMobile} />
          <ContainerPage navMobile={this.props.navMobile}>
            <Component {...this.props} />
          </ContainerPage>
        </GridMobile>
      );
    }
  };
};

export default Component => connect(mapStateToProps, null)(Wraper(Component));
