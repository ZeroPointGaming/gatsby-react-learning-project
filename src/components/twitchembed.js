// Step 1: Import React
import * as React from 'react'
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

export const TwitchChannelEmbed = ({inputChannel}) => (
  <div className="12u 12u column-modifier">
    <ReactTwitchEmbedVideo channel={inputChannel}/>
  </div>
)

export default TwitchChannelEmbed
