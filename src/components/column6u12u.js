// Step 1: Import React
import * as React from 'react'
import { FeaturedImage, Level3Header, FeaturedImageCaption, FeaturedImageLink } from './maincontrols.js'

const DualItemColumn = ({postImageHref, postImageSrc, postImageAlt, postHeader, postDescription, columnModifier }) => (
  <div className="6u 12u column-modifier">
    <FeaturedImageLink href={postImageHref}>
      <FeaturedImage src={postImageSrc} alt={postImageAlt} />
    </FeaturedImageLink>
    <header><Level3Header>{postHeader}</Level3Header></header>
    <FeaturedImageCaption>{postDescription}</FeaturedImageCaption>
  </div>
)

export default DualItemColumn