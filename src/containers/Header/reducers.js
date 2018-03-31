import { OPEN_NAV_MOBILE, CLOSE_NAV_MOBILE } from './constants';

export const navMobile = (state = false, action) => {
  switch (action.type) {
  case OPEN_NAV_MOBILE:
    return (state = true);
  case CLOSE_NAV_MOBILE:
    return (state = false);
  default:
    return state;
  }
};
