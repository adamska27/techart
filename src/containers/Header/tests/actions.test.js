import { CLOSE_NAV_MOBILE, OPEN_NAV_MOBILE } from '../constants';

import { closeNavMobile, openNavMobile } from '../actions';

describe('Header actions', () => {
  it('should return the correct type', () => {
    const expectedResult = { type: OPEN_NAV_MOBILE };
    const expectedResult2 = { type: CLOSE_NAV_MOBILE };

    expect(openNavMobile()).toEqual(expectedResult);
    expect(closeNavMobile()).toEqual(expectedResult2);
  });
});
