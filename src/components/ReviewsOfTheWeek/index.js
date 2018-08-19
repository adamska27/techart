import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Loader from '../common/Loader';
import Title from '../common/TitleSection';
import UserIcon from '../UserIcon';

import getBetterCover from '../../utils/getBetterCover';
import media from '../../styles/media';
import { reviewsType } from '../../PropTypes';

const AvatarContainer = styled.div`
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
  padding: 24px 12px;
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
    const { isFetching, reviews, reviewAllComponent } = this.props;

    if (isFetching) {
      return <Loader />;
    }

    return (
      <Container>
        {reviewAllComponent ? (
          this.renderHeaderCover(reviews)
        ) : (
          <Title value="Reviews Of The Week" />
        )}
        <ReviewsContainer reviewAllComponent={reviewAllComponent}>
          {reviews && reviews.length ? (
            reviews.map(review => {
              return (
                <ReviewContainer
                  key={review.id}
                  reviewAllComponent={reviewAllComponent}
                >
                  {reviewAllComponent ? null : (
                    <img src={this.getCover(review.cover.url)} alt={`cover`} />
                  )}
                  {this.renderBody(review.body)}
                  <Link to={`/review/${review.product_id}/${review.id}`}>
                    <ReadMore>Read more...</ReadMore>
                  </Link>
                  {review.likes_count ? (
                    <div>{review.likes_count} Likes</div>
                  ) : null}
                  <AvatarContainer>
                    <UserIcon
                      id={review.user_id}
                      userName={review.userName}
                      profilePicture={review.profilePicture}
                    />
                  </AvatarContainer>
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
