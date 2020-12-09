import React, { useState, useEffect } from "react"

import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"

import { ResponsiveNetwork } from "@nivo/network"

import Pitbul from "../../data/network-pitbull.json"
import TaylorSwift from "../../data/network-taylor-swift.json"
import TheBeatles from "../../data/network-the-beatles.json"

const Network = () => {
  const [data, setData] = useState(Pitbul)
  const [artist, setArtist] = useState("Pitbul")

  useEffect(() => {
    if (artist === "Beatles") {
      setData(TheBeatles)
    } else if (artist === "Pitbul") {
      setData(Pitbul)
    } else if (artist === "Taylor") {
      setData(TaylorSwift)
    }
  }, [artist])

  return (
    <div
      style={{ display: `flex`, flexDirection: `column`, marginBottom: `20px` }}
    >
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={artist}
        style={{ margin: `auto` }}
        onChange={e => {
          setArtist(e.target.value)
        }}
        row
      >
        <FormControlLabel value={"Pitbul"} control={<Radio />} label="Pitbul" />
        <FormControlLabel
          value={"Taylor"}
          control={<Radio />}
          label="Taylor Swift"
        />
        <FormControlLabel
          value={"Beatles"}
          control={<Radio />}
          label="The Beatles"
        />
      </RadioGroup>

      <div style={{ height: `450px`, marginTop: `20px` }}>
        <ResponsiveNetwork
          nodes={data.nodes}
          links={data.links}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          repulsivity={130}
          iterations={30}
          nodeColor={function (e) {
            return e.color
          }}
          tooltip={({ id, genre, color }) => (
            <strong style={{ color }}>
              {id} ({genre})
            </strong>
          )}
          theme={{
            tooltip: {
              container: {
                background: "#1a1a1a",
              },
            },
          }}
          linkThickness={function (e) {
            return 0.3 * (2 - e.source.depth)
          }}
          linkColor="#B0C4DE"
          motionStiffness={160}
          motionDamping={12}
        />
      </div>
    </div>
  )
}

export default Network
