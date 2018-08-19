import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

import Button from '../../components/common/Button';
import GameContainer from '../../containers/GameContainer';
import Ratings from '../../containers/Ratings';
import Wraper from '../../HOC/Wraper';

const ButtonContainer = styled.div`
  margin: 0 auto;
  width: 200px;
`;

const ButtonStyled = styled(Button)`
  padding: 12px 6px;
`;

class Game extends React.PureComponent {
  render() {
    const { fetched, match } = this.props;

    return (
      <React.Fragment>
        <GameContainer match={match} fetched={fetched} />
        <Ratings match={match} />
        <Link to={`/reviews/product/${match.params.gameId}`}>
          <ButtonContainer>
            <ButtonStyled value="Voir les critiques" />
          </ButtonContainer>
        </Link>
      </React.Fragment>
    );
  }
}

export default Wraper(Game);
