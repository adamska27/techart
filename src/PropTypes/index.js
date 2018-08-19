import PropTypes from 'prop-types';

export const basicType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
});

export const exceptionNumberType = PropTypes.number.isRequired;

export const videoType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  video_id: PropTypes.string.isRequired
});

export const releaseDatesType = PropTypes.shape({
  category: PropTypes.number,
  platform: PropTypes.number,
  date: PropTypes.number,
  region: PropTypes.number,
  human: PropTypes.string,
  y: PropTypes.number,
  m: PropTypes.number
});

export const screenshotType = PropTypes.shape({
  url: PropTypes.string,
  cloudinary: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
});

export const gameType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  screenshots: PropTypes.arrayOf(screenshotType).isRequired,
  storyline: PropTypes.string,
  release_dates: PropTypes.arrayOf(releaseDatesType),
  hypes: PropTypes.number,
  popularity: PropTypes.number,
  genres: PropTypes.arrayOf(basicType).isRequired,
  franchises: PropTypes.arrayOf(basicType),
  game_modes: PropTypes.arrayOf(basicType).isRequired,
  developers: PropTypes.arrayOf(
    PropTypes.oneOfType([basicType, exceptionNumberType])
  ).isRequired,
  keywords: PropTypes.arrayOf(basicType),
  themes: PropTypes.arrayOf(basicType).isRequired,
  platforms: PropTypes.arrayOf(basicType).isRequired,
  // need to precise shape expansions
  expansions: PropTypes.arrayOf(PropTypes.object),
  artworks: PropTypes.arrayOf(screenshotType),
  videos: PropTypes.arrayOf(videoType).isRequired,
  publishers: PropTypes.arrayOf(basicType).isRequired,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
});

export const profileType = PropTypes.shape({
  id: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  userName: PropTypes.string,
  profilePicture: PropTypes.string,
  adventure: PropTypes.number,
  action: PropTypes.number,
  horror: PropTypes.number,
  sport: PropTypes.number,
  auto: PropTypes.number,
  shooter: PropTypes.number,
  str: PropTypes.number,
  platform: PropTypes.number,
  versus: PropTypes.number,
  rpg: PropTypes.number
});

export const reviewType = PropTypes.shape({
  id: PropTypes.number,
  count: PropTypes.string,
  body: PropTypes.string,
  name: PropTypes.string,
  screenshots: PropTypes.arrayOf(screenshotType)
});

export const reviewsType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  product_id: PropTypes.number.isRequired,
  user_id: PropTypes.number.isRequired,
  likes_count: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired
});
