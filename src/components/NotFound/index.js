import React from 'react';

export default class NotFound extends React.PureComponent {
  render() {
    const { pathname } = this.props.location;
    return (
      <div>
        <h2>La page {pathname} n'existe pas ! :(</h2>
      </div>
    );
  }
}
