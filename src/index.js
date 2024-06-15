import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/components/root/App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "alertifyjs/build/css/alertify.css";
import { Provider } from "react-redux";
import configureStore from "./redux/reducers/configureStore";
import { BrowserRouter } from "react-router-dom"; //npm i --save-dev @types/react-router-dom BUNUDA yuklemek lazimdi error vermemesi ucun icinde yazir ele ustune tutanda mousu

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
