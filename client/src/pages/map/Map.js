import React from "react";
import { Link } from "react-router-dom";
import Appbar from "../../components/appbar/Appbar";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import OpacityOutlinedIcon from "@material-ui/icons/OpacityOutlined";
import "./map.css";

export default function Map() {
  return (
    <div className="mapContainer">
      <div className="mapWrapper">
        <div className="profileMenu">
          <Appbar brand="LOX SERVICES" />
        </div>

        <div className="mapShowContainer">
          <div className="mapHeaders">
            <div className="mapHeader">
              <h5>LIVE LOCATION</h5>
              <h6>Here You Can Change Your Location</h6>
            </div>

            <div className="mapLocation">
              <h5>08:07:2021 9:23AM</h5>
              <h6>Jack Mamai</h6>
            </div>
          </div>
          <div className="map">
            <iframe
              title="Current Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126839.06821658298!2d3.3488896!3d6.5568768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1629662849309!5m2!1sen!2sng"
              style={{ border: 0, height: "450", width: "100%" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="mapShows">
            <div className="mapShow">
              <p>
                {" "}
                <FiberManualRecordIcon
                  style={{ fontSize: "small", color: "#18A0FB" }}
                />
                Your Location
              </p>
              <p>
                <FiberManualRecordIcon
                  style={{ fontSize: "small", color: "red" }}
                />
                Change Location
              </p>
              <p>
                <OpacityOutlinedIcon
                  style={{
                    fontSize: "small",
                    color: "white",
                    backgroundColor: "#d1cfcf",
                  }}
                />
                AGUNGI RD
              </p>
            </div>
            <div className="mapShowButton">
              <Link to="/login" className="link">
                <button>HOME</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="greyBarContainer">
        <div className="greyBar"></div>
      </div>
    </div>
  );
}
