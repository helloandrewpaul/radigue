import React from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

const About = () => {
  const openAbout = () => {
    console.log("opened");
  };

  return (
    <Wrapper>
      {/* <Button onClick={openAbout}>?</Button> */}
      <AboutText data-tip data-for="about">
        ?
      </AboutText>
      <ReactTooltip id="about" effect="solid" backgroundColor="#232426">
        <Div>This is the about section!</Div>
      </ReactTooltip>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Segoe UI Symbol";
  background: #232426;
`;

const Div = styled.div`
  border-radius: 5px;
  width: 180px;
  /* color: white; */
  background: #232426;
  padding: 10px;
  -webkit-box-shadow: 0px 0px 2px 3px rgba(0, 0, 0, 0.22);
  box-shadow: inset 0px 0px 2px 2px rgba(0, 0, 0, 0.22);
`;

const AboutText = styled.p`
  color: #b5a642;
  font-size: 30px;
  margin-right: 40px;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

export default About;
