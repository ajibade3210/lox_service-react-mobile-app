import { InputAdornment, makeStyles, TextField } from "@material-ui/core";
import Appbar from "../../components/appbar/Appbar";
import InputBase from "@material-ui/core/InputBase";
import AddIcon from "@material-ui/icons/Add";
import PaymentIcon from "@material-ui/icons/Payment";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import EventNoteIcon from "@material-ui/icons/EventNote";
import "./profile.css";

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
      width: "100%",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    roots: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 100,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  },
}));

export default function Profile() {
  const classes = useStyles();
  return (
    <div className="profileContainer">
      <div className="promoBrand">
        <div className="profileMenu">
          <Appbar brand="LOX SERVICES" />
        </div>

        <div className="profileInputs">
          <h1>Get Started</h1>
          <div className="profileInput">
            <img src="assets/1.png" alt="" srcset="" />
            <div className="profileInputForm">
              <div className="">
                <form className={classes.root} noValidate autoComplete="off">
                  <label className="orderTextLabel">
                    <Text color="#333" text="Full Name" />
                  </label>
                  <input
                    className="orderTextInput"
                    type="text"
                    placeholder="AMINA LATEEF"
                  />

                  <TextField
                    id="filled-basic"
                    className="profileTextField"
                    placeholder="26 Jun 2020"
                    label={<Text color="#18A0FB" text="Date of Birth" />}
                    defaultValue="26 Jun 2020"
                    style={{ width: "100%" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EventNoteIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </form>
                <div className="paper">
                  <IconButton className={classes.iconButton} aria-label="menu">
                    <PaymentIcon />
                  </IconButton>
                  <InputBase
                    className={classes.input}
                    placeholder="Add Debit/ Credit Card"
                    inputProps={{ "aria-label": "Add Debit/ Credit Card" }}
                  />
                  <IconButton
                    color="primary"
                    className={classes.iconButtons}
                    aria-label="directions"
                  >
                    <AddIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
          <Link to="/map" className="link">
            <button className="promoButton" variant="contained">
              SAVE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
