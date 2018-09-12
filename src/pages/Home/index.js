import React from 'react';
import styled from 'styled-components';

import media from '../../styles/media';

import LatestUsers from '../../containers/LatestUsers';
import PopularGamesContainer from '../../containers/PopularGames';
import RecentGamesContainer from '../../containers/RecentGames';
import ReviewsOfTheWeek from '../../containers/ReviewsOfTheWeek';
import UserOfTheWeek from '../../containers/UserOfTheWeek';
import Wraper from '../../HOC/Wraper';

const MainContainer = styled.div`
  /* background-color: #000;
  color: white; */
  padding: 24px;
`;

const SubContainer = styled.div`
  display: grid;
  grid-gap: 48px;
  grid-template-columns: 2fr min-content;
  padding: 48px 0;

  ${media.tablet`
    grid-template-columns: 100%;
    grid-template-rows: auto;
    padding: 12px 0;
  `};
`;

const UsersInfos = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
  max-height: 431px;

  ${media.tablet`
    display: block;
    width: 100%;
  `};
`;

class Home extends React.Component {
  render() {
    return (
      <MainContainer>
        <PopularGamesContainer />
        <ReviewsOfTheWeek />
        <SubContainer>
          <RecentGamesContainer />
          <UsersInfos>
            <UserOfTheWeek />
            <LatestUsers />
          </UsersInfos>
        </SubContainer>
      </MainContainer>
    );
  }
}

export default Wraper(Home);
