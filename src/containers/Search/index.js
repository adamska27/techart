import { connect } from 'react-redux';

import { fetchSearch } from './actions';

import SearchBar from '../../components/SearchBar';

const mapDispatchToProps = dispatch => ({
  fetchSearch: keyword => dispatch(fetchSearch(keyword))
});

const Search = connect(null, mapDispatchToProps)(SearchBar);

export default Search;
