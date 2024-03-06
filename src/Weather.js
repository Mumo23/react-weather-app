import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";

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
      humdity: response.data.main.humidity,
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

        <Forecast info={forecast} />
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
