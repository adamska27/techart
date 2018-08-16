import {
  OPEN_NAV_MOBILE,
  CLOSE_NAV_MOBILE,
  LIGHT_THEME,
  DARK_THEME
} from './constants';

const initialState = {
  navMobile: false,
  theme: 'light'
};

export const global = (state = initialState, action) => {
  switch (action.type) {
  case OPEN_NAV_MOBILE:
    return { ...state, navMobile: true };
  case CLOSE_NAV_MOBILE:
    return { ...state, navMobile: false };
  case LIGHT_THEME:
    return { ...state, theme: 'light' };
  case DARK_THEME:
    return { ...state, theme: 'dark' };
  default:
    return state;
  }
};
