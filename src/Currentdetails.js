import React from "react";
import Icon from "./media/sunny-icon.jpeg";
import "./Currentdetails.css";

export default function Currentdetails(props) {
  let weather = {
    update: "Sunday 10am",
  };
  return (
    <div className="currentdetails">
      <h1>{props.city}</h1>
      <ul>
        <li>Last Updated: {weather.update}</li>
        <li className="text-capitalize">{props.description}</li>
      </ul>
      <br />
      <div className="row">
        <div className="col-6">
          <div className="current-temp clearfix">
            <img src={Icon} alt="icon" className="current-icon float-left" />
            <strong>{props.temperature}</strong>
            <span className="current-temp-unit"> ºC</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.humidity}%</li>
            <li>Wind: {props.wind} km</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
