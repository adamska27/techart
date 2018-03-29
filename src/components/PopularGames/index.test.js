import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Component from './index';

describe('PopularGames', () => {
  const props = {
    fetchPopularGames: () => null,
    isFetching: false,
    PopularGames: [
      {
        id: 42,
        name: 'Attack of the sushi killers',
        popularity: 10000,
        cover: {
          url:
            'https://media.senscritique.com/media/000005659665/240/Dead_Sushi.png',
          cloudinary_id: 'ppppppppp',
          width: 394,
          height: 500
        }
      }
    ]
  };

  it('should return the loader', () => {
    expect(
      shallow(<Component isFetching={true} />).contains(<p>Loading</p>)
    ).toBe(true);
  });

  it('should match the snapshot', () => {
    const component = renderer.create(<Component {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
