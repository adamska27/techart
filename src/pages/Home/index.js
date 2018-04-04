import React from 'react';

import Wraper from '../../HOC/Wraper';

import PopularGamesContainer from '../../containers/PopularGames';

class Home extends React.Component {
  render() {
    return (
      <div>
        <PopularGamesContainer />
        <div
          style={{
            height: '100px',
            width: '100%',
            border: '1px solid black'
          }}
        >
          Autre contenu
        </div>
        <div
          style={{
            height: '100px',
            width: '100%',
            border: '1px solid black'
          }}
        >
          Autre contenu
        </div>
        <div
          style={{
            height: '100px',
            width: '100%',
            border: '1px solid black'
          }}
        >
          Autre contenu
        </div>
        <div
          style={{
            height: '100px',
            width: '100%',
            border: '1px solid black'
          }}
        >
          Autre contenu
        </div>
      </div>
    );
  }
}

export default Wraper(Home);
