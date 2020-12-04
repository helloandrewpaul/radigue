import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import DroneOne from "./sound-sources/drone-one";
import DroneTwo from "./sound-sources/drone-two";
import DroneThree from "./sound-sources/drone-three";
import DroneFour from "./sound-sources/drone-four";
import GlobalStyle from "./global-styles";

const App = () => {
  return (
    <>
      <Wrapper>
        <GlobalStyle />
        <DroneTwo />
        <DroneOne />
        <DroneThree />
        <DroneFour />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export default App;
