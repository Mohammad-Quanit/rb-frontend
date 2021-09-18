import React from "react";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Otp from "./pages/Otp"
import Load from "./pages/Load"
import Funds from "./pages/Funds"
import Cash from "./pages/Cash"
import Bank from "./pages/Bank"
import Profile from "./pages/Profile"
import Congrats from "./pages/Congrats"
import Confirmation from "./pages/Confirmation"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/otp' component={Otp} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/load' component={Load} />
        <Route exact path='/cash' component={Cash} />
        <Route exact path='/bank' component={Bank} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/funds' component={Funds} />
        <Route exact path='/congrats' component={Congrats} />
        <Route exact path='/confirmation' component={Confirmation} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  )
};
export default App;