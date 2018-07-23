import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import TitleAside from '../common/TitleAside';

const Container = styled.div`
  padding: 12px;
  text-align: center;
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
        <TitleAside value={`Derniers inscris: `} />
        {latestUsers &&
          latestUsers.length &&
          latestUsers.map(u => {
            return (
              <Link key={u.id} to={`/user/${u.id}`}>
                <div>
                  <img src={`${u.profilePicture}`} alt="profile_picture" />
                  <p>{u.userName}</p>
                </div>
              </Link>
            );
          })}
      </Container>
    );
  }
}
