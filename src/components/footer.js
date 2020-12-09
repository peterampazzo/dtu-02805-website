import React from "react"

const Footer = () => {
  return (
    <footer
      className="pattern-diagonal-stripes-lg"
      style={{
        backgroundColor: `#E76F51`,
        color: `#F4A261`,
        // maxWidth: 960,
        padding: "1.45rem",
        marginTop: `2rem`,
        display: `flex`,
        textAlign: `center`,
        justifyContent: `center`,
      }}
    >
      <div style={{ color: `#264653`, fontWeight: 700 }}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </div>
    </footer>
  )
}

export default Footer
