import React from 'react';

import Wraper from '../../HOC/Wraper';
import Ratings from '../../containers/RatingsFormContainer';

class RatingsForm extends React.PureComponent {
  render() {
    return <Ratings productId={this.props.match.params.gameId} />;
  }
}

export default Wraper(RatingsForm);
