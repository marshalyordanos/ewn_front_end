import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./context/Context";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ContextProvider>
        <App />
      </ContextProvider>
    </React.StrictMode>
  </Provider>
);
