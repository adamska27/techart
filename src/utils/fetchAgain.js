export default (lastFetch = 0, limit = 600000) => {
  // return true for the the first fetch or if has done 10min since the last fetch
  const fetchAgain = !lastFetch || Date.now() - lastFetch > limit;
  return fetchAgain;
};
