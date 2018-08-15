import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import media from '../../styles/media';

import { closeNavMobile } from '../../containers/Header/actions';

import Footer from '../../components/Footer';
import GridMobile from '../../components/GridMobile';
import NavMobile from '../../components/NavMobile';

const mapStateToProps = state => ({ navMobile: state.navMobile });

const mapDispatchToProps = dispatch => ({
  closeNavMobile: () => dispatch(closeNavMobile())
});

const getTransformValue = ({ navMobile }) => {
  const value = navMobile ? '0' : '-80%';
  return `transform: translateX(${value})`;
};

const ContainerPage = styled.div.attrs({ transform: getTransformValue })`
  /* to avoid the footer be in the middle of the page before data fetched */
  min-height: 85vh;
  padding-top: 100px;

  ${media.tablet`
    ${props => props.transform};
    transition: transform 0.3s;
  `};
`;

const Wraper = Component => {
  return class WrapComponent extends React.Component {
    render() {
      const { closeNavMobile, navMobile } = this.props;
      return (
        <GridMobile>
          <NavMobile navMobile={navMobile} closeNavMobile={closeNavMobile} />
          <ContainerPage navMobile={navMobile}>
            <Component {...this.props} />
          </ContainerPage>
          <Footer />
        </GridMobile>
      );
    }
  };
};

export default Component =>
  connect(mapStateToProps, mapDispatchToProps)(Wraper(Component));
