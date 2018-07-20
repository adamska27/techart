import React from 'react';

import Loader from '../common/Loader';

export default class Collection extends React.PureComponent {
  componentDidMount() {
    const { fetchCollection, token } = this.props;
    fetchCollection(token);
  }
  render() {
    const { collection, isFetching } = this.props;
    if (isFetching) return <Loader />;
    return (
      <div>
        <div>Collection component</div>
        <ul>
          {collection && collection.length ? (
            collection.map(game => {
              return (
                <div key={game.name}>
                  <p>{game.name}</p>
                  <img
                    src={game.artworks ? `${game.artworks[0].url}` : null}
                    alt={`artworks_${game.name}`}
                  />
                </div>
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
