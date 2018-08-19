import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { reviewsType } from '../../PropTypes';

import Button from '../../components/common/Button';

import Reviews from '../ReviewsOfTheWeek';

const ButtonContainer = styled.div`
  margin: 0 auto;
  width: 200px;
`;

const ButtonStyled = styled(Button)`
  padding: 12px 6px;
`;

export default class ReviewsAll extends React.PureComponent {
  static propTypes = {
    error: PropTypes.object,
    fetchReviews: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    reviews: PropTypes.arrayOf(reviewsType).isRequired
  };

  render() {
    const { error, fetchReviews, isFetching, match, reviews } = this.props;

    return (
      <React.Fragment>
        <Reviews
          error={error}
          fetchReviews={fetchReviews}
          isFetching={isFetching}
          productId={match.params.productId}
          reviewAllComponent
          reviews={reviews}
        />
      </React.Fragment>
    );
  }
}
