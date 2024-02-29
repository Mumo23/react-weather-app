import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [forecast, setForecast] = useState({ ready: false });

  function newWeather(response) {
    setForecast({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humdity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: response.data.weather[0].icon,
    });
  }

  if (forecast.ready) {
    return (
      <div className="waether-app">
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
              <h1 className="city"> {forecast.city} </h1>
              <p>
                <span className="current-date" id="current-date">
                  Tuesday 11:55am{" "}
                </span>

                <ul>
                  <li>Temperature: {Math.round(forecast.temperature)}°C</li>
                  <li>Description: {forecast.description}</li>
                  <li>Humidity: {forecast.humidity}%</li>
                  <li>Wind: {forecast.wind}Km/H</li>
                  <li>
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
      </div>
    );
  } else {
    const apiKey = "49eb13bf4a9b386162a0657c95c63c29";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(newWeather);

    return "Loading..";
  }
}
