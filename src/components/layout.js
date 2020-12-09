import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import { FiChevronRight, FiChevronLeft } from "react-icons/fi"

import Header from "./header"
import Hero from "./hero"

const Layout = ({ children, title, sub, nav }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const NavLink = ({ to, start = true, children }) => (
    <Link
      to={to}
      style={{
        width: `200px`,
        fontSize: `20px`,
        fontWeight: 500,
        textDecoration: `none`,
        display: `flex`,
        justifyContent: start ? `flex-start` : `flex-end`,
        alignItems: `center`,
        color: `#1bd954`,
        backgroundColor: `#191414`,
        padding: `10px`,
        borderRadius: `15px`,
        boxShadow: `-10px 10px 60px rgba(0,0,0,.4)`,
      }}
    >
      {children}
    </Link>
  )

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title} />
      <div
        style={{
          marginTop: `4rem`,
        }}
      >
        <Hero title={title} sub={sub} />
        <main
          style={{
            maxWidth: 980,
            margin: `auto`,
            padding: `0 1.0875rem 1.45rem`,
            marginTop: `40px`,
            fontSize: "20px",
          }}
        >
          {children}
          {nav && (
            <div
              style={{
                marginTop: `20px`,
                borderTopColor: `#1bd954`,
                borderTopWidth: `3px`,
                borderTopStyle: `solid`,
                padding: `20px`,
                display: `flex`,
                justifyContent: `space-between`,
              }}
            >
              {nav.prev ? (
                <NavLink to={nav.prev.link}>
                  <FiChevronLeft style={{ marginRight: `10px` }} size={40} />
                  {nav.prev.title}
                </NavLink>
              ) : (
                <span></span>
              )}
              {nav.next ? (
                <NavLink to={nav.next.link} start={false}>
                  {nav.next.title}
                  <FiChevronRight style={{ marginLeft: `10px` }} size={60} />
                </NavLink>
              ) : (
                <span></span>
              )}
            </div>
          )}
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
