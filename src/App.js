import React from "react";
import Search from "./Search";
import Video from "./Video";
import Currentdetails from "./Currentdetails";
import "./styles.css";

export default function App() {
  let location = "Sydney";
  return (
    <div className="App">
      <div className="app-wrapping">
        <Video />
        <Search />
        <h1>{location}</h1>
        <Currentdetails />
      </div>
    </div>
  );
}
