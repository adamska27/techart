import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { reviewType } from '../../PropTypes';

import Button from '../../components/common/Button';
import Loader from '../common/Loader';

const ButtonContainer = styled.div`
  margin: 0 auto;
  width: 200px;
`;

const ButtonStyled = styled(Button)`
  padding: 12px 6px;
`;

export default class ReviewsAll extends React.PureComponent {
  static propTypes = {
    error: PropTypes.object,
    isFetching: PropTypes.bool,
    reviews: PropTypes.arrayOf(reviewType).isRequired
  };

  componentDidMount() {
    const { fetchReviews, match } = this.props;
    fetchReviews(match.params.productId);
  }

  renderReviews = reviews => {
    return { __html: reviews };
  };

  render() {
    const { isFetching, match, reviews } = this.props;

    if (isFetching) {
      return <Loader />;
    }

    return (
      <React.Fragment>
        {reviews && reviews.length ? (
          reviews.map(review => {
            return (
              <div key={review.id}>
                <div
                  dangerouslySetInnerHTML={this.renderReviews(review.body)}
                />
                <Link to={`/review/${review.id}`}>
                  <ButtonContainer>
                    <ButtonStyled value="Voir plus" />
                  </ButtonContainer>
                </Link>
              </div>
            );
          })
        ) : (
          <div>
            <p>
              Il n'y a pas encore de critique pour ce jeu, soyez le premier à le
              critiquer
            </p>
            <Link to={`/${match.params.productId}/rating`}>
              <ButtonContainer>
                <ButtonStyled value="évaluer" />
              </ButtonContainer>
            </Link>
          </div>
        )}
      </React.Fragment>
    );
  }
}
