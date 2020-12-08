import React, { useEffect, useState } from "react";
import { usePosition } from "use-position";
import styled from "styled-components";
import { weatherParams } from "../../../actions";
import { useSelector, useDispatch } from "react-redux";

const APIKEY = process.env.REACT_APP_APIKEY;

const GetPosition = () => {
  const dispatch = useDispatch();

  const [currentWeather, setCurrentWeather] = useState([]);
  const [codeParams, setCodeParams] = useState({});
  const watch = true;

  const { latitude, longitude } = usePosition(watch);

  useEffect(async () => {
    if (latitude) {
      await fetch(
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

  //store in an if statement so it runs when currentWeather exists

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

  console.log(currentWeather);
  console.log(codeParams);

  const setParameters = () => {
    if (currentWeather) {
      dispatch(
        weatherParams({
          //our big initValues object
          droneOne: {
            volume: codeParams[0].id * 0.6,
            detune: currentWeather.temp,
          },
          droneTwo: {
            volume: currentWeather.humidity * 0.5,
            detune: currentWeather.temp_max,
          },
          droneThree: {
            volume: currentWeather.humidity * 0.3,
          },
          droneFour: {
            startStop: true,
            volume: -39,
          },
          droneFive: {
            startStop: false,
            pitch: currentWeather.temp_min,
          },
          droneSix: {
            startStop: false,
            pitch: currentWeather.temp_min,
          },
        })
      );
    }
  };

  return (
    <div>
      <Button onClick={setParameters}>&#x2604;</Button>
    </div>
  );
};

const Button = styled.button`
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
