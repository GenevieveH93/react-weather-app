import React from "react";
import "./Currentdetails.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import CurrentTemperature from "./CurrentTemperature";

export default function CurrentDetails(props) {
  return (
    <div className="currentdetails">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <br />
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <WeatherIcon
              code={props.data.icon}
              className="current-icon float-left"
            />
            <CurrentTemperature celsius={props.data.temperature} />
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
