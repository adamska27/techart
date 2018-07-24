import React from 'react';

import Wraper from '../../HOC/Wraper';
import RatingsReviewFormContainer from '../../containers/RatingsReviewForm';

class RatingsReviewForm extends React.PureComponent {
  render() {
    return (
      <RatingsReviewFormContainer productId={this.props.match.params.gameId} />
    );
  }
}

export default Wraper(RatingsReviewForm);
