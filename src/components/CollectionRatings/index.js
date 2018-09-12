import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import media from '../../styles/media';

import Loader from '../common/Loader';
import RadarChart from '../RadarChart';
import CardGame from '../CardGame';

const Container = styled.div`
  align-items: center;
  display: flex;
  margin: 60px auto;

  ${media.tablet`
    flex-wrap: wrap;
    justify-content: center;
  `};
`;

export default class CollectionRatings extends React.PureComponent {
  static = {
    collection: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    token: PropTypes.string.isRequired
  };

  componentDidMount() {
    const { fetchCollection, token } = this.props;
    fetchCollection(token);
  }

  render() {
    const { collection, isFetching } = this.props;

    if (isFetching) return <Loader />;

    return (
      <div>
        <ul>
          {collection && collection.length ? (
            collection.map(elem => {
              const game = {
                id: elem.product_id,
                name: elem.name,
                cover: elem.cover
              };
              const userRatings = [
                elem.story,
                elem.feeling,
                elem.levelDesign,
                elem.artDesign,
                elem.originality,
                elem.soundDesign,
                elem.textures,
                elem.framerate,
                elem.physics,
                elem.lighting
              ];
              return (
                <Container key={elem.product_id}>
                  <CardGame game={game} />
                  <RadarChart collection userRatings={userRatings} />
                </Container>
              );
            })
          ) : (
            <div>La collection est vide</div>
          )}
        </ul>
      </div>
    );
  }
}
