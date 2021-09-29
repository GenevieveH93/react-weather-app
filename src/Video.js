import React from "react";
import Image from "./media/blue-sky.png";
import "./Video.css";

export default function Video() {
  return (
    <div className="video">
      <div className="row video-container img-fluid">
        <img src={Image} className="temp-img" alt="sunny sky" />
      </div>
    </div>
  );
}

//please note my video file is too large for codesandbox so I have temporarily put image as placeholder
