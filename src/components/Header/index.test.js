import React from 'react';
import { Link } from 'react-router-dom';

import { shallow } from 'enzyme';

import Component, { ContainerHeader } from './index';

// useless test just fro test
describe('Header', () => {
  it('should render without throwing error', () => {
    expect(
      shallow(<Component />).contains(
        <Link to="/">
          <li>Accueil</li>
        </Link>
      )
    ).toBe(true);
  });
});
