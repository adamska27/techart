import idx from 'idx';
import PropTypes from 'prop-types';
import React from 'react';

import { reviewsType } from '../../PropTypes';

import Reviews from '../ReviewsOfTheWeek';

export default class ReviewsAll extends React.PureComponent {
  static propTypes = {
    error: PropTypes.object,
    fetchReviews: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    reviews: PropTypes.arrayOf(reviewsType).isRequired
  };

  render() {
    const {
      fromCollection,
      error,
      fetchReviews,
      isFetching,
      match,
      reviews
    } = this.props;
    const productId = idx(match, _ => _.params.productId);

    return (
      <React.Fragment>
        <Reviews
          error={error}
          fromCollection={fromCollection}
          fetchReviews={fetchReviews}
          isFetching={isFetching}
          productId={productId}
          reviewAllComponent
          reviews={reviews}
        />
      </React.Fragment>
    );
  }
}
