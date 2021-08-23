import { Container } from "@material-ui/core";
import React from "react";
import Button from "../../components/buttons/Buttons";
import { Link } from "react-router-dom";
import Slideshow from "../../components/slideshow/Slideshow";
import "./welcome.css";

export default function Welcome() {
  return (
    <Container maxWidth="sm">
      <div className="welcomeContainer">
        <div className="welcomeSlide">
          <Slideshow />
        </div>
        <Button />

        <div className="welcomeButtons">
          <Link className="link" to="/signup">
            <button className="welcomeButton1" variant="contained">
              SIGN UP
            </button>
          </Link>
          <Link className="link" to="/login">
            <button className="welcomeButton" variant="contained">
              LOG IN
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
