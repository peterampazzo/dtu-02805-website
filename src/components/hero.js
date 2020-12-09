import React from "react"

const Hero = ({ title, sub }) => {
  return (
    <div
      className="pattern-grid-lg"
      style={{
        backgroundColor: `#264653`,
        color: `#2A9D8F`,
        padding: `8rem`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
      }}
    >
      <h1
        style={{
          margin: `auto`,
          fontSize: `80px`,
          fontWeight: 700,
          color: `#F4A261`,
          textTransform: `uppercase`,
        }}
      >
        {title}
      </h1>
      <h2
        style={{
          fontSize: `30px`,
          color: `#E9C46A`,
          letterSpacing: `4px`,
          textTransform: `uppercase`,
        }}
      >
        {sub}
      </h2>
    </div>
  )
}

export default Hero
