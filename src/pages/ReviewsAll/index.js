import React from 'react';

import ReviewsAllContainer from '../../containers/ReviewsAll';
import Wraper from '../../HOC/Wraper';

class ReviewsAll extends React.PureComponent {
  render() {
    const { match } = this.props;

    return <ReviewsAllContainer match={match} />;
  }
}

export default Wraper(ReviewsAll);
