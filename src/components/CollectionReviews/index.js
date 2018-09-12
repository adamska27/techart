import PropTypes from 'prop-types';
import React from 'react';

import { reviewType } from '../../PropTypes';

import ReviewsAll from '../ReviewsAll';

export default class CollectionReviews extends React.PureComponent {
  static propTypes = {
    collectionReviews: PropTypes.arrayOf(reviewType).isRequired,
    error: PropTypes.object,
    fetchCollection: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    token: PropTypes.string.isRequired
  };

  fetchCollectionReviews = () => {
    const { fetchCollection, token } = this.props;
    fetchCollection(token);
  };

  componentDidMount() {
    this.fetchCollectionReviews();
  }

  render() {
    const {
      error,
      fetchCollection,
      isFetching,
      collectionReviews
    } = this.props;
    return (
      <div>
        <ReviewsAll
          error={error}
          fromCollection
          fetchReviews={fetchCollection}
          isfetching={isFetching}
          reviews={collectionReviews}
        />
      </div>
    );
  }
}
