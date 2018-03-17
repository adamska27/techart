import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import HomePage from './containers/HomePage';

class App extends Component {
render() {
    return (
      <Provider store={store}>
        <div>
          <p>Hello world</p>
          <HomePage />
        </div>
      </Provider>
    );
  }
}

export default App;
