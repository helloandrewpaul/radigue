import React, { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { updateStatus } from "../../actions";
import { UserContext } from "../../context/user-context";
import { ImPencil2 } from "react-icons/im";

import ReactTooltip from "react-tooltip";

const Save = (props) => {
  const { toggle, setToggle } = props;
  const dispatch = useDispatch();
  const { appUser } = useContext(UserContext);

  const initValues = useSelector((state) => {
    return state.parameterReducer;
  });

  return (
    <Wrapper>
      {appUser && appUser.email ? (
        <>
          <StyledImPencil2
            onClick={(ev) => {
              ev.preventDefault();

              fetch("/save", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  params: initValues,
                  user: appUser.email,
                }),
              })
                .then((res) => res.json())
                .then(() => {
                  setToggle(true);
                });
            }}
            //dispatch a status to the preset reducer to update it so the useeffect in load
            //reloads
          />
        </>
      ) : (
        <Wrapper>
          <AboutText data-tip data-for="savedisabled">
            <StyledImPencil2grey />
          </AboutText>
          <ReactTooltip
            id="savedisabled"
            effect="solid"
            backgroundColor="#232426"
          >
            <Div>Login to enable saving</Div>
          </ReactTooltip>
        </Wrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

// const Button = styled.button`
//   background: none;
//   border: none;
//   outline: none;
//   color: #b5a642;
//   font-size: 30px;
//   margin-right: 40px;
//   &:hover {
//     color: white;
//     cursor: pointer;
//   }
//   &:disabled {
//     color: grey;
//   }
// `;

const StyledImPencil2 = styled(ImPencil2)`
  background: none;
  border: none;
  outline: none;
  color: #b5a642;
  font-size: 20px;
  margin-right: 40px;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const StyledImPencil2grey = styled(ImPencil2)`
  color: grey;
  background: none;
  border: none;
  outline: none;
  font-size: 20px;
`;

const Div = styled.div`
  border-radius: 5px;
  width: 180px;
  background: #232426;
  padding: 10px;
  -webkit-box-shadow: 0px 0px 2px 3px rgba(0, 0, 0, 0.22);
  box-shadow: inset 0px 0px 2px 2px rgba(0, 0, 0, 0.22);
`;

const AboutText = styled.p`
  color: grey;
  font-size: 30px;
  margin-right: 40px;
  &:hover {
    cursor: w-resize;
  }
`;

export default Save;
