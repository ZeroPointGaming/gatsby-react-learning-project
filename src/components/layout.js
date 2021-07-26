import * as React from 'react'
import { Link } from 'gatsby'
import { container, heading, navLinks, navLinkItem, navLinkText } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      {/*Page Title*/}
      <title>{pageTitle}</title>
      
      {/*Navigation Bar*/}
      <nav>
        <ul className={navLinks}>
          <li class={navLinkItem}><Link to="/" class={navLinkText}>Home</Link></li>
          <li class={navLinkItem}><Link to="/about" class={navLinkText}>About</Link></li>
        </ul>
      </nav>

      {/* Main Header */}
      <h1 className={heading}>{pageTitle}</h1>

      {/* Main Contnent Body */}
      {children}
    </main>
  )
}

export default Layout