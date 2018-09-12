import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

import Button from '../../components/common/Button';
import GameContainer from '../../containers/GameContainer';
import Ratings from '../../containers/Ratings';
import Title from '../../components/common/TitleSection';
import Wraper from '../../HOC/Wraper';

const ButtonContainer = styled.div`
  margin: 0 auto 48px auto;
  width: 200px;
`;

const ButtonStyled = styled(Button)`
  padding: 12px 6px;
`;

const RatingsContainer = styled.div`
  margin: 100px auto;
`;

const TitleStyled = styled(Title)`
  margin-top: 36px;
  text-align: center;
`;

class Game extends React.PureComponent {
  render() {
    const { fetched, match } = this.props;

    return (
      <React.Fragment>
        <GameContainer match={match} fetched={fetched} />
        <TitleStyled value="AVERAGE" />
        <RatingsContainer>
          <Ratings match={match} />
        </RatingsContainer>
        <Link to={`/reviews/product/${match.params.gameId}`}>
          <ButtonContainer>
            <ButtonStyled value="See reviews" />
          </ButtonContainer>
        </Link>
      </React.Fragment>
    );
  }
}

export default Wraper(Game);
