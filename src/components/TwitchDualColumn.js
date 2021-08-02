// Step 1: Import React
import * as React from 'react'
import { CenteredImage } from './maincontrols'

const TwitchDualItemColumn = ({postImageSrc, postImageAlt, postDescription }) => (
  <div className="6u 12u column-modifier">
    <CenteredImage src={postImageSrc} alt={postImageAlt} />
    <p>{postDescription}</p>
  </div>
)

export default TwitchDualItemColumn