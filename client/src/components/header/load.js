import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Save = () => {
  const [searchId, setSearchId] = useState();

  console.log(searchId);

  const submitId = (ev) => {
    ev.preventDefault();
    console.log("hm");

    fetch(`/getSave/${searchId}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        //set this shit to state with a dispatch
      });
  };

  return (
    <Wrapper>
      <form onSubmit={submitId}>
        <input
          onChange={(e) => {
            setSearchId(e.target.value);
          }}
        />
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Save;
