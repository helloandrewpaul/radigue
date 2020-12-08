import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as Tone from "tone";
import { stopStart, dronePitch } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

const DroneSix = () => {
  const dispatch = useDispatch();

  const initValues = useSelector((state) => {
    return state.droneSix;
  });

  const channel = new Tone.Channel(-1, 1).toDestination();
  const reverb = new Tone.Reverb(3).connect(channel);

  const [osc, setOsc] = useState((osc) => {
    const osc1 = new Tone.Oscillator({ volume: -15 }).connect(reverb);
    return osc1;
  });

  useEffect(() => {
    osc.frequency.value = initValues.pitch || 184.995;
    // console.log(initValues);
  }, [initValues.pitch]);

  if (initValues.startStop) {
    osc.start();
  } else {
    osc.stop();
  }

  const startStop = (event) => {
    if (!initValues.startStop) {
      dispatch(
        stopStart({
          startStop: true,
          instrumentTitle: "droneSix",
        })
      );
    } else {
      dispatch(
        stopStart({
          startStop: false,
          instrumentTitle: "droneSix",
        })
      );
    }
  };

  const pitch = (event) => {
    dispatch(
      dronePitch({
        pitch: event.target.value,
        instrumentTitle: "droneSix",
      })
    );
  };

  return (
    <>
      <Wrapper>
        <Button onClick={startStop}>&#8728;</Button>
        <Input
          type="range"
          onChange={pitch}
          value={initValues.pitch}
          min="130"
          max="440"
          step="0.01"
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  background: none;
  color: #b5a642;
  font-size: 40px;
  margin-bottom: 9px;
  text-decoration: none;
  outline: none;
`;

const Input = styled.input`
  -webkit-appearance: none;
  background-color: rgb(222, 235, 255, 0.1);
  border-radius: 12px;
  border: none;
  outline: none;
  width: 60px;
  height: 5px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    outline: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid #b5a642;
  }
`;

export default DroneSix;
