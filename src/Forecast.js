import React from "react";
import DateInfo from "./DateInfo";
import Icon from "./Icon";

export default function forecast(props) {
  return (
    <div className="Forecast">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="city"> {props.data.city} </h1>
            <h2>
              <DateInfo date={props.data.date} />
            </h2>
            <ul>
              <li className="temperature">
                Temperature: {Math.round(props.data.temperature)}°C
              </li>
              <li className="descripton">
                Description: {props.data.description}
              </li>
              <li className="humidity">Humidity: {props.data.humidity}%</li>
              <li className="wind">Wind: {props.data.wind}Km/H</li>
            </ul>
          </div>
          <div className="icon col-md-6">
            <Icon code={props.data.icon} size={40} />
          </div>
        </div>
      </div>
    </div>
  );
}
