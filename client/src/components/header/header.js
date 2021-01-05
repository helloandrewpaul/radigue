import React, { useState } from "react";
import styled from "styled-components";
import GetPosition from "./locater/get-position";
import About from "./about";
import Save from "./save";
import Load from "./load";
import Login from "./login";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Wrapper>
      <AboutWrapper></AboutWrapper>
      <IconWrapper>
        <Login toggle={toggle} setToggle={setToggle} />
        <Save toggle={toggle} setToggle={setToggle} />
        <GetPosition />
        <About />
      </IconWrapper>
      <LoadWrapper>
        <Load toggle={toggle} setToggle={setToggle} />
      </LoadWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AboutWrapper = styled.div`
  width: 25%;
`;

const LoadWrapper = styled.div`
  height: 50px;
  width: 300px;
  display: flex;
  align-items: center;
  padding-right: 30px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default Header;
