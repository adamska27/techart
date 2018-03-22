import React from 'react';
import { shallow } from 'enzyme';

import Component from './index';

describe('PopularGames', () => {
  it('should return the loader', () => {
    expect(
      shallow(<Component isFetching={true} />).contains(<p>Loading</p>)
    ).toBe(true);
  });
});
