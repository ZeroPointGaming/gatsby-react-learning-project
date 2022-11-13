// Step 1: Import React
import * as React from 'react'
import { SoftwareImage, MaxSoftwareImage, Level3Header, SoftwareImageCaption, FeaturedImageLink } from './maincontrols.js'

const ColumnFullWidth = ({overflowImage, postImageHref, postImageSrc, postImageAlt, postHeader, postDescription }) => (
  <div className="12u 12u column-modifier">
    <FeaturedImageLink href={postImageHref}>
      {overflowImage ? <MaxSoftwareImage src={postImageSrc} alt={postImageAlt}/> : <SoftwareImage src={postImageSrc} alt={postImageAlt}/>}
    </FeaturedImageLink>
    <header><Level3Header>{postHeader}</Level3Header></header>
    <SoftwareImageCaption>{postDescription}</SoftwareImageCaption>
  </div>
)

export default ColumnFullWidth
