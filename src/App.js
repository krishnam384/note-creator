import React from "react";
import { routes } from "./routes";
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
          {routes.map((route, index) => (
            <Route path={route.path} component={route.component} key={index} />
          ))}
          <Redirect to='/login' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
