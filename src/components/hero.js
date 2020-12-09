import React from "react"

const Hero = ({ title, sub }) => {
  return (
    <div
      style={{
        backgroundColor: `#3cb371`,
        color: `#191414`,
        padding: `60px`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
      }}
      className="pattern-dots-md"
    >
      <h1
        style={{
          color: `#fff`,
          margin: `auto`,
          fontSize: `80px`,
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
