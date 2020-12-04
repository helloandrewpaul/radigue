import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as Tone from "tone";
import { stopStart } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { getInitValues } from "../../reducers/parameter-reducer";

const DroneFour = () => {
  const dispatch = useDispatch();

  const initValues = useSelector((state) => {
    return state.droneFour;
  });

  console.log(initValues);

  var tremolo = new Tone.Tremolo(1, 0.15).toDestination().start();

  var vibrato = new Tone.Vibrato(8, 0.05).toDestination();

  const [osc, setOsc] = useState((osc) => {
    const osc1 = new Tone.Oscillator({ volume: -30 }).connect(vibrato);
    return osc1;
  });

  osc.frequency.value = 233.3;

  const [osc2, setOsc2] = useState((osc2) => {
    const oscTwo = new Tone.Oscillator({ volume: -28 }).toDestination();
    return oscTwo;
  });

  osc2.frequency.value = 210.995;

  if (initValues.startStop) {
    osc.start();
    osc2.start();
  } else {
    osc.stop();
    osc2.stop();
  }

  const startStop = (event) => {
    if (!initValues.startStop) {
      dispatch(
        stopStart({
          startStop: true,
          instrumentTitle: "droneFour",
        })
      );
    } else {
      dispatch(
        stopStart({
          startStop: false,
          instrumentTitle: "droneFour",
        })
      );
    }
  };

  return (
    <>
      <Wrapper>
        <Button onClick={startStop}>&#9737;</Button>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  /* border-radius: 5px; */
  margin: 30px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  border: none;
  background: none;
  color: #b5a642;
  font-size: 40px;
  padding-right: 16px;
  padding-left: 16px;
  text-decoration: none;
  outline: none;
`;

const InputDiv = styled.div`
  /* height: 30px; */
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  -webkit-appearance: none;
  background-color: rgb(222, 235, 255, 0.1);
  border-radius: 12px;
  border: none;
  outline: none;
  width: 60px;
  transform: rotate(270deg);
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    outline: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #b5a642;
  }
`;

const DetuneInput = styled.input`
  -webkit-appearance: none;
  background-color: rgb(222, 235, 255, 0.1);
  border-radius: 12px;
  border: none;
  outline: none;
  width: 50px;
  transform: rotate(270deg);
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    outline: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #b5a642;
  }
`;

export default DroneFour;
