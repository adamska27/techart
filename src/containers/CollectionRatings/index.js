import { connect } from 'react-redux';

import { fetchCollection } from './actions';

import CollectionRatings from '../../components/CollectionRatings';

const mapStateToProps = state => ({
  collection: state.collectionRatings.collection,
  isFetching: state.collectionRatings.isFetching,
  token: state.account.jwt
});

const mapDispatchToProps = dispatch => ({
  fetchCollection: token => dispatch(fetchCollection(token))
});

const CollectionRatingsContainer = connect(mapStateToProps, mapDispatchToProps)(
  CollectionRatings
);

export default CollectionRatingsContainer;
