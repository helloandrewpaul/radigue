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
      <div>
        <IconWrapper>
          <Login toggle={toggle} setToggle={setToggle} />
          <Save toggle={toggle} setToggle={setToggle} />
          <About />
          <GetPosition />
          <Load toggle={toggle} setToggle={setToggle} />
        </IconWrapper>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default Header;
