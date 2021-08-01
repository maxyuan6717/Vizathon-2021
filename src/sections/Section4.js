import React, { useCallback, useState, useMemo } from "react";
import chroma from "chroma-js";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Background, Content, Btn, Spacer } from "../global_styles/Structure";
import { LeftText, Source } from "../global_styles/Typography";

import src from "../assets/discrimination.png";

import { getStateAbbr, getPopulation } from "../utils";

import USAMap from "react-usa-map";

import { hate_data } from "../jsons/US_Geo_Hate";
import { counter_data } from "../jsons/US_Geo_Counter";

import * as Styles from "./Section4.styles";
import * as dayjs from "dayjs";

const Section4 = () => {
  const num_days = useMemo(() => Object.keys(hate_data), []);
  const [day, setDay] = useState(num_days[0]);
  const [normalize, setNormalize] = useState(true);
  const [hate, setHate] = useState(true);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDay((day) => day + 1);
  //   }, 500);
  //   return () => clearInterval(interval);
  // }, []);
  const [cumulative, setCumulative] = useState(true);

  const getDay = () => {
    let date = new Date(2020, 0);
    return new Date(date.setDate(day));
  };

  const mapData = useMemo(() => {
    const ret = { hate: {}, counter: {} };
    for (let i = 0; i < num_days.length; i++) {
      ret.hate[num_days[i]] = {};
      ret.counter[num_days[i]] = {};
      const states = Object.keys(hate_data[num_days[i]]);
      for (let j = 0; j < states.length; j++) {
        if (getStateAbbr(states[j])) {
          ret.hate[num_days[i]][getStateAbbr(states[j])] =
            cumulative && i > 0
              ? ret.hate[num_days[i - 1]][getStateAbbr(states[j])] +
                (hate_data[num_days[i]][states[j]] || 0)
              : hate_data[num_days[i]][states[j]] || 0;
          if (counter_data[num_days[i]]) {
            ret.counter[num_days[i]][getStateAbbr(states[j])] =
              cumulative && counter_data[num_days[i - 1]]
                ? ret.counter[num_days[i - 1]][getStateAbbr(states[j])] +
                  (counter_data[num_days[i]][states[j]] || 0)
                : counter_data[num_days[i]][states[j]] || 0;
          }
        }
      }
    }
    return ret;
  }, [cumulative, num_days]);

  const getMax = useCallback(() => {
    const states = Object.keys(hate_data[num_days[0]]);
    let max = 0;
    for (let i = 0; i < states.length; i++) {
      const abbr = getStateAbbr(states[i]);
      if (abbr) {
        for (let j = 0; j < num_days.length; j++) {
          max = Math.max(
            max,
            (mapData[hate ? "hate" : "counter"][num_days[j]][abbr] || 0) /
              (normalize ? getPopulation(abbr) : 1)
          );
        }
      }
    }
    return max;
  }, [hate, mapData, normalize, num_days]);

  const stateConfig = useMemo(() => {
    const ret = {};
    const states = Object.keys(hate_data[num_days[0]]);
    for (let j = 0; j < states.length; j++) {
      const abbr = getStateAbbr(states[j]);
      if (abbr) {
        ret[abbr] = {
          fill: chroma.mix(
            "rgba(255,255,255,0.6)",
            hate ? "#ff5959" : "#34abeb",
            mapData[hate ? "hate" : "counter"][day] &&
              mapData[hate ? "hate" : "counter"][day][abbr]
              ? mapData[hate ? "hate" : "counter"][day][abbr] /
                  (normalize ? getPopulation(abbr) : 1) /
                  (0.7 * getMax()) +
                  0.2
              : 0.2
          ),
          stroke: "red",
        };
      }
    }
    return ret;
  }, [day, mapData, getMax, normalize, hate, num_days]);

  return (
    <Background color="pink">
      <Content section={4}>
        <LeftText width={650} weight={400} size={16} lineHeight={18}>
          Interact with the map below to explore the amount of hate vs.
          counterhate by state in the U.S. over the course of four months, from
          January to April 2020.
          <Spacer height={15} />
          Click the buttons to toggle between hate and counterhate, by day vs.
          cumulative, and normalized vs. absolute figures. Use the slider to see
          how figures change through time.
          <Spacer height={15} />
          <Source>Source: Georgia Institute of Technology</Source>
        </LeftText>
        <Spacer height={50} />
        <Styles.MapContainer>
          <Styles.Title>
            {`Heatmap of ${cumulative ? "Cumulative " : ""}Number of ${
              hate ? "Hate" : "Counter-Hate"
            } Tweets ${!cumulative ? "By Day " : ""}`}
            <br />
            {`in the U.S., ${
              normalize ? "Normalized by Population" : "Raw Volume"
            }`}
          </Styles.Title>
          <Styles.Date>{dayjs(getDay()).format("MMM DD, YYYY")}</Styles.Date>
          <Styles.SliderContainer>
            <Slider
              min={15}
              max={108}
              step={1}
              value={day}
              onChange={(value) => setDay(value)}
              railStyle={{
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              trackStyle={{
                backgroundColor: "rgba(255,255,255,0.7)",
              }}
            />
          </Styles.SliderContainer>
          <USAMap width={650} height={400} customize={stateConfig} />
          <Styles.OptionBar>
            <Btn selected onClick={() => setHate(!hate)}>
              {hate ? "Hate" : "Counterhate"}
            </Btn>
            <Btn selected onClick={() => setCumulative(!cumulative)}>
              {cumulative ? "Cumulative" : "By Day"}
            </Btn>
            <Btn selected onClick={() => setNormalize(!normalize)}>
              {normalize ? "Normalized by Population" : "Raw Volume"}
            </Btn>
          </Styles.OptionBar>
        </Styles.MapContainer>
        <Spacer height={50} />
        <LeftText weight={400} size={16} lineHeight={18} width={650}>
          The pervasiveness of hate is especially troubling because hate online
          sets the stage for real-world violence. From March 2020 to 2021, the
          number of incidents of online discrimination reported to Stop AAPI
          Hate increased by 82%. Incidents of physical assault increased by 64%.
          <Spacer height={15} />
          <Source>Source: Stop AAPI Hate National Report</Source>
        </LeftText>
        <Spacer height={50} />
        <img
          src={src}
          width={750}
          alt="Discrimination"
          style={{ borderRadius: "12px" }}
        />
        <Spacer height={50} />
        <LeftText weight={400} size={16} lineHeight={18} width={650}>
          Given our understanding of the harms of tech, none of this is
          surprising.
          <Spacer height={15} />
          And this trend is by no means isolated to anti-Asian hate. On the
          Internet at large, hate has become more pervasive over time.
        </LeftText>
      </Content>
    </Background>
  );
};

export default Section4;
