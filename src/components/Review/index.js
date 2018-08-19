import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import getBetterCover from '../../utils/getBetterCover';
import { reviewType } from '../../PropTypes';

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

const TextContainer = styled.div``;

export default class Review extends React.PureComponent {
  static propTypes = {
    error: PropTypes.object,
    fetchReview: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    review: PropTypes.arrayOf(reviewType).isRequired
  };

  fetchReview = () => {
    const { match, fetchReview } = this.props;
    fetchReview(match.params.productId, match.params.reviewId);
  };

  componentDidMount() {
    this.fetchReview();
  }

  renderImage = url => {
    const cover = getBetterCover(url, /thumb/, '720p');
    return <Image src={cover} alt="screenshot" />;
  };

  renderReview = review => {
    return { __html: review };
  };

  render() {
    const { isFetching, review } = this.props;

    if (isFetching) {
      return <Loader />;
    }

    return (
      <React.Fragment>
        {review && review.length ? (
          <React.Fragment>
            <ImageContainer>
              {this.renderImage(review[0].screenshots[0].url)}
            </ImageContainer>
            <Container>
              <TextContainer>
                <TitleSection value={review[0].name} />
                <div
                  dangerouslySetInnerHTML={this.renderReview(review[0].body)}
                />
              </TextContainer>
              <Count>
                <p>{review[0].likes_count} likes</p>
              </Count>
            </Container>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  }
}
