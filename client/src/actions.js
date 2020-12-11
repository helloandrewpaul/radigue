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

export const weatherParams = (weatherState) => ({
  type: "WEATHER_PARAMS",
  weatherState,
});

export const storePresets = (presets) => ({
  type: "STORE_PRESETS",
  presets,
});

export const setPreset = (presets) => ({
  type: "USE_PRESET",
  presets,
});
