import { Container } from "@material-ui/core";
import React, { useState } from "react";
import Allbutton from "../../components/allbuttons/Allbuttons";
import Brand from "../../components/brand/Brand";
import axios from "axios";
import { Link } from "react-router-dom";
import "./signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    //prevent default prevent it from refrreshing the page while submitting
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/users/signup", {
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Container maxWidth="sm">
      <Brand />
      <Link to="/login" className="link">
        <Allbutton name="LOG IN" color="black" />
      </Link>
      <div className="registerContainer">
        <h1 className="signupText">OR</h1>
        <form action="" className="signupBox" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            className="signupInput"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="signupInput"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Referral code (optional)"
            className="signupInput"
          />
          <Allbutton submit="submit" name="SIGN UP" color="#e84417" />
        </form>
      </div>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something Went Wrong
        </span>
      )}
      <h1 className="signupText">By joining you agree to our</h1>
      <h6 className="signupText">Terms and Privacy</h6>
    </Container>
  );
}
