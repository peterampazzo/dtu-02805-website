import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import {
  FiChevronRight,
  FiChevronLeft,
  FiGithub,
  FiFileText,
  FiHardDrive,
} from "react-icons/fi"

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
        color: `#fff`,
        backgroundColor: `#3cb371`,
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
                borderTopColor: `#191414`,
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
        <footer
          style={{
            backgroundColor: `#191414`,
            display: `flex`,
            margin: `auto`,
            padding: `40px`,
            marginTop: `40px`,
            fontSize: "20px",
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <a href="https://github.com/andreas-kaae/socialgraphs2020_artists_collaborations_network">
            <FiGithub size={40} style={{ color: `#3cb371` }} />
          </a>
          <a href="https://dtudk.sharepoint.com/:f:/r/sites/SocialGraphs/Shared%20Documents/project-data?csf=1&web=1&e=GCJcyZ">
            <FiHardDrive
              size={40}
              style={{
                marginRight: `30px`,
                marginLeft: `30px`,
                color: `#3cb371`,
              }}
            />
          </a>
          <a href="https://nbviewer.jupyter.org/github/andreas-kaae/socialgraphs2020_artists_collaborations_network/blob/main/main_TheExplainerNotebook.ipynb">
            <FiFileText size={40} style={{ color: `#3cb371` }} />
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
