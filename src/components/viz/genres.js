import React, { useState } from "react"

import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"

import { ResponsiveBar } from "@nivo/bar"
import dataComplete from "../../data/data-genres.json"
import dataMerged from "../../data/data-genres-merged.json"

import colors from "../../utils/colors"

const Genres = () => {
  const [data, setData] = useState("2")

  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        marginTop: `40px`,
        marginBottom: `40px`,
      }}
    >
      <FormControl component="fieldset" style={{ margin: `auto` }}>
        <RadioGroup
          aria-label="plot"
          name="plot"
          value={data}
          onChange={event => {
            console.log(data)
            setData(event.target.value)
          }}
          row
        >
          <FormControlLabel
            value={"1"}
            control={<Radio />}
            label="Between genres"
          />
          <FormControlLabel value={"2"} control={<Radio />} label="Internal" />
        </RadioGroup>
      </FormControl>

      <div style={{ height: `450px` }}>
        <ResponsiveBar
          data={data === "1" ? dataComplete : dataMerged}
          keys={[
            "Other",
            "Alternative",
            "Country",
            "Funk-Soul",
            "Hip-Hop",
            "Pop",
            "Punk",
            "Reggae",
            "Rock",
          ]}
          indexBy="genre"
          margin={{ top: 50, right: 130, bottom: 50, left: 90 }}
          padding={0.3}
          enableLabel={false}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={d => colors[d.id]}
          layout="horizontal"
          tooltip={({ id, value, color }) => (
            <strong style={{ color }}>
              {id}: {Math.round(value)}
            </strong>
          )}
          theme={{
            tooltip: {
              container: {
                background: "#1a1a1a",
              },
            },
          }}
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 0,
            legend: "Ratio of collaboration to genre #",
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 0,
            legend: "Main Genres",
            legendPosition: "middle",
            legendOffset: -70,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </div>
    </div>
  )
}

export default Genres
