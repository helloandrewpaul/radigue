const initialState = {};

export default function presetReducer(state = initialState, action) {
  switch (action.type) {
    case "STORE_PRESETS": {
      return {
        ...state,
        presets: [action.presets],
      };
    }
    default: {
      return { ...state };
    }
  }
}

export const getPresetValues = (state) => {
  console.log(state);
  const presetValues = Object.keys(state);
  return presetValues;
};
