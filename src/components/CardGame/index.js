import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import getBetterCover from '../../utils/getBetterCover';

import PlaceHolderImage from '../common/PlaceHolderImage';
import TitleAside from '../common/TitleAside';

const Container = styled.div`
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px;
  margin: 24px auto;
  min-height: 369px;
  text-align: center;
  overflow: hidden;
  width: 227px;
  transition: 0.5s;

  &:hover {
    transform: translateY(-0.3rem);
  }
`;

const ImageContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const ImageStyled = styled.img`
  height: 320px;
  width: 228px;
  object-fit: cover;
`;

const TitleAsideStyled = styled(TitleAside)`
  padding: 6px;
`;

export default class CardGame extends React.PureComponent {
  static propTypes = {
    game: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      cover: PropTypes.shape({
        url: PropTypes.string,
        cloudinary_id: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number
      })
    })
  };

  render() {
    const { game } = this.props;
    const { id, cover, name } = game;
    return (
      <Link to={`/game/${id}`}>
        <Container>
          <ImageContainer>
            {cover ? (
              <ImageStyled
                src={
                  game.cover && getBetterCover(cover.url, /thumb/, 'cover_big')
                }
                alt="cover_game"
              />
            ) : (
              <PlaceHolderImage height={320} width={227} />
            )}
          </ImageContainer>
          <TitleAsideStyled value={name} />
        </Container>
      </Link>
    );
  }
}
