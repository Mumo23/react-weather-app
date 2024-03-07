import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import EntireForecaast from "./EntireForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [forecast, setForecast] = useState({ ready: false });

  function newWeather(response) {
    setForecast({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "49eb13bf4a9b386162a0657c95c63c29";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(newWeather);
  }

  if (forecast.ready) {
    return (
      <div className="waether-app">
        <div className="form">
          <form onSubmit={handleSubmit} id="search-form">
            <input
              type="text"
              placeholder="Enter a City ..."
              className="search-input"
              onChange={updateCity}
            />
            <input type="text" value={"Search"} className="search-form" />
          </form>
        </div>

        <Forecast data={forecast} />
        <EntireForecaast />
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
