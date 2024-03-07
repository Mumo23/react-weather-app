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
                <li>Temperature: {Math.round(props.data.temperature)}°C</li>
                <li>Description: {props.data.description}</li>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind}Km/H</li>
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
      </main>
    </div>
  );
}
