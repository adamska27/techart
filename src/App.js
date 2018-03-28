import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import store from './store';
import { theme } from './styles/theme';

import Header from './components/Header/index';
import HomePage from './containers/HomePage';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={theme}>
            <React.Fragment>
              <Header />
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route
                  path="/game/:gameId"
                  render={({ match }) => (
                    <div>
                      <h1>{match.params.gameId}</h1>
                    </div>
                  )}
                />
                <Route component={NotFound} />
              </Switch>
            </React.Fragment>
          </ThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
