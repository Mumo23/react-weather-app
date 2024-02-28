import React from "react";

export default function Weather() {
  return (
    <div className="app">
      <div className="form">
        <form id="search-form">
          <input
            type="search"
            placeholder="Enter a City ..."
            className="search-input"
            id="search-input"
          ></input>
          <input type="submit" value="Search" className="search-form"></input>
        </form>
      </div>

      <main>
        <div className="app-data">
          <div>
            <h1 className="city" id="city">
              Nairobi
            </h1>
            <p>
              <span className="current-date" id="current-date">
                Tuesday 11:55am{" "}
              </span>
              <br />
              Humidity:<span className="current-humidity" id="humidity"></span>
              Wind:<span className="wind-speed" id="wind-speed"></span>
            </p>
          </div>

          <div className="app-temperature">
            <div className="icon" id="icon"></div>
            <div className="current-temperature" id="current-temperature">
              12
            </div>
            <div className="unit">°C</div>
          </div>
        </div>
      </main>

      <div className="weather-forecast" id="forecast"></div>

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
  );
}
