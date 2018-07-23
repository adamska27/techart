import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 12px;
  text-align: center;
`;

const ImageStyled = styled.img`
  border-radius: 5%;
`;

const UserName = styled.div`
  color: ${({ theme }) => theme.color.mainColor};
  padding: 12px;
`;

export default class UserIcon extends React.PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    profilePicture: PropTypes.string.isRequired
  };

  render() {
    const { id, profilePicture, userName } = this.props;
    return (
      <Link to={`/user/${id}`}>
        <Container>
          <ImageStyled src={`${profilePicture}`} alt="picture_profile" />
          <UserName>{userName}</UserName>
        </Container>
      </Link>
    );
  }
}
