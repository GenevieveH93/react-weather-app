import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState(null);
  const [currentData, setCurrentData] = useState("");

  function handleResponse(response) {
    setCurrentData(
      <ul>
        <li>Temperature: {Math.round(response.data.main.temp)}°C</li>{" "}
        <li>Description: {response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {response.data.wind.speed}km/h</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </li>
      </ul>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9f8717af0ae325e970e3979adb350412&units=metric`;
      axios.get(url).then(handleResponse);
    } else {
      alert(`Enter a city`);
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form className="search" onSubmit={handleSubmit}>
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
          <p className="current-geo-location">Current Location</p>
        </div>
      </form>
      <div>{currentData}</div>
      <div>
        <Loader
          type="ThreeDots"
          color="black"
          height={60}
          width={60}
          timeout={3000} //3 secs
        />
      </div>
    </div>
  );
}
