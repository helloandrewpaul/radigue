import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { UserContext } from "../../context/user-context";
import { useDispatch, useSelector } from "react-redux";
import { storePresets, setPreset } from "../../actions";
import PresetButton from "../load-delete/preset-button";

const Load = (props) => {
  const { toggle, setToggle } = props;
  const dispatch = useDispatch();
  const { appUser } = useContext(UserContext);
  // const [loadedSettings, setLoadedSettings] = useState(null);
  const [status, setStatus] = useState(null);

  const presetValues = useSelector((state) => {
    return state.presetReducer;
  });

  const submitId = () => {
    fetch(`/getSave/${appUser.email}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        dispatch(storePresets(res.data));
        setToggle(false);
        setStatus("idle");
      });
  };

  useEffect(() => {
    submitId();
  }, [toggle]);

  return (
    <Wrapper>
      {!status || !appUser.email
        ? null
        : presetValues?.presets[0].map((preset) => {
            return (
              <PresetButton
                key={preset._id}
                params={preset.params}
                _id={preset._id}
                toggle={toggle}
                setToggle={setToggle}
              />
            );
          })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding-left: 30px;
  height: 40px;
  width: 600px;
  flex-wrap: wrap;
  overflow: auto;
  -webkit-box-shadow: 0px 0px 2px 3px rgba(0, 0, 0, 0.22);
  box-shadow: inset 0px 0px 2px 2px rgba(0, 0, 0, 0.22);
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: orange;
    background-color: rgb(222, 235, 255, 0.1);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    outline: none;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    border: 1px solid #b5a642;
  }
`;

export default Load;
