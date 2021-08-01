import React, { useEffect, useState, useMemo } from "react";
import { Background, Content } from "../global_styles/Structure";

import { getStateAbbr } from "../utils";

import USAMap from "react-usa-map";

import { hate_data } from "../jsons/US_Geo_Hate";
import { counter_data } from "../jsons/US_Geo_Counter";

import * as Styles from "./Section4.styles";

const Section4 = () => {
  const [day, setDay] = useState(15);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDay((day) => day + 1);
  //   }, 500);
  //   return () => clearInterval(interval);
  // }, []);
  const [cumulative, setCumulative] = useState(true);
  const num_days = useMemo(() => Object.keys(hate_data), []);
  const days = useMemo(
    () =>
      num_days.map((day) => {
        let date = new Date(2020, 0);
        return new Date(date.setDate(day));
      }),
    [num_days]
  );

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

  console.log(mapData);

  const stateConfig = useMemo(() => {
    const ret = {};
    const states = Object.keys(hate_data[num_days[0]]);
    for (let j = 0; j < states.length; j++) {
      const abbr = getStateAbbr(states[j]);
      if (abbr) {
        ret[abbr] = {
          fill: `rgba(0,255,0,${
            mapData.hate[day] ? mapData.hate[day][abbr] / 1000 + 0.2 : 0.2
          })`,
          stroke: "red",
        };
      }
    }
    return ret;
  }, [day, mapData, num_days]);

  return (
    <Background color="pink">
      <Content section={4}>
        <Styles.MapContainer>
          <USAMap width={500} height={300} customize={stateConfig} />
        </Styles.MapContainer>
      </Content>
    </Background>
  );
};

export default Section4;
