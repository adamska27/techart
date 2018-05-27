import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px 0;
`;

const ItemContainer = styled.li`
  display: flex;
`;

const TextContainer = styled.div`
  padding: 0 6px;
`;

const TextElement = styled.div`
  padding-bottom: 6px;
`;

export default class RecentGames extends React.Component {
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

  recentGamesItem = game => {
    return (
      <React.Fragment>
        <Link key={game.id} to={`/game/${game.id}`}>
          <div>
            <img src={game.cover ? game.cover.url : null} />
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
    const { isFetching, recentGames } = this.props;

    if (isFetching) {
      return <p>Loading</p>;
    }
    return (
      <Container>
        <ul>
          {recentGames &&
            recentGames.map(game => {
              return (
                <ItemContainer key={game.id}>
                  {this.recentGamesItem(game)}
                </ItemContainer>
              );
            })}
        </ul>
      </Container>
    );
  }
}
