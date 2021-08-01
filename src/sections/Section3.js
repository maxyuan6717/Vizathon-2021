import { ResponsiveLine } from "@nivo/line";
import React, { useState, useMemo } from "react";
import { Background, Content } from "../global_styles/Structure";

import { data } from "../jsons/Tweets_Time";
// import { data } from "../jsons/Tweets_Jan_Aug";

import * as Styles from "./Section3.styles";

import * as dayjs from "dayjs";

const XAxisTicks = [
  "Jan 15",
  "Feb 1",
  "Feb 15",
  "Mar 1",
  "Mar 15",
  "Apr 1",
  "Apr 15",
  // "May 1",
  // "Jun 1",
  // "Jul 1",
  // "Aug 1",
];

const Section3 = () => {
  const [cumulative, setCumulative] = useState(false);
  const [included, setIncluded] = useState({ hate: true, counterhate: true });

  const graph_data = useMemo(() => {
    const num_days = Object.keys(data);
    const days = num_days.map((day) => {
      let date = new Date(2020, 0);
      return new Date(date.setDate(day));
    });
    const ret = [];
    ["Counterhate", "Hate"].forEach((label) => {
      let label_data = [];
      for (let i = 0; i < num_days.length; i++) {
        label_data.push({
          x: dayjs(days[i]).format("MMM D"),
          y: cumulative
            ? i > 0
              ? label_data[i - 1].y + (data[num_days[i]][label] || 0)
              : data[num_days[i]][label] || 0
            : data[num_days[i]][label] || 0,
        });
      }
      ret.push({
        id: label,
        data: label_data,
      });
    });
    return ret;
  }, [cumulative]);

  return (
    <Background color="pink">
      <Content section={3}>
        <Styles.GraphContainer>
          <ResponsiveLine
            data={[]
              .concat(included.counterhate ? graph_data[0] : [])
              .concat(included.hate ? graph_data[1] : [])}
            margin={{ top: 75, right: 75, bottom: 75, left: 75 }}
            axisBottom={{
              orient: "bottom",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              tickValues: XAxisTicks,
              legend: "Day",
              legendOffset: 36,
              legendPosition: "middle",
            }}
            gridXValues={XAxisTicks}
            axisLeft={{
              orient: "left",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Tweets",
              legendOffset: -40,
              legendPosition: "middle",
            }}
            enableSlices="x"
            sliceTooltip={({ slice }) => {
              console.log(slice);
              return (
                <div
                  style={{
                    background: "white",
                    padding: "9px 12px",
                    border: "1px solid #ccc",
                    zIndex: "420 !important",
                    fontSize: "16px",
                  }}
                >
                  <div style={{ color: "black" }}>
                    {slice.points[1].data.xFormatted}, 2020
                  </div>
                  {slice.points.map((point) => (
                    <div
                      key={point.id}
                      style={{
                        color: point.serieColor,
                      }}
                    >
                      <strong>{point.serieId}:</strong>
                      {"  " + point.data.yFormatted}
                    </div>
                  ))}
                </div>
              );
            }}
            useMesh={true}
            legends={[
              {
                anchor: "top-right",
                direction: "column",
                justify: false,
                translateX: 0,
                translateY: 8,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 100,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
            theme={{
              background: "#ffffff",
            }}
          />
        </Styles.GraphContainer>
      </Content>
    </Background>
  );
};

export default Section3;
