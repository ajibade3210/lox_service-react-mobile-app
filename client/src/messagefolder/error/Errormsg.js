import React from "react";
import Appbar from "../../components/appbar/Appbar";
import { Link } from "react-router-dom";
import ErrorOutlineRoundedIcon from "@material-ui/icons/ErrorOutlineRounded";

import "./errormsg.css";

export default function Errormsg() {
  return (
    <div className="errorMsg">
      <div className="">
        <div className="errorBrand">
          <Appbar brand="LOX SERVICES" />
        </div>

        <div className="errorWrapper">
          <div className="errorIcon">
            <ErrorOutlineRoundedIcon
              style={{ color: "e31d1d", fontSize: "170px" }}
            />
            <h2>start Task?</h2>
          </div>
          <div className="errorButton">
            <Link to="/order" className="link">
              <button>No</button>
            </Link>
            <Link to="counter" className="link">
              <button className="buttonYes">Yes</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="greyBarContainer">
        <div className="greyBar"></div>
      </div>
    </div>
  );
}
