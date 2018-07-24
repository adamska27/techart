import React from 'react';

import ReviewContainer from '../../containers/Review';
import Wraper from '../../HOC/Wraper';

class Review extends React.PureComponent {
  render() {
    const { match } = this.props;
    return <ReviewContainer match={match} />;
  }
}

export default Wraper(Review);
