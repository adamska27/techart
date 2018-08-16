import {
  CLOSE_NAV_MOBILE,
  OPEN_NAV_MOBILE,
  LIGHT_THEME,
  DARK_THEME
} from './constants';

export const openNavMobile = () => ({ type: OPEN_NAV_MOBILE });

export const closeNavMobile = () => ({ type: CLOSE_NAV_MOBILE });

export const lightTheme = () => ({ type: LIGHT_THEME });

export const darkTheme = () => ({ type: DARK_THEME });
