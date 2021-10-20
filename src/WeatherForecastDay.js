import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <div>
        <WeatherIcon code={props.data.weather[0].icon} size={30} />
      </div>
      <div className="forecast-temp">
        <span className="forecast-temp-max">
          {Math.round(props.data.temp.max)}º
        </span>
        <span className="forecast-temp-min">
          {Math.round(props.data.temp.min)}º
        </span>
      </div>
    </div>
  );
}
