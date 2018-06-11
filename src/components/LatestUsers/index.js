import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px black solid;
  padding: 12px;
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
        <h1>Derniers inscris: </h1>
        {latestUsers &&
          latestUsers.length &&
          latestUsers.map(u => {
            return (
              <div key={u.id}>
                <p>{u.userName}</p>
              </div>
            );
          })}
      </Container>
    );
  }
}
