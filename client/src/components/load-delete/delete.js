import React from "react";
import styled from "styled-components";

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

  return <button onClick={deletePreset}>x</button>;
};

export default DeleteButton;
