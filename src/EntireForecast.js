import React, { useState } from "react";
import axios from "axios";
import EntireForecastDay from "./EntireForecastDay.js";

export default function EntireForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  function newForecast(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="EntireForecast">
        <div className="row">
          <div className="col">
            <EntireForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "49eb13bf4a9b386162a0657c95c63c29";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(newForecast);

    return null;
  }
}
