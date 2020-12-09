import React from "react"

const Hero = ({ title, sub }) => {
  return (
    <div
      style={{
        backgroundColor: `#191414`,
        color: `#1bd954`,
        padding: `60px`,
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
