import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import PlaceHolder from '../common/PlaceHolderImage';

const Container = styled.div`
  height: 100px;
  margin: 0 auto;
  object-fit: contain;
  padding: 12px;
  text-align: center;
  width: 100px;
`;

const ImageStyled = styled.img`
  border-radius: 5%;
  height: 100%;
`;

const UserName = styled.div`
  color: ${({ theme }) => theme.color.mainColor};
  padding: 12px;
`;

export default class UserIcon extends React.PureComponent {
  static propTypes = {
    id: PropTypes.number,
    userName: PropTypes.string,
    profilePicture: PropTypes.string
  };

  render() {
    const { id, profilePicture, userName } = this.props;
    return (
      <Link to={`/user/${id}`}>
        <Container>
          {profilePicture ? (
            <ImageStyled src={`${profilePicture}`} alt="picture_profile" />
          ) : (
            <PlaceHolder height={100} width={100} />
          )}
          <UserName>{userName}</UserName>
        </Container>
      </Link>
    );
  }
}
