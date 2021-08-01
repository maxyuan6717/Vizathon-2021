import React, { useCallback, useState, useMemo } from "react";
import chroma from "chroma-js";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Background, Content, Btn } from "../global_styles/Structure";

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
        <Styles.MapContainer>
          <Styles.Title>Title</Styles.Title>
          <Styles.OptionBar>
            <Btn selected onClick={() => setHate(!hate)}>
              {hate ? "Hate" : "Counterhate"}
            </Btn>
            <Btn selected onClick={() => setNormalize(!normalize)}>
              {normalize ? "Normalized by Population" : "Raw Volume"}
            </Btn>
            <Btn selected onClick={() => setCumulative(!cumulative)}>
              {cumulative ? "Cumulative" : "By Day"}
            </Btn>
          </Styles.OptionBar>
          <USAMap width={600} height={400} customize={stateConfig} />
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
          <Styles.Date>{dayjs(getDay()).format("MMM DD, YYYY")}</Styles.Date>
        </Styles.MapContainer>
      </Content>
    </Background>
  );
};

export default Section4;
