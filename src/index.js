import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Searchresults from "./components/searchresults";
import Search from "./components/Search";
import Tripdetails from "./components/tripdetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import MapContainer from "./components/map";


ReactDOM.render(
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Search</Link>
          </li>
          {/* <li>
            <Link to="/trips">Trips</Link>
          </li> */}
          <li>
            <Link to="/tripdetails">Trip Details</Link>
          </li>
          {/* <li>
            <Link to="/map">Map</Link>
          </li> */}
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/trips">
          <Searchresults />
        </Route>
        {/* <Route path="/map">
          <MapContainer />
        </Route> */}
        <Route path="/tripdetails">
          <Tripdetails />
        </Route>
        <Route path="/">
          <Search />
        </Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
