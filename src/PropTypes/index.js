import PropTypes from 'prop-types';

export const reviewType = PropTypes.shape({
  id: PropTypes.number,
  body: PropTypes.string
});

export const basicType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
});

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
  developers: PropTypes.arrayOf(basicType).isRequired,
  keywords: PropTypes.arrayOf(basicType).isRequired,
  themes: PropTypes.arrayOf(basicType).isRequired,
  platforms: PropTypes.arrayOf(basicType).isRequired,
  // need to precise shape expansions
  expansions: PropTypes.arrayOf(PropTypes.object),
  artworks: PropTypes.arrayOf(screenshotType).isRequired,
  videos: PropTypes.arrayOf(videoType).isRequired,
  publishers: PropTypes.arrayOf(basicType).isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired
});
