import React from "react";
import Icon from "./media/sunny-icon.jpeg";
import "./Currentdetails.css";

export default function Currentdetails() {
  let weather = {
    update: "Sunday 10am",
    description: "Sunny",
    temp: 19,
    humidity: 80,
    wind: 2,
  };
  return (
    <div className="currentdetails">
      <ul>
        <li>Last Updated: {weather.update}</li>
        <li>{weather.description}</li>
      </ul>
      <br />
      <div className="row">
        <div className="col-6">
          <div className="current-temp clearfix">
            <img src={Icon} alt="icon" className="current-icon float-left" />
            <strong>{weather.temp}</strong>
            <span className="current-temp-unit"> ºC</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {weather.wind} km</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
