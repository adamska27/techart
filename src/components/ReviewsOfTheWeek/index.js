import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import CardGame from '../CardGame';
import Loader from '../common/Loader';
import Title from '../common/TitleSection';
import UserIcon from '../UserIcon';

import getBetterCover from '../../utils/getBetterCover';
import media from '../../styles/media';
import { reviewsType } from '../../PropTypes';

const AvatarContainer = styled.div`
  display: inline-block;
  margin-top: 12px;
`;

const Body = styled.div`
  line-height: 28px;
  padding: 24px 60px;
  text-align: initial;

  ${media.phone`
    padding: 24px 12px;
  `};
`;

const Container = styled.div`
  padding: 24px 0;
  text-align: center;

  ${media.phone`
    padding: 0px;
  `};
`;

const ReadMore = styled.p`
  margin-bottom: 24px;

  &:hover {
    color: ${({ theme }) => theme.color.mainColor};
  }
`;

const ReviewContainer = styled.div`
  padding: 12px 0;

  &:not(:first-child):not(:last-child) {
    border-left: ${({ theme, reviewAllComponent }) =>
      reviewAllComponent
        ? 'solid transparent 1px'
        : `solid ${theme.color.mainColor} 1px`};
    border-right: ${({ theme, reviewAllComponent }) =>
      reviewAllComponent
        ? 'solid transparent 1px'
        : `solid ${theme.color.mainColor} 1px`};
    border-top: ${({ theme, reviewAllComponent }) =>
      reviewAllComponent
        ? `solid ${theme.color.mainColor} 1px`
        : 'solid transparent 1px'};
    border-bottom: ${({ theme, reviewAllComponent }) =>
      reviewAllComponent
        ? `solid ${theme.color.mainColor} 1px`
        : 'solid transparent 1px'};
  }

  ${media.desktop`
  &:not(:first-child):not(:last-child) {
    border-left: solid transparent 1px;
    border-right: solid transparent 1px;
    border-top: ${({ theme }) => `solid ${theme.color.mainColor} 1px`};
    border-bottom: ${({ theme }) => `solid ${theme.color.mainColor} 1px`};
  }
  `};
`;

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.reviewAllComponent ? 'column' : 'row')};
  justify-content: ${props => (props.reviewAllComponent ? 'center' : 'auto')};
  align-items: ${props => (props.reviewAllComponent ? 'center' : 'auto')};
  flex-wrap: ${props => (props.reviewAllComponent ? 'wrap' : 'nowrap')};
  padding: 0 6px;
  text-align: center;

  ${media.desktop`
    flex-wrap: wrap;
    margin: 0 auto;
  `};

  ${media.phone`
    width: 100%;
  `};
`;

export default class ReviewsOfTheWeek extends React.PureComponent {
  static propTypes = {
    error: PropTypes.object,
    fetchReviews: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    reviews: PropTypes.arrayOf(reviewsType).isRequired
  };

  fetchReviews = () => {
    const { fetchReviews, productId } = this.props;
    if (productId) {
      fetchReviews(productId);
    } else {
      fetchReviews();
    }
  };

  componentDidMount() {
    this.fetchReviews();
  }

  getCover = url => {
    return getBetterCover(url);
  };

  renderReview = body => {
    return { __html: body };
  };

  renderBody = body => {
    const limit = this.props.reviewAllComponent ? 500 : 300;
    const bodyTruncate = body.slice(0, limit);
    const withEllipsis = bodyTruncate + '...';
    return <Body dangerouslySetInnerHTML={this.renderReview(withEllipsis)} />;
  };

  renderHeaderCover = reviews => {
    return reviews && reviews.length ? (
      <div style={{ textAlign: 'center' }}>
        <img src={this.getCover(reviews[0].cover.url)} alt={`cover`} />
      </div>
    ) : null;
  };

  render() {
    const {
      isFetching,
      fromCollection,
      reviews,
      reviewAllComponent
    } = this.props;

    if (isFetching) return <Loader />;

    return (
      <Container>
        {fromCollection && reviews && reviews.length ? (
          <AvatarContainer>
            <UserIcon
              id={reviews[0].user_id}
              userName={reviews[0].userName}
              profilePicture={reviews[0].profilePicture}
            />
          </AvatarContainer>
        ) : reviewAllComponent ? (
          this.renderHeaderCover(reviews)
        ) : (
          <Title value="Reviews Of The Week" />
        )}
        <ReviewsContainer reviewAllComponent={reviewAllComponent}>
          {reviews && reviews.length ? (
            reviews.map(review => {
              const {
                id,
                body,
                cover,
                likes_count,
                name,
                product_id,
                profilePicture,
                user_id,
                userName
              } = review;
              const game = {
                id: product_id,
                cover,
                name
              };
              return (
                <ReviewContainer
                  key={id}
                  reviewAllComponent={reviewAllComponent}
                >
                  {reviewAllComponent ? null : (
                    <img src={this.getCover(cover.url)} alt={`cover`} />
                  )}
                  {this.renderBody(body)}
                  <Link to={`/review/${product_id}/${id}`}>
                    <ReadMore>Read more...</ReadMore>
                  </Link>
                  {likes_count ? <div>{likes_count} Likes</div> : null}
                  {fromCollection ? (
                    <CardGame game={game} />
                  ) : (
                    <AvatarContainer>
                      <UserIcon
                        id={user_id}
                        userName={userName}
                        profilePicture={profilePicture}
                      />
                    </AvatarContainer>
                  )}
                </ReviewContainer>
              );
            })
          ) : (
            <div>No reviews</div>
          )}
        </ReviewsContainer>
      </Container>
    );
  }
}
