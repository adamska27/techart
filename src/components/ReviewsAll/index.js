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
