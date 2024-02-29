import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState();

  function newWeather(response) {
    setTemperature(response.data.main.temp);
  }

  if (ready) {
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
              <h1 className="city"> Nairobi </h1>
              <p>
                <span className="current-date" id="current-date">
                  Tuesday 11:55am{" "}
                </span>
                <br />
                Humidity:
                <span className="current-humidity" id="humidity"></span>
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
  } else {
    const apiKey = "49eb13bf4a9b386162a0657c95c63c29";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(newWeather);

    return "Loading..";
  }
}
