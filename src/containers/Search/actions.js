import { SEARCH_REQUEST, SEARCH_FAILED, SEARCH_SUCCESS } from './constants';

import fetchIgdbApi from '../../utils/fetchIgdbApi';

const searchRequest = () => ({
  type: SEARCH_REQUEST
});

const searchFailed = error => ({
  type: SEARCH_FAILED,
  error
});

const searchSuccess = result => ({
  type: SEARCH_SUCCESS,
  result
});

export const fetchSearch = keyword => async dispatch => {
  dispatch(searchRequest());
  const url = `https://api-2445582011268.apicast.io/games/?search=${keyword}&fields=id,name,cover&filter[version_parent][not_exists]=1`;

  await fetchIgdbApi(url)
    .then(res => res.json(), error => dispatch(searchFailed(error)))
    .then(result => dispatch(searchSuccess(result)));
};
