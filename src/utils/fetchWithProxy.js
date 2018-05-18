const fetchWithProxy = (url, options) => {
  // use a proxy cause of restrictions API
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  return fetch(`${proxyUrl}${url}`, {
    headers: {
      'user-key': '08abe503480077a9ef8fd365441dae0e'
    },
    ...options
  });
};

export default fetchWithProxy;
