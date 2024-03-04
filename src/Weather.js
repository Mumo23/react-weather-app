import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import Icon from "./Icon";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [forecast, setForecast] = useState({ ready: false });

  function newWeather(response) {
    setForecast({
      ready: true,

      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humdity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"`,
    });
  }

  function search() {
    const apiKey = "49eb13bf4a9b386162a0657c95c63c29";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(newWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function updateCity(event) {
    setCity(event.target.value);
    search();
  }

  if (forecast.ready) {
    return (
      <div className="waether-app">
        <div className="form">
          <form onSubmit={handleSubmit} id="search-form">
            <input
              type="search"
              placeholder="Enter a City ..."
              className="search-input"
              id="search-input"
            ></input>
            <input
              type="text"
              value="Search"
              className="search-form"
              onChange={updateCity}
            ></input>
          </form>
        </div>

        <main>
          <div className="app-data">
            <div>
              <h1 className="city"> {forecast.city} </h1>
              <p>
                <ul>
                  <li>
                    <Forecast date={forecast.date} />
                  </li>
                </ul>

                <span className="current-date" id="current-date">
                  Tuesday 11:55am{" "}
                </span>

                <ul>
                  <li>Temperature: {Math.round(forecast.temperature)}°C</li>
                  <li>Description: {forecast.description}</li>
                  <li>Humidity: {forecast.humidity}%</li>
                  <li>Wind: {forecast.wind}Km/H</li>
                  <li>
                    <Icon code={props.data.icon} />
                    <img src={forecast.icon} alt={forecast.description} />
                  </li>
                </ul>
              </p>
            </div>

            <div className="app-temperature">
              <div className="icon" id="icon"></div>
              <div className="current-temperature" id="current-temperature">
                {Math.round(forecast.temperature)}
              </div>
              <div className="unit">°C</div>
            </div>
          </div>
        </main>

        <div className="weather-forecast"></div>
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
    search();
    return "Loading..";
  }
}
