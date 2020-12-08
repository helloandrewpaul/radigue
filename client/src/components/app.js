import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import DroneOne from "./sound-sources/drone-one";
import DroneTwo from "./sound-sources/drone-two";
import DroneThree from "./sound-sources/drone-three";
import DroneFour from "./sound-sources/drone-four";
import DroneFive from "./sound-sources/drone-five";
import DroneSix from "./sound-sources/drone-six";
import Header from "./header/header";
import GlobalStyle from "./global-styles";

//import APIKEY
//useEffect

const App = () => {
  return (
    <>
      <Wrapper>
        <GlobalStyle />
        <Header />
        <SynthWrapper>
          <DroneThree />
          <HorizontalDivider />
          <ColumnWrapper>
            <DroneTwo />
            <Divider />
            <DroneOne />
          </ColumnWrapper>
          <HorizontalDivider />
          <DroneFour />
          <HorizontalDivider />
          <StackWrapper>
            <StackTag>&#8812;</StackTag>
            <Stack>
              <DroneFive />
              <DroneSix />
            </Stack>
          </StackWrapper>
        </SynthWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  height: 100vh;
  width: 100vw;
`;

const SynthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  align-items: center;
  justify-content: center;
`;

const StackWrapper = styled.div`
  display: flex;
  padding-left: 30px;

  /* flex-direction: column; */
  /* height: 50%; */
`;

const StackTag = styled.p`
  font-size: 40px;
  padding-right: 10px;
`;
const Stack = styled.div`
  display: flex;
  flex-direction: column;
`;

const Divider = styled.div`
  width: 70%;
  margin: 0;
  background: white;
  padding: 1px;
`;

const HorizontalDivider = styled.div`
  width: 1px;
  height: 20%;
  margin: 0;
  background: white;
`;

export default App;
