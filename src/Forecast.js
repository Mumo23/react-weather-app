import React from "react";
import DateInfo from "./DateInfo";
import Icon from "./Icon";

export default function forecast(props) {
  return (
    <div className="Forecast">
      <main>
        <div className="app-data">
          <div>
            <h1 className="city"> {props.data.city} </h1>
            <p>
              <ul>
                <li>
                  <DateInfo date={props.data.date} />
                </li>
                <li>Temperature: {Math.round(forecast.temperature)}°C</li>
                <li>Description: {forecast.description}</li>
                <li>Humidity: {forecast.humidity}%</li>
                <li>Wind: {forecast.wind}Km/H</li>
                <li>
                  <Icon code={props.data.icon} />
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
    </div>
  );
}
