import React from "react";
import Appbar from "../../components/appbar/Appbar";
import { Link } from "react-router-dom";
import "./promo.css";

export default function Promo({ prop }) {
  return (
    <div className="promoMsg">
      <div className="promoBrand">
        <div className="promoMenu">
          <Appbar brand="LOX SERVICES" />
        </div>

        <div className="promoDisplays">
          <div className="promoDisplay" variant="contained">
            {/* TODO PROP NOT CONNECTED YET  */}
            Total Amount: N5000{prop}
          </div>
          <Link to="/profile" className="link">
            <button className="promoButton" variant="contained">
              CLOSE
            </button>
          </Link>
        </div>
      </div>

      <div className="greyBarContainer">
        <div className="greyBar"></div>
      </div>
    </div>
  );
}
