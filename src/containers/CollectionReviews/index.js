import { connect } from 'react-redux';

import { fetchCollectionReviews } from './actions';

import CollectionReviews from '../../components/CollectionReviews';

const mapStateToProps = state => ({
  collectionReviews: state.collectionReviews.collection,
  error: state.collectionReviews.error,
  isFetching: state.collectionReviews.isFetching,
  token: state.account.jwt
});

const mapDispatchToProps = dispatch => ({
  fetchCollection: token => dispatch(fetchCollectionReviews(token))
});

const CollectionReviewsContainer = connect(mapStateToProps, mapDispatchToProps)(
  CollectionReviews
);

export default CollectionReviewsContainer;
