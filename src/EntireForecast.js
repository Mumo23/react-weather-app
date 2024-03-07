import React from "react";
import Icon from "./Icon";
import axios from "axios";

export default function EntireForecast(props) {
  function newWeather(response) {}

  let apiKey = "49eb13bf4a9b386162a0657c95c63c29";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}
&units=metric`;
  axios.get(apiUrl).then(newWeather);

  return (
    <div className="EntireForecast">
      <div className="row">
        <div className="col">
          <div className="EntireForecast-day">Thur</div>
          <Icon code="01d" size={24} />
          <div className="EntireForecast-temperature">
            <span className="EntireForecast-max">19°</span>
            <span className="EntireForecast-min">17°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
