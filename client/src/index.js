import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { Provider } from "react-redux";
import configureStore from "./store";
import UserProvider from "./context/user-context";

const store = configureStore();

ReactDOM.render(
  <UserProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </UserProvider>,
  document.getElementById("root")
);
