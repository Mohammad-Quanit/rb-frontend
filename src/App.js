import React from "react";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Otp from "./pages/Otp"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/otp' component={Otp} />
        <Route exact path='/signup' component={Signup} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  )
};
export default App;