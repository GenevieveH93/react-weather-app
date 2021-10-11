import React from "react";
import Icon from "./media/sunny-icon.jpeg";
import "./Currentdetails.css";

export default function CurrentDetails(props) {
  let weather = {
    update: "Sunday 10am",
  };
  return (
    <div className="currentdetails">
      <h1>{props.data.city}</h1>
      <ul>
        <li>Last Updated: {weather.update}</li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <br />
      <div className="row">
        <div className="col-6">
          <div className="current-temp clearfix">
            <img src={Icon} alt="icon" className="current-icon float-left" />
            <strong>{Math.round(props.data.temperature)}</strong>
            <span className="current-temp-unit"> ºC</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind: {Math.round(props.data.wind)} km</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
