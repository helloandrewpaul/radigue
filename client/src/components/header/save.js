import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Save = () => {
  const initValues = useSelector((state) => {
    return state;
  });

  console.log(initValues);

  return (
    <Wrapper>
      <Button
        onClick={(ev) => {
          ev.preventDefault();

          fetch("/save", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              initValues,
            }),
          })
            .then((res) => res.json())
            .then((res) => {
              console.log(res);
            });
        }}
      >
        &#10000;
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Segoe UI Symbol";
`;

const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  color: #b5a642;
  font-size: 30px;
  margin-right: 40px;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

export default Save;
