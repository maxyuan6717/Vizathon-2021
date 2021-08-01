import React, { useMemo } from "react";
import { Background, Content, Spacer } from "../global_styles/Structure";
import { CenteredText, LeftText, Source } from "../global_styles/Typography";
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
      Atlanta: {},
      Justice: {},
      Support: {},
      Uplift: {},
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
    ret.push({
      section: "GoFundMe",
      percentGoal: 10,
    });
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
    return ret;
  }, []);

  return (
    <Background color="pink">
      <Content section={9}>
        <LeftText width={650} weight={400} size={16} lineHeight={18}>
          In the aftermath of the Atlanta shooting, GoFundMe started a “Stop
          Asian Hate Community Hub.” Here, the #1 Fundraising Platform for
          Crowdsourcing organizes a list of 200+ verified fundraisers created by
          users in support of the AAPI community.
          <Spacer height={15} />
          The platform places these fundraisers into five categories: for the
          Justice, the Safety, the Uplift, and Local Support of the AAPI
          community, as well as a separate category for those directly affected
          by the Atlanta shootings.
        </LeftText>
        <Spacer height={50} />
        <CenteredText width={900} weight={400}>
          Seizing upon this moment of awareness, the number of #StopAsianHate
          campaigns directed at AAPI empowerment organizations and victims of
          hate increased by 207%.
        </CenteredText>
        <Spacer height={20} />
        <Source>
          Source:{" "}
          <a
            href="https://drive.google.com/file/d/1aSpugiu96eKX4USvQG8KdYIwAI9WmGgF/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stop Asian Hate Fundraisers Dataset
          </a>
        </Source>
        <Spacer height={50} />
        <Styles.Graph>
          <Styles.Title>
            Number of #StopAsianHate GoFundMe Campaigns Over Time
          </Styles.Title>
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
              legend: "Number of Funds",
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
        <Spacer height={125} />
        <CenteredText width={900} weight={400}>
          The proportion of #StopAsianHate fundraisers that achieved or exceeded
          their goals is also substantially higher than the GoFundMe average of
          10%.
        </CenteredText>
        <Spacer height={20} />
        <Source>
          Source:{" "}
          <a
            href="https://drive.google.com/file/d/1aSpugiu96eKX4USvQG8KdYIwAI9WmGgF/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stop Asian Hate Fundraisers Dataset
          </a>
        </Source>
        <Spacer height={50} />
        <Styles.Graph>
          <Styles.Title>
            Percentage of Successful Fundraising Campaigns by Category
          </Styles.Title>
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
              legend: "Percentage",
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
        <Spacer height={50} />
        <LeftText width={650} weight={400} size={16} lineHeight={18}>
          Some of these fundraisers exceeded their goals by astounding margins.
          Ordinary people were able to leverage their online platforms to offer
          material support to the Asian community and spread awareness of
          anti-Asian hate in the process. And this reflects the public’s greater
          willingness to give in the aftermath of the grisly Atlanta shooting
          and increased understanding of other forms of anti-Asian violence,
          from brutal attacks on Asian seniors to indiscriminant acts of
          violence committed against ordinary individuals of Asian appearace to
          everyday forms of racism.
          <Spacer height={15} />
          But by no means is this some kind of victory. Until GoFundMe platforms
          like these no longer need to exist, there is still more work to be
          done.
        </LeftText>
      </Content>
    </Background>
  );
};

export default Section9;
