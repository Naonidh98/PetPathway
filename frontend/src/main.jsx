import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./reducer/index.js";
import App from "./App.jsx";
import "./index.css";

const store  = configureStore({
  reducer : rootReducer
})

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
