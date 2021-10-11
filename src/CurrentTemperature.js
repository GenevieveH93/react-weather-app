import React, { useState } from "react";

export default function CurrentTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToC(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="current-temp">
        <strong> {Math.round(props.celsius)}</strong>
        <span className="current-temp-unit">
          {" "}
          ºC |{" "}
          <a href="/" onClick={convertToF}>
            ºF
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="current-temp">
        <strong> {Math.round(fahrenheit)}</strong>
        <span className="current-temp-unit">
          {"  "}
          <a href="/" onClick={convertToC}>
            ºC
          </a>{" "}
          | ºF
        </span>
      </span>
    );
  }
}
