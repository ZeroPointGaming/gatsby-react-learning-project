// Step 1: Import React
import * as React from 'react'
import { FeaturedImage, Level3Header, FeaturedImageCaption, FeaturedImageLink } from './maincontrols.js'

const ColumnFullWidth = ({postImageHref, postImageSrc, postImageAlt, postHeader, postDescription }) => (
  <div className="12u 12u column-modifier">
    <FeaturedImageLink href={postImageHref}>
      <FeaturedImage src={postImageSrc} alt={postImageAlt} />
    </FeaturedImageLink>
    <header><Level3Header>{postHeader}</Level3Header></header>
    <FeaturedImageCaption>{postDescription}</FeaturedImageCaption>
  </div>
)

export default ColumnFullWidth
