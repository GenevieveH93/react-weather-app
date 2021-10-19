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
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Genevieve Hines
      </div>
    </div>
  );
}
