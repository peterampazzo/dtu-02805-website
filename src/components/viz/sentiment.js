import React, { useState } from "react"

import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"

import { FiFrown, FiSmile, FiThumbsUp, FiThumbsDown } from "react-icons/fi"
import Card from "../artist"

import data from "../../data/sentiment-genre-artist.json"

const Sentiment = () => {
  const [selGenre, setSelGenre] = useState("Rock")
  const genres = data.map(x => x.genre)

  const artists = data.find(x => x.genre === selGenre)

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
          flexWrap: `wrap`,
          justifyContent: `center`,
          marginTop: `40px`,
          marginBottom: `40px`,
        }}
      >
        {artists.saddest.map((item, i) => (
          <Card name={item.name} color={"#297a4d"} width="140px" key={i}>
            <div
              style={{
                display: `flex`,
                marginTop: `20px`,
              }}
            >
              <FiThumbsDown size={20} style={{ marginRight: `10px` }} />{" "}
              {Math.round(item.sentiment * 100) / 100}
            </div>
          </Card>
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
          flexWrap: `wrap`,
          justifyContent: `center`,
          marginTop: `40px`,
          marginBottom: `40px`,
        }}
      >
        {artists.happiest.map((item, i) => (
          <Card name={item.name} color={"#47c17d"} width="140px" key={i}>
            <div
              style={{
                display: `flex`,
                marginTop: `20px`,
              }}
            >
              <FiThumbsUp size={20} style={{ marginRight: `10px` }} />{" "}
              {Math.round(item.sentiment * 100) / 100}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Sentiment
