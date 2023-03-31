import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import SignupPage from "./Components/Create-account/first-page/SignupPage";
import { BrowserRouter } from "react-router-dom";
import Main from "./Components/Main/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Provider } from 'react-redux';
import store from "./Store/Store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}> 
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
