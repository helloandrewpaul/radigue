const initialState = {
  droneOne: {
    volume: -59,
    detune: 277.485,
  },
  droneTwo: {
    volume: -59,
    detune: 184.995,
  },
  droneThree: {
    volume: -59,
  },
  droneFour: {
    startStop: false,
    volume: -59,
  },
  droneFive: {
    startStop: false,
    pitch: 220,
  },
  droneSix: {
    startStop: false,
    pitch: 220,
  },
};

export default function parameterReducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case "ADJUST_VOLUME": {
      return {
        ...state,
        [action.instrumentTitle]: {
          ...state[action.instrumentTitle],
          volume: action.volume,
        },
      };
    }
    case "ADJUST_DETUNE": {
      return {
        ...state,
        [action.instrumentTitle]: {
          ...state[action.instrumentTitle],
          detune: action.detune,
        },
      };
    }
    case "ADJUST_PAN": {
      return {
        ...state,
        [action.instrumentTitle]: {
          ...state[action.instrumentTitle],
          panL: action.panL,
        },
      };
    }
    case "START_STOP": {
      return {
        ...state,
        [action.instrumentTitle]: {
          ...state[action.instrumentTitle],
          startStop: action.startStop,
        },
      };
    }
    case "ADJUST_PITCH": {
      return {
        ...state,
        [action.instrumentTitle]: {
          ...state[action.instrumentTitle],
          pitch: action.pitch,
        },
      };
    }
    case "WEATHER_PARAMS": {
      return action.weatherState;
    }
    case "USE_PRESET": {
      return action.presets;
    }
    default: {
      return { ...state };
    }
  }
}

export const getInitValues = (state) => {
  console.log(state);
  const initValues = Object.values(state);
  return initValues;
};
