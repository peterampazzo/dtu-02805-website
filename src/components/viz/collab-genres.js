import React from "react"

import { ResponsiveBar } from "@nivo/bar"
import data from "../../data/data-collab-genres.json"

const CollabGenres = () => {
  const colors = {
    top: "#483d8b",
    other: "#3cb371",
  }
  return (
    <div style={{ marginTop: `60px`, marginBottom: `60px` }}>
      <h3 style={{ textAlign: `center`, marginBottom: `5px` }}>
        Ratio of top collaborators by genre
      </h3>
      <div style={{ height: `450px` }}>
        <ResponsiveBar
          data={data}
          keys={["other", "top"]}
          indexBy="genre"
          margin={{ top: 50, right: 130, bottom: 50, left: 90 }}
          padding={0.3}
          enableLabel={false}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={d => colors[d.id]}
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
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
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 0,
            legend: "Genres",
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 0,
            legend: "Ratio of Collaborations",
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

export default CollabGenres
