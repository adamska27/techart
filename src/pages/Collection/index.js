import React from 'react';

import CollectionContainer from '../../containers/Collection';
import Wraper from '../../HOC/Wraper';

class Collection extends React.PureComponent {
  render() {
    return <CollectionContainer />;
  }
}

export default Wraper(Collection);
