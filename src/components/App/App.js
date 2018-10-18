import React, { Component } from "react";

import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <hr />
            {/* Routes will go here */}
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
