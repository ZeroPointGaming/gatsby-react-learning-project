import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  navContainer,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <main>
      <div className={navContainer}>
        {/*Navigation Bar*/}
        <nav>
          <ul className={navLinks}>
            <li class={navLinkItem}>
              <Link to="/" class={navLinkText}>
                Home
              </Link>
            </li>
            <li class={navLinkItem}>
              <Link to="/about" class={navLinkText}>
                About
              </Link>
            </li>
            <li class={navLinkItem}>
              <Link to="/blog" class={navLinkText}>
                Blog
              </Link>
            </li>
            <li class={navLinkItem}>
              {/** You actually can't use Gatsby links to 
                link to GraphiQL. Gatsby links specifically look
                for pages that you've built with Gatsby, either in the pages
                directory or with the gatsby-node.js file.

                You could use a normal <a> tag, but I'd actually discourage you
                from doing this on a real project. GraphiQL is not included in 
                the final production bundle, so the link wouldn't go anywhere
                once the site is live. (And you wouldn't want it to)
               */}
              <Link to="/___graphql" class={navLinkText}>
                GraphiQL
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={container}>
        {/*Page Title*/}
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>

        {/* Main Header */}
        <h1>{pageTitle}</h1>

        {/* Main Contnent Body */}
        {children}
      </div>
    </main>
  )
}

export default Layout
