import decode from 'jwt-decode';
import idx from 'idx';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import getBetterCover from '../../utils/getBetterCover';
import { reviewType } from '../../PropTypes';

import LikeUnlikeReview from '../../containers/LikeUnlikeReview';
import Loader from '../common/Loader';
import TitleSection from '../common/TitleSection';

const Container = styled.div`
  padding: 48px;
`;

const Count = styled.div`
  padding: 24px;
  text-align: center;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const ImageContainer = styled.div`
  height: 350px;
  width: 100%;
`;

const TextContainer = styled.div`
  line-height: 2em;
`;

export default class Review extends React.PureComponent {
  static propTypes = {
    error: PropTypes.object,
    fetchReview: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    review: reviewType.isRequired,
    token: PropTypes.string
  };

  state = {
    likes_count: 0
  };

  fetchReview = async () => {
    const { match, fetchReview, token } = this.props;
    await fetchReview(match.params.productId, match.params.reviewId, token);
    this.setState({
      isLiked: this.props.review.isLiked,
      likes_count: this.props.review.likes_count
    });
  };

  componentDidMount() {
    this.fetchReview();
  }

  handleCountLikeUnlike = action => {
    const { isLiked } = this.state;
    if (action === 'isLiked' && !isLiked) {
      this.setState({
        isLiked: true,
        likes_count: Number(this.state.likes_count) + 1
      });
    }
    if (action === 'isUnliked' && isLiked) {
      this.setState({
        isLiked: false,
        likes_count: Number(this.state.likes_count) - 1
      });
    }
  };

  renderImage = url => {
    const cover = getBetterCover(url, /thumb/, '720p');
    return <Image src={cover} alt="screenshot" />;
  };

  renderReview = review => {
    return { __html: review };
  };

  render() {
    const { isFetching, review, token } = this.props;
    const { isLiked, likes_count } = this.state;
    const decodedToken = token ? decode(token) : null;
    const id = idx(decodedToken, _ => _.id);

    if (isFetching) {
      return <Loader />;
    }

    return (
      <React.Fragment>
        {review && Object.values(review).length ? (
          <React.Fragment>
            <ImageContainer>
              {this.renderImage(review.screenshots[0].url)}
            </ImageContainer>
            <Container>
              <TitleSection value={review.name} />
              <TextContainer>
                <div dangerouslySetInnerHTML={this.renderReview(review.body)} />
              </TextContainer>
              <Count>
                <p>{likes_count} likes</p>
              </Count>
              {token && id !== review.users_id ? (
                <LikeUnlikeReview
                  handleCountLikeUnlike={this.handleCountLikeUnlike}
                  isLiked={isLiked}
                  reviewId={review.review_id}
                />
              ) : null}
            </Container>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  }
}
