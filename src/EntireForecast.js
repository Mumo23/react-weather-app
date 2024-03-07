import React from "react";
import Icon from "./Icon";

export default function EntireForecast() {
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
