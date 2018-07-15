const getGradient = ({ theme }) => {
  const main = theme.color.mainColor;
  const side = theme.color.sideColor;
  return `linear-gradient(90deg,
  ${main} 0%,
  ${side} 100%)`;
};

export const theme = {
  color: {
    black: '#333',
    gradient: getGradient,
    mainColor: 'rgb(193, 11, 109)',
    mainColorTransparent: 'rgba(193, 11, 109, 0.3)',
    sideColor: 'rgb(164, 13, 196)',
    sideColorTransparent: 'rgb(164, 13, 196, 0.3)'
  }
};
