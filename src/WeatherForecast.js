import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "9f8717af0ae325e970e3979adb350412";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <hr className="mt-5 mb-4" />
      <div className="row">
        <div className="col-2">
          <div className="forecast-day">Wed</div>
          <div>
            <WeatherIcon code="01d" size={30} />
          </div>
          <div className="forecast-temp">
            <span className="forecast-temp-max">19º</span>
            <span className="forecast-temp-min">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
