import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated as a } from "react-spring";

//figure out how to pass multiple children
//& how to pass multiple parameters

const FlipCard = ({ children, flipped }) => {
  //   const [flipped, set] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 600, friction: 80 },
  });

  return (
    <>
      {/* <Button onClick={() => set((state) => !state)}>button</Button> */}
      <CardFlip>
        <CardFront
          style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
        >
          {children}
        </CardFront>
        <CardBack
          style={{
            opacity,
            transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
          }}
        >
          this will be components
        </CardBack>
      </CardFlip>
    </>
  );
};

const CardFlip = styled.div`
  position: relative;
  /* display: flex;
  align-items: center;
  justify-content: center; */
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

const CardFront = styled(a.div)`
  position: absolute;
  display: flex;
  left: -125px;
`;

const CardBack = styled(a.div)`
  position: absolute;
  display: flex;
  left: -125px;
  width: 100%;
  height: 100%;
  background: white;
`;

export default FlipCard;
