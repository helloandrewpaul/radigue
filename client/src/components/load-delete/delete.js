import React from "react";
import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";

const DeleteButton = (props) => {
  const { _id, toggle, setToggle } = props;
  //   console.log(_id);

  const deletePreset = () => {
    fetch(`/delete/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      //   console.log(res);
      setToggle(true);
      return res.status;
    });
  };

  return <StyledRiCloseLine onClick={deletePreset}>x</StyledRiCloseLine>;
};

const StyledRiCloseLine = styled(RiCloseLine)`
  height: 10px;
  /* position: absolute; */
  margin-bottom: 10px;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

export default DeleteButton;
