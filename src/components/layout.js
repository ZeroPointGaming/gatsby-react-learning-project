import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const NavigationMenu = styled.nav`
  display: flex;
  width: 100%;
  margin: auto;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background-color: rgb(55, 55, 55);
  color: white;
`

const NavigationLinks = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 10%;
`

const NavigationLink = styled.li`
  padding-right: 2rem;
`

const MainContainer = styled.div`
  margin: auto;
  max-width: 70%;
  font-family: sans-serif;
  padding-top: 3em;
`

const MainHeading = styled.h1`
  background-color: grey;
  padding-left: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
`

const NavLinkText = styled.a`
  color: white;
`

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query 
        {
          site 
          {
            siteMetadata 
            {
              title
            }
          }
        }
    `)

  return (
    <main>
      <NavigationMenu>
        <NavigationLinks>
          <NavigationLink><NavLinkText href="/">Home</NavLinkText></NavigationLink>
          <NavigationLink><NavLinkText href="/about">About</NavLinkText></NavigationLink>
          <NavigationLink><NavLinkText href="/blog">Blog</NavLinkText></NavigationLink>
        </NavigationLinks>
      </NavigationMenu>

      <MainContainer>
            {/*Page Title*/}
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            
            {/* Main Header */}
            <MainHeading>{pageTitle}</MainHeading>

            {/* Main Contnent Body */}
            {children}
      </MainContainer>
    </main>
  )
}

export default Layout