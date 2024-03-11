import React from "react";
import Icon from "./Icon";

export default function EntireForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="EntireForecast-day">{day()}</div>
      <div className="EntireForecast-icon">
        <Icon code={props.data.weather[0].icon} size={24} />
      </div>
      <div className="EntireForecast-temperature">
        <span className="EntireForecast-max">{maxTemperature()}</span>
        <span className="EntireForecast-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
