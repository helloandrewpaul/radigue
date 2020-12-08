export const droneOneVolume = ({ volume, instrumentTitle }) => ({
  type: "ADJUST_VOLUME",
  volume,
  instrumentTitle,
});

export const droneOneDetune = ({ detune, instrumentTitle }) => ({
  type: "ADJUST_DETUNE",
  detune,
  instrumentTitle,
});

export const stopStart = ({ startStop, instrumentTitle }) => ({
  type: "START_STOP",
  startStop,
  instrumentTitle,
});

export const dronePitch = ({ pitch, instrumentTitle }) => ({
  type: "ADJUST_PITCH",
  pitch,
  instrumentTitle,
});

export const weatherParams = ({}) => ({
  type: "WEATHER_PARAMS",
  droneOne: {
    volume,
    detune,
  },
  droneTwo: {
    volume,
    detune,
  },
  droneThree: {
    volume,
  },
  droneFour: {
    startStop,
    volume,
  },
  droneFive: {
    startStop,
    pitch,
  },
  droneSix: {
    startStop,
    pitch,
  },
});
