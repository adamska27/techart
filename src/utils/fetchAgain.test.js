import fetchAgain from './fetchAgain.js';

describe('fetchAgain', () => {
  it('should return true if it is the first fetch', () => {
    // lastFetch refer to the time since last fetch
    // default value for the last fetch it's 0
    const lastFetch = 0;
    expect(fetchAgain(lastFetch)).toBe(true);
  });

  it('should return false if it is not the first fetch and if the time since the last fetch is inferior to the limit', () => {
    const lastFetch = Date.now() + 1000;
    expect(fetchAgain(lastFetch, 10000)).toBe(false);
  });

  it('should return true if it is not the first fetch and if the time since the last fetch is superior to the limit', () => {
    const lastFetch = Date.now() + 600000;
    expect(fetchAgain(lastFetch, 100000)).toBe(true);
  });
});
