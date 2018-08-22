import React from 'react';
import styled from 'styled-components';

import Button from '../common/Button';

const ButtonContainer = styled.div`
  margin: 48px auto;
  width: 150px;
`;

const StyledButton = styled(Button)`
  padding: 12px 6px;
`;

export default class LikeReview extends React.PureComponent {
  onLikeUnlike = async () => {
    const {
      likeReview,
      handleCountLikeUnlike,
      reviewId,
      token,
      unlikeReview
    } = this.props;
    const { isLiked } = this.props;
    if (isLiked) {
      unlikeReview(token, reviewId);
      handleCountLikeUnlike('isUnliked');
    } else {
      likeReview(token, reviewId);
      handleCountLikeUnlike('isLiked');
    }
  };

  render() {
    const { isLiked } = this.props;
    return (
      <React.Fragment>
        {isLiked ? (
          <ButtonContainer>
            <StyledButton onClick={this.onLikeUnlike} value="Unlike" />
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <StyledButton onClick={this.onLikeUnlike} value="Like" />
          </ButtonContainer>
        )}
      </React.Fragment>
    );
  }
}
