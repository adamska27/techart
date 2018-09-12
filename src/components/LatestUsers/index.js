import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import media from '../../styles/media';

import TitleAside from '../common/TitleAside';
import UserIcon from '../UserIcon';

const Container = styled.div`
  padding: 12px;
  text-align: center;
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow-x: scroll;
  width: 350px;

  ${media.tablet`
    width: 100%
  `};
`;

export default class LatestUser extends React.Component {
  static propTypes = {
    fetchLatestUsers: PropTypes.func,
    latestUsers: PropTypes.array
  };

  static defaultProps = {
    fetchLatestUsers: () => null,
    latestUsers: []
  };

  componentDidMount() {
    this.fetchLatestUsers();
  }

  fetchLatestUsers = () => {
    this.props.fetchLatestUsers();
  };

  render() {
    const { latestUsers } = this.props;
    return (
      <Container>
        <TitleAside value={`Last Registered`} />
        <UserContainer>
          {latestUsers &&
            latestUsers.length &&
            latestUsers.map(u => {
              return (
                <UserIcon
                  id={u.id}
                  key={u.id}
                  profilePicture={u.profilePicture}
                  userName={u.userName}
                />
              );
            })}
        </UserContainer>
      </Container>
    );
  }
}
