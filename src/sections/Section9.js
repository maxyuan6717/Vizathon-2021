import React, { useMemo } from "react";
import { Background, Content, Spacer } from "../global_styles/Structure";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveBar } from "@nivo/bar";

import { data } from "../jsons/GoFundMe";

import * as dayjs from "dayjs";

import * as Styles from "./Section9.styles";

const XAxisTicks = [
  "03-01-20",
  "06-01-20",
  "09-01-20",
  "12-01-20",
  "03-01-21",
  "06-01-21",
];

const Section9 = () => {
  // const getInt = (x) => {
  //   if (x.includes("K")) {
  //     return parseFloat(x.replace("K", "")) * 1000;
  //   }
  //   return parseInt(x);
  // };

  const lineGraphData = useMemo(() => {
    const byMonth = {};
    for (let i = 0; i < data.length; i++) {
      let date = dayjs(data[i].created);
      date = date.date(1);
      const month = date.format("MM-DD-YY");
      if (!byMonth[month]) {
        byMonth[month] = 0;
      }
      byMonth[month] += 1;
    }

    const ret = [];
    const months = Object.keys(byMonth);
    for (let i = 0; i < months.length; i++) {
      ret.push({
        x: months[i],
        y: byMonth[months[i]],
      });
    }
    ret.sort((a, b) => {
      return dayjs(a.x, "MM-DD-YY") - dayjs(b.x, "MM-DD-YY");
    });
    return [
      {
        id: "Funds",
        color: "white",
        data: ret,
      },
    ];
  }, []);

  const barChartData = useMemo(() => {
    const bySection = {
      Justice: {},
      Uplift: {},
      Support: {},
      Atlanta: {},
      Safety: {},
    };
    for (let i = 0; i < data.length; i++) {
      const section = data[i].section;
      if (!bySection[section].total) bySection[section].total = 0;
      if (!bySection[section].goalMet) bySection[section].goalMet = 0;
      if (!bySection[section].money) bySection[section].money = 0;
      bySection[section].total += 1;
      bySection[section].goalMet += data[i].cur >= data[i].goal ? 1 : 0;
      bySection[section].money += data[i].cur;
    }
    const sections = Object.keys(bySection);
    const ret = [];
    for (let i = 0; i < sections.length; i++) {
      ret.push({
        section: sections[i],
        percentGoal:
          (bySection[sections[i]].goalMet / bySection[sections[i]].total) * 100,
      });
    }
    ret.push({
      section: "Average",
      percentGoal:
        (100 *
          (bySection.Justice.goalMet +
            bySection.Uplift.goalMet +
            bySection.Support.goalMet +
            bySection.Atlanta.goalMet +
            bySection.Safety.goalMet)) /
        (bySection.Justice.total +
          bySection.Uplift.total +
          bySection.Support.total +
          bySection.Atlanta.total +
          bySection.Safety.total),
    });
    ret.push({
      section: "Go Fund Me",
      percentGoal: 10,
    });
    return ret;
  }, []);

  console.log(barChartData);

  return (
    <Background color="pink">
      <Content section={9}>
        <Styles.DataContainer>
          <Styles.Graph>
            <ResponsiveLine
              colors={(d) => d.color}
              data={lineGraphData}
              margin={{ top: 0, right: 90, bottom: 75, left: 90 }}
              axisBottom={{
                orient: "bottom",
                tickValues: XAxisTicks,
                format: (d) => {
                  return dayjs(d, "MM-DD-YY").format("MMM 'YY");
                },
                legend: "Month",
                legendOffset: 50,
                legendPosition: "middle",
              }}
              gridXValues={XAxisTicks}
              axisLeft={{
                orient: "left",
                legend: "Funds",
                legendOffset: -50,
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
                      {dayjs(
                        (slice.points[0] || slice.points[1])?.data?.xFormatted
                      ).format("MMMM YYYY")}
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
          </Styles.Graph>
          <Styles.Description>
            The number of GoFundMe campaigns supporting Asian American
            communities increased by 207% from February to March 2021 following
            the Atlanta shootings.
          </Styles.Description>
        </Styles.DataContainer>
        <Spacer height={100} />
        <Styles.DataContainer>
          <Styles.Graph>
            <ResponsiveBar
              colors={"white"}
              data={barChartData}
              keys={["percentGoal"]}
              indexBy="section"
              valueFormat=".1f"
              margin={{ top: 20, right: 90, bottom: 75, left: 90 }}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Fundraiser Category",
                legendPosition: "middle",
                legendOffset: 40,
              }}
              labelTextColor="#AC1960"
              axisLeft={{
                orient: "left",
                legend: "Percentile",
                legendOffset: -50,
                legendPosition: "middle",
                format: (d) => d + "%",
              }}
              isInteractive={false}
              theme={{
                textColor: "#ffffff",
                fontSize: 12,
                axis: {
                  legend: {
                    text: {
                      fontSize: 16,
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
          </Styles.Graph>
          <Styles.Description>
            The proportion of #StopAsianHate fundraisers that achieve their
            goals is also substantially higher than the GoFundMe average, with
            some fundraisers exceeding their goals by astounding margins.
          </Styles.Description>
        </Styles.DataContainer>
      </Content>
    </Background>
  );
};

export default Section9;
