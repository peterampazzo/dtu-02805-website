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
                borderTopColor: `#2a9d8f`,
                borderTopWidth: `2px`,
                borderTopStyle: `solid`,
                padding: `20px`,
                display: `flex`,
                justifyContent: `space-between`,
              }}
            >
              {nav.prev ? (
                <Link
                  to={nav.prev.link}
                  style={{
                    fontFamily: `Amaranth`,
                    fontSize: `20px`,
                    fontWeight: 500,
                    textDecoration: `none`,
                    display: `flex`,
                    alignItems: `center`,
                    color: `#e76f51`,
                  }}
                >
                  <FiChevronLeft style={{ marginRight: `10px` }} />
                  {nav.prev.title}
                </Link>
              ) : (
                <span></span>
              )}
              {nav.next ? (
                <Link
                  to={nav.next.link}
                  style={{
                    fontFamily: `Amaranth`,
                    fontSize: `20px`,
                    fontWeight: 500,
                    textDecoration: `none`,
                    display: `flex`,
                    alignItems: `center`,
                    color: `#e76f51`,
                  }}
                >
                  {nav.next.title}
                  <FiChevronRight style={{ marginLeft: `10px` }} />
                </Link>
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
