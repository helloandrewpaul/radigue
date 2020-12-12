import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setPreset } from "../../actions";
import { VscSymbolMethod } from "react-icons/vsc";
import DeleteButton from "./delete";

//load might be trying to use the action for the preset reducer
//instead of for the parameter reducer??? I don't know
//but try setting the dispatch inside of this component instead

const PresetButton = (props) => {
  const { params, _id, toggle, setToggle } = props;
  const dispatch = useDispatch();
  //   console.log({ paramsinpresetbutton: params });

  const usePresetParameters = () => {
    dispatch(
      setPreset({
        droneOne: {
          volume: params.droneOne.volume,
          detune: params.droneOne.detune,
        },
        droneTwo: {
          volume: params.droneTwo.volume,
          detune: params.droneTwo.detune,
        },
        droneThree: {
          volume: params.droneThree.volume,
        },
        droneFour: {
          startStop: params.droneFour.startStop,
          volume: params.droneFour.volume,
        },
        droneFive: {
          startStop: params.droneFive.startStop,
          pitch: params.droneFive.pitch,
        },
        droneSix: {
          startStop: params.droneSix.startStop,
          pitch: params.droneSix.pitch,
        },
      })
    );
    null;
  };

  return (
    <Wrapper>
      <DeleteButton _id={_id} toggle={toggle} setToggle={setToggle} />
      <StyledVscSymbolMethod
        onClick={usePresetParameters}
      ></StyledVscSymbolMethod>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  /* padding-right: 10px; */
  /* position: relative; */
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
`;

const StyledVscSymbolMethod = styled(VscSymbolMethod)`
  /* position: relative; */
  /* padding: 10px; */
  height: 30px;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

export default PresetButton;
