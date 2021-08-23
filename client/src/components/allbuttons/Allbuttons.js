import React from "react";
import "./allbuttons.css";

export default function Allbutton({ name, color, submit }) {
  console.log(submit);
  return (
    <div className="allButtonContainer">
      <button
        type={submit}
        className={`allButton ${color}`}
        style={{ background: color }}
      >
        {name}
      </button>
    </div>
  );
}
