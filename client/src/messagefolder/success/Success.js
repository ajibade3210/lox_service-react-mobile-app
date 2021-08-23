import React from "react";
import Appbar from "../../components/appbar/Appbar";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import "./success.css";
import { useHistory } from "react-router-dom";

export default function Success() {
  const history = useHistory();

  setTimeout(() => {
    history.push("/promo");
  }, 5000);

  return (
    <div className="successMsg">
      <div className="">
        <div className="successBrand">
          <Appbar brand="LOX SERVICES" />
        </div>

        <div className="successWrapper">
          <div className="successIcons">
            <CheckCircleOutlineRoundedIcon
              style={{ color: "#1BC47D", fontSize: "60px" }}
            />
          </div>
          <h2>ENDED SUCCESSFULLY</h2>
        </div>
      </div>
      <div className="greyBarContainer">
        <div className="greyBar"></div>
      </div>
    </div>
  );
}
