const getGradient = ({ theme }) => {
  const main = theme.color.mainColor;
  const side = theme.color.sideColor;
  return `linear-gradient(90deg,
  ${main} 0%,
  ${side} 100%)`;
};

export const theme = {
  color: {
    backgroundLight: 'white',
    backgroundDark: '#141414',
    black: '#333',
    colorTextLight: 'black',
    colorTextDark: 'white',
    gradient: getGradient,
    mainColor: 'rgb(193, 11, 109)',
    mainColorTransparent: 'rgba(193, 11, 109, 0.3)',
    player1: 'rgb(0, 87, 152)',
    player1Transparent: 'rgba(0, 87, 152, 0.3)',
    player2: 'rgb(178, 0, 26)',
    player2Transparent: 'rgba(178, 0, 26, 0.3)',
    sideColor: 'rgb(164, 13, 196)',
    sideColorTransparent: 'rgb(164, 13, 196, 0.3)'
  }
};
