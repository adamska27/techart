import idx from 'idx';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Error from '../common/Error';
import TitleAside from '../common/TitleAside';
import UserIcon from '../UserIcon';

const Container = styled.div`
  padding: 12px;
`;

const Title = styled(TitleAside)`
  text-align: center;
`;

export default class UserOfTheWeek extends React.Component {
  static propTypes = {
    fetchUserOfTheWeek: PropTypes.func,
    userOfTheWeek: PropTypes.shape({
      id: PropTypes.number,
      profilePicture: PropTypes.string,
      userName: PropTypes.string
    })
  };

  static defaultProps = {
    fetchUserOfTheWeek: () => null,
    userOfTheWeek: {}
  };

  componentDidMount() {
    this.fetchUserOfTheWeek();
  }

  fetchUserOfTheWeek = () => {
    this.props.fetchUserOfTheWeek();
  };

  render() {
    const { userOfTheWeek } = this.props;
    const id = idx(userOfTheWeek, _ => _.id);
    const userName = idx(userOfTheWeek, _ => _.userName);
    const profilePicture = idx(userOfTheWeek, _ => _.profilePicture);

    return (
      <Container>
        <Title value={`User Of The Week`} />
        {userOfTheWeek && id ? (
          <UserIcon
            id={id}
            profilePicture={profilePicture}
            userName={userName}
          />
        ) : (
          <Error />
        )}
      </Container>
    );
  }
}
