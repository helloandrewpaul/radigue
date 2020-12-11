import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as Tone from "tone";
import { stopStart } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { droneOneVolume } from "../../actions";

const DroneFour = () => {
  const dispatch = useDispatch();

  const initValues = useSelector((state) => {
    return state.parameterReducer.droneFour;
  });

  // console.log(initValues);

  const channelOne = new Tone.Channel(-1, -0.75).toDestination();

  var vibrato = new Tone.Vibrato(0.01, 1).connect(channelOne);

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

  useEffect(() => {
    osc.volume.value = initValues.volume || -59;
    osc2.volume.value = initValues.volume || -59;
  }, [initValues.volume]);

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

  const volume = (event) => {
    dispatch(
      droneOneVolume({
        volume: event.target.value,
        instrumentTitle: "droneFour",
      })
    );
  };

  return (
    <>
      <Wrapper>
        <Button onClick={startStop}>&#9737;</Button>
        <Input
          type="range"
          onChange={volume}
          value={initValues.volume}
          min="-60"
          max="-15"
          step="0.01"
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  /* border-top: 1px solid white;
  border-bottom: 1px solid white; */
  /* border-radius: 5px; */
  height: 90px;
  margin: 30px;
  padding: 10px;
  display: flex;
  flex-direction: column;

  align-items: center;
  /* justify-content: space-around; */
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
  width: 40px;
  height: 8px;
  /* transform: rotate(270deg); */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    outline: none;
    width: 10px;
    height: 10px;
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
