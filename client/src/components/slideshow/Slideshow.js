import React from "react";
import "./slideshow.css";

export default function Slideshow() {
  return (
    <div className="outer_full_width">
      <div className="inner_max_width">
        <div className="slides">
          <div className=" slide slide_one">
            <h1 className="slideText">BASIC TASK</h1>
          </div>
          <div className="slide slide_two">
            <h1 className="slideText">
              LOX <br /> SERVICES
            </h1>
          </div>
          <div className="slide slide_three">
            <h1 className="slideText">
              GET <br /> INVOVLED
            </h1>
          </div>
          <div className="slide slide_four">
            <h1 className="slideText">
              A DESIGN <br /> FOR ALL
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
