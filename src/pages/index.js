import React from "react"

import { Link } from "gatsby"
import { FiPlayCircle } from "react-icons/fi"
import SEO from "../components/seo"

const HopePage = () => {
  return (
    <div
      style={{
        height: `100vh`,
        width: `100vw`,
        backgroundColor: `#3cb371`,
        color: `#191414`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        flexDirection: `column`,
      }}
      className="pattern-dots-md"
    >
      <SEO title="Home Page" />
      <h1 style={{ fontSize: `90px`, color: `#fff`, marginBottom: `0px` }}>
        Artists Collaboration
      </h1>
      <h1 style={{ fontSize: `90px`, color: `#fff`, marginTop: `0px` }}>
        Network
      </h1>
      <Link
        to="/introduction/"
        style={{
          width: `200px`,
          fontSize: `30px`,
          fontWeight: 500,
          textDecoration: `none`,
          display: `flex`,
          justifyContent: `space-evenly`,
          alignItems: `center`,
          textAlign: `center`,
          color: `#fff`,
          backgroundColor: `#191414`,
          padding: `10px`,
          borderRadius: `15px`,
          boxShadow: `-10px 10px 60px rgba(0,0,0,.4)`,
        }}
      >
        Go <FiPlayCircle size={30}  />
      </Link>
    </div>
  )
}

export default HopePage
