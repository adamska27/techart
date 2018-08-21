import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';

import media from '../../styles/media';

import Loader from '../../components/common/Loader';
import LatestUsers from '../../containers/LatestUsers';
import PopularGamesContainer from '../../containers/PopularGames';
import RecentGamesContainer from '../../containers/RecentGames';
import ReviewsOfTheWeek from '../../containers/ReviewsOfTheWeek';
import UserOfTheWeek from '../../containers/UserOfTheWeek';
import Wraper from '../../HOC/Wraper';

// need to get all the isFetching info to display or not the loader on the page
const mapStateToProps = state => ({
  isFetchingPopularGames: state.popularGames.isFetching,
  isFetchingRecentGames: state.recentGames.isFetching,
  isFetchingUserOfTheWeek: state.userOfTheWeek.isFetching,
  isFetchingLatestUsers: state.latestUsers.isFetching
});

const MainContainer = styled.div`
  /* background-color: #000;
  color: white; */
  padding: 24px;
`;

const SubContainer = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: 2fr 1fr;
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
    const {
      isFetchingLatestUsers,
      isFetchingPopularGames,
      isFetchingRecentGames,
      isFetchingUserOfTheWeek
    } = this.props;

    if (
      isFetchingLatestUsers ||
      isFetchingPopularGames ||
      isFetchingRecentGames ||
      isFetchingUserOfTheWeek
    ) {
      return <Loader />;
    }

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

export default Wraper(connect(mapStateToProps, null)(Home));
