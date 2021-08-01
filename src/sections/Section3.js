import { ResponsiveLine } from "@nivo/line";
import React, { useState, useMemo } from "react";
import { Background, Content, Btn } from "../global_styles/Structure";

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
];

const colors = {
  Counterhate: "#99ccff",
  Hate: "#ff9999",
};

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
        color: colors[label],
      });
    });
    return ret;
  }, [cumulative]);

  return (
    <Background color="pink">
      <Content section={3}>
        <Styles.GraphContainer>
          <ResponsiveLine
            colors={(d) => d.color}
            data={[]
              .concat(included.counterhate ? graph_data[0] : [])
              .concat(included.hate ? graph_data[1] : [])}
            margin={{ top: 20, right: 90, bottom: 75, left: 90 }}
            axisBottom={{
              orient: "bottom",
              tickValues: XAxisTicks,
              legend: "Day",
              legendOffset: 60,
              legendPosition: "middle",
            }}
            gridXValues={XAxisTicks}
            axisLeft={{
              orient: "left",
              legend: "Tweets",
              legendOffset: -80,
              legendPosition: "middle",
            }}
            enablePoints={false}
            lineWidth={4}
            enableSlices="x"
            sliceTooltip={({ slice }) => {
              return (
                <div
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    borderRadius: "8px",
                    padding: "9px 12px",
                    border: "1px solid rgba(255,255,255,0.4)",
                    zIndex: "420 !important",
                    fontSize: "16px",
                  }}
                >
                  <div style={{ color: "white" }}>
                    {(slice.points[0] || slice.points[1])?.data?.xFormatted},
                    2020
                  </div>
                  {slice.points.map((point) => (
                    <div
                      key={point.id}
                      style={{
                        color: point.serieColor,
                      }}
                    >
                      <strong>{`${point.serieId}: ${point?.data?.yFormatted}`}</strong>
                    </div>
                  ))}
                </div>
              );
            }}
            useMesh={true}
            theme={{
              textColor: "#ffffff",
              fontSize: 16,
              axis: {
                legend: {
                  text: {
                    fontSize: 20,
                    fontWeight: "bold",
                  },
                },
                ticks: {
                  line: {
                    strokeWidth: 2,
                    stroke: "rgba(255,255,255,0.1)",
                  },
                },
              },
              grid: {
                line: {
                  strokeWidth: 2,
                  stroke: "rgba(255,255,255,0.1)",
                },
              },
              crosshair: {
                line: {
                  stroke: "#ffffff",
                  strokeOpacity: 0.5,
                },
              },
            }}
          />
          <Styles.BtnContainer pos={0}>
            <Btn selected onClick={() => setCumulative(!cumulative)}>
              {cumulative ? "Cumulative" : "By Day"}
            </Btn>
          </Styles.BtnContainer>
          <Styles.BtnContainer pos={1}>
            <Btn
              selected={included.hate}
              onClick={() => setIncluded({ ...included, hate: !included.hate })}
            >
              <Styles.LegendBall color={colors["Hate"]} />
              Hate
            </Btn>
          </Styles.BtnContainer>
          <Styles.BtnContainer pos={2}>
            <Btn
              selected={included.counterhate}
              onClick={() =>
                setIncluded({ ...included, counterhate: !included.counterhate })
              }
            >
              <Styles.LegendBall color={colors["Counterhate"]} />
              Counterhate
            </Btn>
          </Styles.BtnContainer>
          <Styles.Title>Title</Styles.Title>
        </Styles.GraphContainer>
      </Content>
    </Background>
  );
};

export default Section3;
