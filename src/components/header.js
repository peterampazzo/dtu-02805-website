import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import { FiMenu, FiX, FiMusic } from "react-icons/fi"

const Header = ({ siteTitle }) => {
  const [menu, setMenu] = useState(false)

  const bulletStyle = {
    display: `inline`,
    margin: `10px`,
    textTransform: `uppercase`,
    fontWeight: 900,
  }
  return (
    <header
      style={{
        top: 0,
        position: `fixed`,
        zIndex: 2000,
        width: `100%`,
        minHeight: menu ? `200px` : `30px`,
        backgroundColor: `#191414`,
        transition: `min-height 0.5s ease`,
      }}
      className={menu ? `pattern-diagonal-stripes-xl` : ``}
    >
      <div
        style={{
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `baseline`,
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h3 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `#FFFFFF`,
              textDecoration: `none`,
            }}
          >
            {siteTitle} <FiMusic />
          </Link>
        </h3>
        <div>
          {!menu && (
            <FiMenu
              style={{ color: `white`, fontSize: `30px`, cursor: `pointer` }}
              onClick={() => setMenu(!menu)}
            />
          )}
          {menu && (
            <FiX
              style={{ color: `white`, fontSize: `30px`, cursor: `pointer` }}
              onClick={() => setMenu(!menu)}
            />
          )}
        </div>
      </div>

      <nav
        style={{
          display: menu ? `flex` : `none`,
          justifyContent: `center`,
          transition: `display 5s ease`,
          // color: `white`
        }}
      >
        <ul style={{ color: `white`, marginX: `auto` }}>
          <li style={bulletStyle}>
            <Link
              to="/about/"
              style={{ color: `white` }}
              onClick={() => setMenu(false)}
            >
              About
            </Link>
          </li>
          <li style={bulletStyle}>
            <Link
              to="/network/"
              style={{ color: `white` }}
              onClick={() => setMenu(false)}
            >
              Network
            </Link>
          </li>
          <li style={bulletStyle}>
            <Link
              to="/how-do-artist-collaborate/"
              style={{ color: `white` }}
              onClick={() => setMenu(false)}
            >
              How do artist collaborate?
            </Link>
          </li>
          <li style={bulletStyle}>
            <Link
              to="/text-analysis/"
              style={{ color: `white` }}
              onClick={() => setMenu(false)}
            >
              Text Analysis
            </Link>
          </li>
          <li style={bulletStyle}>
            <Link
              to="/conclusion/"
              style={{ color: `white` }}
              onClick={() => setMenu(false)}
            >
              Conclusion
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
