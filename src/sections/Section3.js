import { ResponsiveLine } from "@nivo/line";
import React, { useState, useMemo } from "react";
import { Spacer, Background, Content, Btn } from "../global_styles/Structure";

import { LeftText, CenteredText, Source } from "../global_styles/Typography";

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
        <CenteredText width={805} weight={300} size={24}>
          In this case, the agent of transmission is not droplet spread. It's
          existing forces of systemic oppression combined with feelings of fear,
          uncertainty, and vulnerability,{" "}
          <b>amplified & made more contagious by the Internet.</b>
        </CenteredText>
        <Spacer height={50} />
        <LeftText width={650} weight={400} size={14} lineHeight={16.4}>
          In a May 2020 research paper, researchers from the Georgia Institute
          of Technology compiled 30 million tweets from Twitter, classifying
          each as hate, counterhate, neutral (neither hate nor counter-hate), or
          other (containing elements of both hate and counterhate). Below, we
          generate two data visualizations based on a random sample of 1 million
          of these tweets.
          <Spacer height={15} />
          <b>
            Looking just at the first two classifications—hate and
            counterhate—we see that hate tweets are, on average, four times more
            frequent than counter-hate tweets.
          </b>
          <Spacer height={15} />
          And from March 16th to March 18th, 2020, the number of hate tweets
          rose by 500% (in response, counter-hate rose at a similar rate) when
          then-President Donald Trump first used the phrase, “China Virus,”
          sparking a storm of anti-Asian Twitter content.
          <Spacer height={15} />
          Click the buttons to toggle between hate and counterhate and by day
          vs. cumulative figures.
          <Spacer height={15} />
          <Source>
            Source:{" "}
            <a
              href="http://claws.cc.gatech.edu/covid/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Georgia Institute of Technology
            </a>
          </Source>
        </LeftText>
        <Spacer height={100} />
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
          <Styles.Title>
            {`${cumulative ? "Cumulative " : ""}Number of ${
              included.hate && included.counterhate
                ? "Hate vs. Counterhate"
                : included.counterhate
                ? "Counterhate"
                : included.hate
                ? "Hate"
                : ""
            } Tweets ${!cumulative ? "By Day" : ""},`}
            <br />
            January to April 2020
          </Styles.Title>
        </Styles.GraphContainer>
      </Content>
    </Background>
  );
};

export default Section3;
