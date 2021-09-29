import React from "react";
import Search from "./Search";
import Video from "./Video";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="app-wrapping">
        <Video />
        <Search />
      </div>
    </div>
  );
}
