import React from "react";
import { Notes } from "./notes/notes";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import NetworkError from "./components/ErrorPages/NetworkError";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <ReactNotification />
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/home' component={Home} />
          <Route path='/notes' component={Notes} />
          <Route path='/500' component={NetworkError} />
          <Redirect to='/login' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
