import React, { useState } from "react";
import axios from "axios";
import Currentdetails from "./Currentdetails";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [displayCity, setDisplayCity] = useState("Sydney");
  const [currentTemp, setCurrentTemp] = useState("19");
  const [currentDesc, setCurrentDesc] = useState("Sunny");
  const [currentHumidity, setCurrentHumidity] = useState("80");
  const [currentWind, setCurrentWind] = useState("2");

  function handleResponse(response) {
    setCurrentTemp(Math.round(response.data.main.temp));
    setCurrentDesc(response.data.weather[0].description);
    setCurrentHumidity(response.data.main.humidity);
    setCurrentWind(Math.round(response.data.wind.speed));
    setDisplayCity(city);
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
      <div>
        <Currentdetails
          city={displayCity}
          temperature={currentTemp}
          description={currentDesc}
          humidity={currentHumidity}
          wind={currentWind}
        />
      </div>
    </div>
  );
}
