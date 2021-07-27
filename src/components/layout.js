import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { container, heading, navLinks, navLinkItem, navLinkText, navContainer } from './layout.module.css'

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
                    <li class={navLinkItem}><Link to="/" class={navLinkText}>Home</Link></li>
                    <li class={navLinkItem}><Link to="/about" class={navLinkText}>About</Link></li>
                    <li class={navLinkItem}><Link to="/blog" class={navLinkText}>Blog</Link></li>
                </ul>
            </nav>
      </div>

      <div className={container}>
            {/*Page Title*/}
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            
            {/* Main Header */}
            <h1 className={heading}>{pageTitle}</h1>

            {/* Main Contnent Body */}
            {children}
      </div>
    </main>
  )
}

export default Layout