import React, { useState, useEffect } from "react"

import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"

import { ResponsiveNetwork } from "@nivo/network"

import Ariana from "../../data/network-ariana-grande.json"
import Beyonce from "../../data/network-beyonce.json"
import ChildishGambino from "../../data/network-childish-gambino.json"
import CrystalFighters from "../../data/network-crystal-fighters.json"
import Tyler from "../../data/network-tyler.json"

const OurNetwork = () => {
  const [data, setData] = useState(Ariana)
  const [artist, setArtist] = useState("Ariana")

  useEffect(() => {
    if (artist === "Ariana") {
      setData(Ariana)
    } else if (artist === "Beyonce") {
      setData(Beyonce)
    } else if (artist === "CrystalFighters") {
      setData(CrystalFighters)
    } else if (artist === "Tyler") {
      setData(Tyler)
    } else if (artist === "Childish") {
      setData(ChildishGambino)
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
        <FormControlLabel
          value={"Ariana"}
          control={<Radio />}
          label="Ariana Grande"
        />
        <FormControlLabel
          value={"Beyonce"}
          control={<Radio />}
          label="Beyoncé"
        />
        <FormControlLabel
          value={"Childish"}
          control={<Radio />}
          label="Childish Gambino"
        />
        <FormControlLabel
          value={"CrystalFighters"}
          control={<Radio />}
          label="Crystal Fighters"
        />
        <FormControlLabel
          value={"Tyler"}
          control={<Radio />}
          label="Tyler, The Creator"
        />
      </RadioGroup>

      <div style={{ height: `450px`, marginTop: `20px` }}>
        <ResponsiveNetwork
          nodes={data.nodes}
          links={data.links}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          repulsivity={300}
          iterations={60}
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

export default OurNetwork
