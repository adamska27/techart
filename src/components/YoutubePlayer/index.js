import PropTypes from 'prop-types';
import React from 'react';
import reframe from 'reframe.js';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
`;

export default class YoutubePlayer extends React.PureComponent {
  static propTypes = {
    videoId: PropTypes.string.isRequired
  };

  componentDidMount() {
    reframe('iframe');
  }

  render() {
    const { videoId } = this.props;
    return (
      <Container>
        <iframe
          className="iframe"
          frameBorder="0"
          height="360"
          id="player"
          src={`http://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&origin=http://localhost:3000`}
          title="youtube-iframe"
          type="text/html"
          width="640"
        />
      </Container>
    );
  }
}
