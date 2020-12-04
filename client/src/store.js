import { createStore } from "redux";
import parameterReducer from "./reducers/parameter-reducer";

const reducer = parameterReducer;

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
