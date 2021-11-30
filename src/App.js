import React from "react";
import Weather from "./Weather";
import VideoHeader from "./VideoHeader";
import "./styles.css";

export default function App() {
  return (
    <div className="App container">
      <div className="app-wrapping">
        <VideoHeader />
        <Weather defaultCity="Sydney" />
      </div>
      <div className="repository-link">
        <a
          href="https://github.com/GenevieveH93/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by Genevieve for{" "}
        <a
          href="https://www.instagram.com/fernbaystudio/"
          target="blank"
          rel="noopener noreferrer"
        >
          Fern Bay Studio
        </a>
        . Hosted on Netlify.
      </div>
    </div>
  );
}
