import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';

import CollectionRatings from '../../containers/CollectionRatings';
import CollectionReviews from '../../containers/CollectionReviews';
import Wraper from '../../HOC/Wraper';

import Button from '../../components/common/Button';

const StyledButton = styled(Button)`
  padding: 6px 24px;
`;

const Container = styled.div`
  padding: 24px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 48px;
`;

class Collection extends React.PureComponent {
  render() {
    return (
      <Container>
        <Nav>
          <Link to="/collection">
            <StyledButton value="Ratings" />
          </Link>
          <Link to="/collection/reviews">
            <StyledButton value="Reviews" />
          </Link>
        </Nav>
        <Route path="/collection/reviews" component={CollectionReviews} />
        <Route exact path="/collection" component={CollectionRatings} />
      </Container>
    );
  }
}

export default Wraper(Collection);
