import React from "react";
import "../App.css";
import "./HeroSection.css";
import heroVideo from "../assets/videos/intro-video.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={heroVideo} autoPlay loop muted />
      <h1>DO MY BEST EVER !</h1>
      <p>[Learn] [Experience] [Enjoy]</p>
    </div>
  );
}

export default HeroSection;
