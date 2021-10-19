import React from "react";
import "./Video.css";
import Video from "./media/video.mp4";

export default function VideoHeader() {
  return (
    <div className="video">
      <div className="row video-container img-fluid">
        <video
          src={Video}
          type="video/mp4"
          muted
          autoPlay={true}
          loop={true}
          alt="weather"
        />
      </div>
    </div>
  );
}
