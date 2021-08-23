import {
  FormControl,
  InputLabel,
  makeStyles,
  NativeSelect,
} from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Allbutton from "../../components/allbuttons/Allbuttons";
import Appbar from "../../components/appbar/Appbar";
import "./orderpage.css";

const Text = ({ text, color }) => {
  return (
    <h3 style={{ color: color, fontSize: "14px" }} className="orderpageText">
      {text} <span>*</span>
    </h3>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  },
}));

export default function Orderpage() {
  const classes = useStyles();
  const [state, setState] = useState();

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className="orderpage">
      <div className="orderpageTop">
        <Appbar color="white" />
        <div className="orderpageHeader">
          <h3>
            Order from lox service <br /> now
          </h3>
        </div>
      </div>

      <div className="orderpageDown">
        <h1>Order Now</h1>
        <div className="orderpageInput">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="filled-basic"
              className="orderTextField"
              placeholder="Hair Service"
              label={<Text color="#18A0FB" text="Task Title" />}
              defaultValue="Hair Service"
              style={{ width: "50%" }}
            />
          </form>
          <h3>Time estimate</h3>
          <FormControl style={{ width: "50%" }} className={classes.formControl}>
            <InputLabel shrink htmlFor="age-native-label-placeholder">
              {<Text color="grey" text="Time Estimate" />}
            </InputLabel>
            <NativeSelect onChange={handleChange}>
              <option>2Hrs - 3Hrs</option>
              <option>4Hrs - 5Hrs</option>
              <option>6Hrs - 7Hrs</option>
            </NativeSelect>
          </FormControl>
        </div>
        <Link className="link" to="/caution">
          <Allbutton name="PROCEED" color="black" />
        </Link>
        <div className="greyBarContainer">
          <div className="greyBar"></div>
        </div>
      </div>
    </div>
  );
}
