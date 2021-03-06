import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import store from './store';
import { theme } from './styles/theme';

import HeaderContainer from './containers/Header';

import Collection from './pages/Collection';
import Game from './pages/Game';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import PagesNotFound from './pages/PagesNotFound';
import Profile from './pages/Profile';
import RatingsReviewForm from './pages/RatingsReviewForm';
import Review from './pages/Review';
import ReviewsAll from './pages/ReviewsAll';
import SearchResult from './pages/SearchResult';
import SignUp from './pages/SignUp';
import ScrollToTop from './components/ScrollToTop';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <ScrollToTop>
              <React.Fragment>
                <HeaderContainer />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/game/:gameId" component={Game} />
                  <Route path="/:gameId/rating" component={RatingsReviewForm} />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/login" component={LogIn} />
                  <Route path="/user/:id" component={Profile} />
                  <Route path="/collection" component={Collection} />
                  <Route
                    exact
                    path="/review/:productId/:reviewId"
                    component={Review}
                  />
                  <Route
                    path="/reviews/product/:productId"
                    component={ReviewsAll}
                  />
                  <Route path="/:keyword" component={SearchResult} />
                  <Route component={PagesNotFound} />
                </Switch>
              </React.Fragment>
            </ScrollToTop>
          </Router>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
