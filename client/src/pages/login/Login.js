import { Container } from "@material-ui/core";
import React, { useContext, useRef } from "react";
import Allbutton from "../../components/allbuttons/Allbuttons";
import Brand from "../../components/brand/Brand";
import { Context } from "../../context/Context";
import axios from "axios";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFecthing } = useContext(Context);

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      console.log("Am IN");
      const res = await axios.post("/users/signin", {
        email: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <Container maxWidth="sm">
      <Brand />
      <Link to="/signup" className="link">
        <Allbutton name="SIGN UP" color="black" />
      </Link>
      <div className="registerContainer">
        <h1 className="signupText">OR</h1>
        <form className="signupBox" onSubmit={handleClick}>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            required
            className="signupInput"
            ref={userRef}
          />
          <input
            type="password"
            placeholder="Password"
            required
            minLength="6"
            className="signupInput"
            ref={passwordRef}
          />
          <Allbutton
            submit="submit"
            name="LOG IN "
            color="#e84417"
            disabled={isFecthing}
            className="loginAllButton"
          />
        </form>
      </div>
      <h1 className="signupText">Forgot Password?</h1>
    </Container>
  );
}
