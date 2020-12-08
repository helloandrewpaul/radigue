import React, { useEffect, useState } from "react";
import { usePosition } from "use-position";
import styled from "styled-components";
import { weatherParams } from "../../../actions";
import { useSelector, useDispatch } from "react-redux";

const APIKEY = process.env.REACT_APP_APIKEY;

const GetPosition = () => {
  const dispatch = useDispatch();

  const [currentWeather, setCurrentWeather] = useState([]);
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
          console.log(currentWeather);
        });
    }
  }, [latitude]);

  console.log(currentWeather);

  //200-232 = thunderstorm
  //300-321 = drizzle
  //500-531 = rain
  //600-622 = snow
  //800-804 = clouds

  const weatherCode = () => {
    if (currentWeather.code[0].id > 200) {
      console.log("weather code works");
    } else {
      console.log("not working");
      console.log(currentWeather.code);
    }
  };
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

  //button onClick=(() => {
  //do a dispatch that sends a whole assed state object for the synths
  // })

  const setParameters = () => {
    console.log("dispatch to store new object of params modified by weather");
    if (currentWeather) {
      dispatch(
        weatherParams({
          //our big initValues object
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
