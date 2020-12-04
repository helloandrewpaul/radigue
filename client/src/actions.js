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

export const panAdjust = ({ panL, instrumentTitle }) => ({
  type: "ADJUST_PAN",
  panL,
  instrumentTitle,
});

export const stopStart = ({ startStop, instrumentTitle }) => ({
  type: "START_STOP",
  startStop,
  instrumentTitle,
});
