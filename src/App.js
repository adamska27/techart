import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';

import Header from './components/Header/index';
import HomePage from './containers/HomePage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Header />
            <Route exact path="/" component={HomePage} />
            <Route
              path="/game/:gameId"
              render={({ match }) => (
                <div>
                  <h1>{match.params.gameId}</h1>
                </div>
              )}
            />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
