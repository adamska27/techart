import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Card from '../../components/CardGame';
import Loader from '../../components/common/Loader';
import Wraper from '../../HOC/Wraper';

const mapStateToProps = state => ({
  error: PropTypes.object,
  isFetching: state.search.isFetching,
  result: state.search.result
});

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

class SearchResult extends React.PureComponent {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    result: PropTypes.arrayOf(PropTypes.any).isRequired
  };

  render() {
    const { isFetching, result } = this.props;

    if (isFetching) {
      return <Loader />;
    }

    return (
      <Container>
        {result.map(game => {
          return <Card key={game.id} game={game} />;
        })}
      </Container>
    );
  }
}

export default Wraper(connect(mapStateToProps, null)(SearchResult));
