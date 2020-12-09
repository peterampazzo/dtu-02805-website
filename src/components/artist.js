import React from "react"
import { FiShare2, FiStar } from "react-icons/fi"

const Card = ({ name, degree, popularity, genre, color, image }) => (
  <div
    style={{
      margin: `18px`,
      display: `flex`,
      textAlign: `center`,
      alignItems: `center`,
      flexDirection: `column`,
      justifyContent: `center`,
      backgroundColor: color,
      height: `150px`,
      width: `200px`,
      borderRadius: `15px`,
      fontSize: `16px`,
      color: `white`,
      boxShadow: `-20px 20px 60px rgba(0,0,0,.4)`,
      padding: `4px`,
    }}
  >
    <img
      src={image}
      style={{ width: `80px`, borderRadius: `50%`, marginTop: `-40px` }}
    />
    <div style={{ fontSize: `20px`, fontWeight: 900 }}>{name}</div>
    <div>{genre}</div>
    <div
      style={{
        display: `flex`,
        marginTop: `20px`,
      }}
    >
      <div>
        <FiShare2 /> {degree}
      </div>
      <div style={{ marginLeft: `20px` }}>
        <FiStar /> {popularity}
      </div>
    </div>
  </div>
)

export default Card
