// Step 1: Import React
import * as React from 'react'
import { FeaturedImage, Level3Header, FeaturedImageCaption, FeaturedImageLink } from './maincontrols.js'

const Column6u12u = ({postImageHref, postImageSrc, postImageAlt, postHeader, postDescription }) => {
  return (
    <div className='6u 12u(narrower)'>
        <FeaturedImageLink href={postImageHref}>
            <FeaturedImage src={postImageSrc} alt={postImageAlt}/>
        </FeaturedImageLink>
        <header><Level3Header>{postHeader}</Level3Header></header>
        <FeaturedImageCaption>{postDescription}</FeaturedImageCaption>
    </div>
  )
}

export default Column6u12u