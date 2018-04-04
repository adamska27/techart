import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import store from './store';
import { theme } from './styles/theme';

import NotFound from './components/NotFound';

import HeaderContainer from './containers/Header';

import Home from './pages/Home';
import Product from './pages/Product';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <React.Fragment>
              <HeaderContainer />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/game/:gameId" component={Product} />
                <Route component={NotFound} />
              </Switch>
            </React.Fragment>
          </Router>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
