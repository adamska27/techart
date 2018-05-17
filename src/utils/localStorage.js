// load previous state session from localstorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      // to not crash the app
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    // to not crash the app
    return undefined;
  }
};

// save sub state to the localstorage
export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // ignore errors
  }
};
