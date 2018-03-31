import { closeNavMobile, openNavMobile } from '../actions';

import { navMobile } from '../reducers';

describe('Header reducers', () => {
  const state = false;

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(navMobile(undefined, {})).toBe(expectedResult);
  });

  it('should handle Open_NAV_MOBILE action correctly', () => {
    const expectedResult = true;
    expect(navMobile(state, openNavMobile())).toBe(expectedResult);
  });

  it('should handle Close_NAV_MOBILE action correctly', () => {
    const expectedResult = false;
    expect(navMobile(state, closeNavMobile())).toBe(expectedResult);
  });
});
