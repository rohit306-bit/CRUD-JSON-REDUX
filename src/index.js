import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import store from "./redux/store";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store} >
    <App />
    </Provider>
    </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
