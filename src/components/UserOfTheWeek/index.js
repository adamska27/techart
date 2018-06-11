import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px black solid;
  padding: 12px;
`;

export default class UserOfTheWeek extends React.Component {
  static propTypes = {
    fetchUserOfTheWeek: PropTypes.func,
    userOfTheWeek: PropTypes.array
  };

  static defaultProps = {
    fetchUserOfTheWeek: () => null,
    userOfTheWeek: []
  };

  componentDidMount() {
    this.fetchUserOfTheWeek();
  }

  fetchUserOfTheWeek = () => {
    this.props.fetchUserOfTheWeek();
  };

  render() {
    const { userOfTheWeek } = this.props;
    return (
      <Container>
        <h1>User of the week</h1>
        {userOfTheWeek &&
          userOfTheWeek[0] && <div>{userOfTheWeek[0].userName}</div>}
      </Container>
    );
  }
}
