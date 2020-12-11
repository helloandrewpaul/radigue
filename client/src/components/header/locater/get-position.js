import React, { useEffect, useState } from "react";
import { usePosition } from "use-position";
import styled from "styled-components";
import { weatherParams } from "../../../actions";
import { useDispatch } from "react-redux";
import { WiLightning } from "react-icons/wi";

const APIKEY = process.env.REACT_APP_APIKEY;

const GetPosition = () => {
  const dispatch = useDispatch();

  const [currentWeather, setCurrentWeather] = useState(null);
  const [codeParams, setCodeParams] = useState(null);
  const watch = true;

  const { latitude, longitude } = usePosition(watch);

  useEffect(() => {
    if (latitude) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setCurrentWeather({ main: data.main, code: data.weather });
          setCodeParams(data.weather);
        });
    }
  }, [latitude]);

  //200-232 = thunderstorm
  //300-321 = drizzle
  //500-531 = rain
  //600-622 = snow
  //800-804 = clouds

  //   0: {id: 521, main: "Rain", description: "shower rain", icon: "09d"}
  // length: 1
  // __proto__: Array(0)
  // main:
  // feels_like: 260.54
  // humidity: 73
  // pressure: 1011
  // temp: 267.56
  // temp_max: 268.15
  // temp_min: 267.04

  // console.log(currentWeather);
  // console.log(codeParams);

  const setParameters = () => {
    // console.log(currentWeather);
    if (currentWeather) {
      dispatch(
        weatherParams({
          droneOne: {
            volume: -28,
            detune: currentWeather.main.temp,
          },
          droneTwo: {
            volume: -20,
            detune:
              currentWeather.main.temp_max +
              currentWeather.main.temp_max * 0.01,
          },
          droneThree: {
            volume: -20,
          },
          droneFour: {
            startStop: true,
            volume: -35,
          },
          droneFive: {
            startStop: true,
            pitch: currentWeather.main.temp_min,
          },
          droneSix: {
            startStop: true,
            pitch: currentWeather.main.temp_max,
          },
        })
      );
    } else {
      console.log("loading weather");
    }
  };

  return (
    <div>
      <Button onClick={setParameters}>&#x2604;</Button>
    </div>
  );
};

const Button = styled(WiLightning)`
  background: none;
  border: none;
  outline: none;
  font-size: 40px;
  color: #b5a642;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

export default GetPosition;
