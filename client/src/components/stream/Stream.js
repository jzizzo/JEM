import React, { Component } from 'react'

class Stream extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { streamer } = this.props
    return (
      <div>
        <iframe
          src= { "http://player.twitch.tv/?channel=" + streamer + "&muted=true" }
          height="720"
          width="1280"
          frameborder="0"
          scrolling="no"
          allowfullscreen="true">
        </iframe>
      </div>
    )
  }
}

export default Stream;