import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import media from '../../styles/media';

import Button from '../common/Button';
import TitleSection from '../common/TitleSection';
import PlaceHolder from '../common/PlaceHolderImage';

const HeightPlaceHolder = 90;
const WidthPlaceHolder = 90;

const ButtonStyled = styled(Button)`
  padding: 12px 6px;
`;

const Container = styled.div`
  padding: 20px 0;

  ${media.tablet`
    padding: 0;
  `};
`;

const ItemContainer = styled.li`
  border-radius: 3px;
  box-shadow: ${({ theme }) => `0px 0px 5px 1px rgba(0,0,0,0.1)`};
  display: flex;
  margin: 12px 0;
`;

const TextContainer = styled.div`
  padding: 12px 6px;
`;

const TextElement = styled.div`
  padding-bottom: 6px;

  &:first-child {
    color: ${({ theme }) => theme.color.sideColor};
  }
`;

const DEFAULT_LIMIT = 3;

export default class RecentGames extends React.Component {
  state = {
    // default show only 4 items
    limit: DEFAULT_LIMIT
  };

  static propTypes = {
    fetchRecentGames: PropTypes.func,
    recentGames: PropTypes.array
  };

  static defaultProps = {
    fetchRecentGames: () => null,
    recentGames: []
  };

  componentDidMount() {
    this.props.fetchRecentGames();
  }

  changeLimit = limit => {
    const newLimit = limit === 3 ? 10 : 3;
    this.setState({ limit: newLimit });
  };

  recentGamesItem = game => {
    return (
      <React.Fragment>
        <Link key={game.id} to={`/game/${game.id}`}>
          <div>
            {game.cover ? (
              <img src={game.cover ? game.cover.url : null} alt={game.name} />
            ) : (
              <PlaceHolder
                height={HeightPlaceHolder}
                width={WidthPlaceHolder}
              />
            )}
          </div>
        </Link>
        <TextContainer>
          <Link key={game.id} to={`/game/${game.id}`}>
            <TextElement>
              <p>{game.name}</p>
            </TextElement>
          </Link>
          <TextElement>
            <p>{game.summary ? `${game.summary.substr(0, 100)}...` : null}</p>
          </TextElement>
        </TextContainer>
      </React.Fragment>
    );
  };

  render() {
    const { limit } = this.state;
    const { recentGames } = this.props;

    return (
      <Container>
        <TitleSection value="Recently Released" />
        <ul>
          {recentGames && recentGames.length ? (
            recentGames.map((game, i) => {
              if (i > limit) {
                return null;
              }
              return (
                <ItemContainer key={game.id}>
                  {this.recentGamesItem(game)}
                </ItemContainer>
              );
            })
          ) : (
            <div>A problem occurs</div>
          )}
        </ul>
        <div onClick={() => this.changeLimit(limit)}>
          {limit === DEFAULT_LIMIT ? (
            <ButtonStyled value="Voir plus" />
          ) : (
            <ButtonStyled value="Voir moins" />
          )}
        </div>
      </Container>
    );
  }
}
