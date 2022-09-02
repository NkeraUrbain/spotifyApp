import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import "./styles.css";
import Spotify from "./components/Spotify";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container p-4">
          <Route path="/" exact component={Login} />
          <Route path="/sign-up" exact component={Signup} />
          <Route path="/home" exact component={Signup} />
          <Spotify/>
        </div>
      </Router>
    );
  }
}

export default App;
