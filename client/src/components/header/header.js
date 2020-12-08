import React from "react";
import styled from "styled-components";
import GetPosition from "./locater/get-position";
import About from "./about";
import Save from "./save";
import Load from "./load";

const Header = () => {
  return (
    <Wrapper>
      <div>
        <IconWrapper>
          <About />
          <Save />
          <GetPosition />
        </IconWrapper>
      </div>
      <div>
        <Load />
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
