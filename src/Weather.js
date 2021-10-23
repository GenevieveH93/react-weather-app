import React, { useState } from "react";
import axios from "axios";
import CurrentDetails from "./Currentdetails";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "9f8717af0ae325e970e3979adb350412";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleClick(event) {
    event.preventDefault();
    function apiGeoUrl(position) {
      let apiKey = "9f8717af0ae325e970e3979adb350412";
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      let apiGeoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      axios.get(apiGeoUrl).then(handleResponse);
    }
    navigator.geolocation.getCurrentPosition(apiGeoUrl);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row search-bar">
            <div className="col-10">
              <input
                type="search"
                placeholder="Enter a city..."
                onChange={updateCity}
                className="placeholder-text"
                autoComplete="off"
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="submit-button" />
            </div>
            <p className="current-geo-location" onClick={handleClick}>
              Current Location
            </p>
          </div>
        </form>
        <CurrentDetails data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <Loader
        type="ThreeDots"
        color="#548ca8"
        height={50}
        width={50}
        className="loader"
      />
    );
  }
}
