import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// react-router-dom
import { BrowserRouter } from "react-router-dom";
// redux
import { Provider } from "react-redux";
import { store } from "./redux/configureStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
