import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { droneOneDetune } from "../../../actions";

const DetuneAnimation = (props) => {
  const { detuneAmount } = props;
  const [initialDetune, setInitialDetune] = useState();
  const [detuneCompare, setDetuneCompare] = useState();
  const [animationAmount, setAnimationAmount] = useState();

  const initValues = useSelector((state) => {
    return state.parameterReducer.id;
  });

  useEffect(() => {
    setInitialDetune(detuneAmount);
  }, []);

  useEffect(() => {
    setAnimationAmount(detuneAmount - initialDetune);
  }, [detuneAmount]);

  //   console.log(animationAmount);

  return (
    <Wrapper>
      <DetuneOne>A</DetuneOne>
      <DetuneTwo>A</DetuneTwo>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
`;

const DetuneOne = styled.p`
  position: absolute;
`;

const DetuneTwo = styled.p`
  position: absolute;
`;

export default DetuneAnimation;
