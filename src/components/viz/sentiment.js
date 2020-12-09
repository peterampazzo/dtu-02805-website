import React, { useState } from "react"

import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"

import { FiFrown, FiSmile } from "react-icons/fi"

import data from "../../data/sentiment-genre-artist.json"

const Sentiment = () => {
  const [selGenre, setSelGenre] = useState("Rock")
  const genres = data.map(x => x.genre)

  const artists = data.find(x => x.genre === selGenre)

  const CardArtist = ({ position, name, score, happy }) => (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `flex-start`,
        margin: `auto`,
        textAlign: `center`,
        width: `160px`,
        height: `160px`,
        backgroundColor: happy ? `#47c17d` : `#297a4d`,
        color: `white`,
        boxShadow: `-12px 12px 60px rgba(0,0,0,.25)`,
        borderRadius: `15px`,
        padding: `3px`,
        overflowWrap: `break-word`,
        marginBottom: `20px`,
      }}
    >
      <p style={{ marginBottom: `5px` }}>{position}</p>
      <h4>{name}</h4>
      <p style={{ marginBottom: `5px` }}>{score}</p>
    </div>
  )

  return (
    <div
      style={{ marginTop: `60px`, marginBottom: `60px`, textAlign: `center` }}
    >
      <h3
        style={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          flexWrap: `wrap`,
        }}
      >
        Who are the happiest and saddest artists within the
        <Select
          id="genre-select"
          value={selGenre}
          onChange={e => setSelGenre(e.target.value)}
          variant="outlined"
          style={{ marginLeft: `20px`, marginRight: `20px` }}
        >
          {genres.map((item, i) => (
            <MenuItem value={item} key={i}>
              {item}
            </MenuItem>
          ))}
        </Select>{" "}
        genre?
      </h3>
      <h4
        style={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
        }}
      >
        Saddest <FiFrown style={{ marginLeft: `15px` }} size={30} />
      </h4>
      <div
        style={{
          display: `flex`,
          justifyContent: `space-between`,
          flexWrap: `wrap`,
        }}
      >
        {artists.saddest.map((item, i) => (
          <CardArtist
            key={i}
            position={i + 1}
            name={item.name}
            score={Math.round(item.sentiment * 100) / 100}
            happy={false}
          />
        ))}
      </div>
      <h4
        style={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
        }}
      >
        Happiest <FiSmile style={{ marginLeft: `15px` }} size={30} />
      </h4>
      <div
        style={{
          display: `flex`,
          justifyContent: `space-between`,
          flexWrap: `wrap`,
        }}
      >
        {artists.happiest.map((item, i) => (
          <CardArtist
            key={i}
            position={i + 1}
            name={item.name}
            score={Math.round(item.sentiment * 100) / 100}
            happy={true}
          />
        ))}
      </div>
    </div>
  )
}

export default Sentiment
