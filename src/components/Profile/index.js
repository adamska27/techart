import decode from 'jwt-decode';
import idx from 'idx';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Loader from '../common/Loader';
import GamerProfile from '../GamerProfile';

import media from '../../styles/media';
import { profileType } from '../../PropTypes';
import versusLogo from '../../static/versus.png';

const Avatar = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const AvatarsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.tablet`
    flex-direction: column;
    align-items: center;
  `};
`;

const Container = styled.div`
  padding: 48px 24px;
`;

const ImageContainer = styled.div`
  border-style: solid;
  border-color: ${props =>
    props.second ? props.theme.color.player2 : props.theme.color.player1};
  border-width: 4px;
  display: inline-block;
  height: 140px;
`;

const ImageStyled = styled.img`
  height: 100%;
  width: 100%;
`;

const InfosContainer = styled.div`
  padding: 12px;
`;

const InfosList = styled.ul``;

const Infos = styled.li`
  text-align: center;
`;

const GamerProfileContainer = styled.div`
  margin: 48px auto;

  ${media.tablet`
    margin: 0 auto;
  `};
`;

const VersusImage = styled.img`
  height: 150px;
  margin: 12px auto;
`;

export default class Profile extends React.PureComponent {
  static propTypes = {
    isFetchingUserProfile: PropTypes.bool.isRequired,
    isFetchingMyProfile: PropTypes.bool.isRequired,
    myInfos: profileType,
    userInfos: profileType,
    token: PropTypes.string
  };

  fetchProfile = () => {
    const { fetchMyProfile, fetchUserProfile, token } = this.props;
    if (token) {
      const decodedToken = token ? decode(token) : null;
      const id = idx(decodedToken, _ => _.id);
      if (id !== Number(this.props.match.params.id)) {
        fetchMyProfile(token);
      }
    }
    fetchUserProfile(this.props.match.params.id);
  };

  componentDidMount() {
    this.fetchProfile();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchProfile();
    }
  }

  render() {
    const {
      myInfos,
      userInfos,
      isFetchingMyProfile,
      isFetchingUserProfile
    } = this.props;

    const {
      id,
      firstName,
      lastName,
      userName,
      profilePicture,
      adventure,
      action,
      horror,
      sport,
      auto,
      shooter,
      str,
      platform,
      versus,
      rpg
    } = userInfos;

    const {
      id: id2,
      firstName: firstName2,
      lastName: lastName2,
      userName: userName2,
      profilePicture: profilePicture2,
      adventure: adventure2,
      action: action2,
      horror: horror2,
      sport: sport2,
      auto: auto2,
      shooter: shooter2,
      str: str2,
      platform: platform2,
      versus: versus2,
      rpg: rpg2
    } = myInfos;

    if (isFetchingUserProfile || isFetchingMyProfile) return <Loader />;
    return (
      <Container>
        <AvatarsContainer>
          <Avatar>
            <ImageContainer>
              <ImageStyled src={`${profilePicture}`} alt="profile" />
            </ImageContainer>
            <InfosContainer>
              <InfosList>
                <Infos>{userName}</Infos>
              </InfosList>
            </InfosContainer>
          </Avatar>
          {id2 !== id && Object.values(myInfos).length ? (
            <React.Fragment>
              <VersusImage src={versusLogo} alt="versus_logo" />
              <Avatar>
                <ImageContainer second>
                  <ImageStyled src={`${profilePicture2}`} alt="profile" />
                </ImageContainer>
                <InfosContainer>
                  <InfosList>
                    <Infos>{userName2}</Infos>
                  </InfosList>
                </InfosContainer>
              </Avatar>
            </React.Fragment>
          ) : null}
        </AvatarsContainer>
        <GamerProfileContainer>
          <GamerProfile
            player1={userName}
            player2={userName2}
            userGamerProfile={[
              adventure,
              action,
              horror,
              sport,
              auto,
              shooter,
              str,
              platform,
              versus,
              rpg
            ]}
            userGamerProfile2={[
              adventure2,
              action2,
              horror2,
              sport2,
              auto2,
              shooter2,
              str2,
              platform2,
              versus2,
              rpg2
            ]}
          />
        </GamerProfileContainer>
      </Container>
    );
  }
}
