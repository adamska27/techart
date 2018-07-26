import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import rootReducer from './reducers';

import { loadState, saveState } from './utils/localStorage';

const persitedState = loadState();

// second argument is preloaded state and overide the initial state
let store = createStore(
  rootReducer,
  persitedState,
  composeWithDevTools(applyMiddleware(thunk))
);

// to get notify when account from the store state update
store.subscribe(
  // throttle able to not called saveState function every time the store update
  throttle(() => {
    saveState({
      account: store.getState().account,
      game: store.getState().game,
      search: store.getState().search
    });
  }, 1000)
);

export default store;
