import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import getBetterCover from '../../utils/getBetterCover';
import { reviewType } from '../../PropTypes';

import Loader from '../common/Loader';
import TitleSection from '../common/TitleSection';

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const ImageContainer = styled.div`
  height: 200px;
  width: 100%;
`;

const TextContainer = styled.div`
  padding: 48px;
`;

export default class Review extends React.PureComponent {
  static propTypes = {
    error: PropTypes.object,
    fetchReview: PropTypes.func.isRequired,
    review: reviewType.isRequired
  };

  componentDidMount() {
    const { match, fetchReview } = this.props;
    fetchReview(match.params.id);
  }

  renderImage = url => {
    const cover = getBetterCover(url, /thumb/, '720p');
    return <Image src={cover} alt="screenshot" />;
  };

  renderReview = review => {
    return { __html: review };
  };

  render() {
    const { isFetching, review, game } = this.props;
    const check = !!Object.values(review).length;

    if (isFetching) {
      return <Loader />;
    }

    return (
      <div>
        {check ? (
          <React.Fragment>
            <ImageContainer>
              {this.renderImage(game[0].screenshots[0].url)}
            </ImageContainer>
            <TextContainer>
              <TitleSection value={game[0].name} />
              <div dangerouslySetInnerHTML={this.renderReview(review.body)} />
            </TextContainer>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}
