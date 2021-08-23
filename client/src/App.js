import "./App.css";
import Login from "./pages/login/Login";
import Welcome from "./pages/welcome/Welcome";
import { Route, Switch } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Orderpage from "./pages/orderpage/Orderpage";
import Errormsg from "./messagefolder/error/Errormsg";
import Success from "./messagefolder/success/Success";
import Promo from "./messagefolder/promo/Promo";
import Profile from "./messagefolder/profile/Profile";
import Counter from "./components/counter/Counter";
import Map from "./pages/map/Map";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>

      <Route path="/login"> {user ? <Orderpage /> : <Login />} </Route>
      <Route path="/signup">
        <Signup />
      </Route>

      <Route path="/promo">
        <Promo />
      </Route>
      <Route path="/success">
        <Success />
      </Route>
      <Route path="/caution">
        <Errormsg />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/map">
        <Map />
      </Route>
      <Route path="/counter">
        <Counter />
      </Route>
    </Switch>
  );
}

export default App;

//  <Route path="/order">
//         <Orderpage />
//       </Route>
