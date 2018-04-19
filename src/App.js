import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import store from './store';
import { theme } from './styles/theme';

import HeaderContainer from './containers/Header';

import Home from './pages/Home';
import Product from './pages/Product';
import PagesNotFound from './pages/PagesNotFound';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

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
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={LogIn} />
                <Route component={PagesNotFound} />
              </Switch>
            </React.Fragment>
          </Router>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
