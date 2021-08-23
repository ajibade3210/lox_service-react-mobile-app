import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import "./appbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import ListItemText from "@material-ui/core/ListItemText";

export default function Appbar({ color, brand }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div>
      <List>
        {["Edit profile", "Home", "Check location"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Sign Out"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} style={{ color: "red" }} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className="appbarContainer">
      {/* <React.Fragment key={"bottom"}> */}
      <Button onClick={toggleDrawer("bottom", true)}>
        <MenuIcon style={{ color: color, fontSize: "30px" }} />
      </Button>

      <span className="appbarSpan">
        <span className="appbrandContainer">{brand}</span>
      </span>

      <Drawer
        anchor={"bottom"}
        open={state["bottom"]}
        onClose={toggleDrawer("bottom", false)}
      >
        {list("bottom")}
      </Drawer>
      {/* </React.Fragment> */}
    </div>
  );
}
