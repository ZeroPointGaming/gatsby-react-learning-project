import styled from 'styled-components'

export const Wrapper = styled.div
`
    -moz-backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-transition: -moz-transform 0.5s ease;
    -webkit-transition: -webkit-transform 0.5s ease;
    -ms-transition: -ms-transform 0.5s ease;
    transition: transform 0.5s ease;
    padding-bottom: 1px;
`

export const Banner = styled.section
`
    background-attachment: scroll, scroll, scroll, fixed;
    background-color: #645862;
    background-image: url("images/light-bl.svg"), url("images/light-br.svg"), url("images/overlay.png"), url("../../images/tarkov-banner-tall.png");
    background-position: bottom left, bottom right, top left, top center;
    background-repeat: no-repeat, no-repeat, repeat, no-repeat;
    background-size: 25em, 25em, auto, cover;
    color: #fff;
    cursor: default;
    padding: 6em 0;
    text-align: center;
`

export const MainArticle = styled.article
`
    background-image: url("images/dark-tl.svg"), url("images/dark-tr.svg"), url("images/dark-bl.svg"), url("images/dark-br.svg");
    background-position: top left, top right, bottom left, bottom right;
    background-repeat: no-repeat;
    background-size: 25em;
    padding: 7em 0;
`

export const ContentSection = styled.section
`
    margin-bottom: 5em;
	padding: 5em;
    background: #fff;
	color: inherit;
    margin-left: auto;
    border:1px dashed grey;
	margin-right: auto;
`

export const MajorHeader = styled.header
`
    padding-bottom: 2em;
    text-align: center;
`

export const Level1Header = styled.h1
`
    color: inherit;
    font-weight: 300;
    line-height: 1.75em;
    margin-bottom: 1em;
    text-transform: uppercase;
`

export const Level2Header = styled.h2
`
    color: inherit;
    font-weight: 300;
    line-height: 1.75em;
    margin-bottom: 1em;
    text-transform: uppercase;
    font-size: 1.15em;
	letter-spacing: 0.025em;
    font-size: 1.5em;
	letter-spacing: 0.1em;
`

export const Level3Header = styled.h3
`
    color: inherit;
    font-weight: 300;
    line-height: 1.75em;
    margin-bottom: 1em;
    text-transform: uppercase;
    font-size: 1.15em;
    letter-spacing: 0.025em;
`

export const FeaturedImageLink = styled.a
`
    display: block;
    margin: 0px 0px 2em;
    position: relative;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    vertical-align: baseline;
    background-color: transparent;
    cursor: pointer;
`

export const FeaturedImage = styled.img
`
    display: block;
    width: 100%;
    vertical-align: middle;
    border: 0;
    cursor: pointer;
`

export const FeaturedImageCaption = styled.p
`
    text-decoration: none;
    color: black;
`