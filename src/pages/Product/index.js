import React from 'react';

import Wraper from '../../HOC/Wraper';

class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.match.params.gameId}</h1>
        <p>Je suis le produit ....</p>
      </div>
    );
  }
}

export default Wraper(Product);
