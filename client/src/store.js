import { createStore, combineReducers } from "redux";
import parameterReducer from "./reducers/parameter-reducer";
import presetReducer from "./reducers/preset-reducer";

const reducer = combineReducers({ parameterReducer, presetReducer });

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
