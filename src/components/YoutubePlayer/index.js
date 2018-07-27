import PropTypes from 'prop-types';
import React from 'react';
import reframe from 'reframe.js';

export default class YoutubePlayer extends React.PureComponent {
  static propTypes = {
    videoId: PropTypes.string.isRequired
  };

  componentDidMount() {
    this.init();
    reframe('iframe');
  }

  init() {
    // check youtube-api script
    var scripts = document.getElementsByTagName('script');
    const scriptsArr = Array.from(scripts);
    let checkScript = true;
    scriptsArr.map(script => {
      if (script.src === 'https://www.youtube.com/iframe_api') {
        return (checkScript = false);
      }
      return checkScript;
    });

    if (checkScript) {
      var tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }

  render() {
    const { videoId } = this.props;
    return (
      <div>
        <iframe
          className="iframe"
          frameBorder="0"
          height="360"
          id="player"
          src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://localhost:3000`}
          title="youtube-iframe"
          type="text/html"
          width="640"
        />
      </div>
    );
  }
}
