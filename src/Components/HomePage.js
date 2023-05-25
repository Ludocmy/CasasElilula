import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HomePage.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video
        src="../../public/Videos/testVid.mp4"
        muted
        autoPlay={"autoplay"}
        loop
      />
    </div>
  );
}

export default HeroSection;

/* <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p> */

/* <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div> */
