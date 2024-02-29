import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import "./styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Weather from "./Weather";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <Weather defaultCity="Narok" />
      <footer>
        <p>
          This project was designed & coded by
          <a href="https://www.linkedin.com/in/miriam-mumo-6a0950b3/">
            Mumo Mailu
          </a>
          and is
          <a href="https://github.com/Mumo23/mumo-weatherapp-project">
            on GitHub
          </a>
          and hosted on
          <a href="https://app.netlify.com/user/settings#profile">Netlify</a>
        </p>
      </footer>
    </div>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
