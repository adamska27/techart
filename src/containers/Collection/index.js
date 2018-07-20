import { connect } from 'react-redux';

import { fetchCollection } from './actions';

import Collection from '../../components/Collection';

const mapStateToProps = state => ({
  collection: state.collection.collection,
  isFetching: state.collection.isFetching,
  token: state.account.jwt
});

const mapDispatchToProps = dispatch => ({
  fetchCollection: token => dispatch(fetchCollection(token))
});

const CollectionContainer = connect(mapStateToProps, mapDispatchToProps)(
  Collection
);

export default CollectionContainer;
