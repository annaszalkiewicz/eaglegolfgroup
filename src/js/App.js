import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Ethos from "./Ethos";
import Events from "./Events";
import Testimonials from "./Testimonials";
import Partners from "./Partners";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            render={() => <Home />}
          />

          <Route
            path={process.env.PUBLIC_URL + "/ethos"}
            render={() => <Ethos />}
          />

          <Route
            path={process.env.PUBLIC_URL + "/events"}
            render={() => <Events />}
          />

          <Route
            path={process.env.PUBLIC_URL + "/testimonials"}
            render={() => <Testimonials />}
          />

          <Route
            path={process.env.PUBLIC_URL + "/partners"}
            render={() => <Partners />}
          />

          <Route
            path={process.env.PUBLIC_URL + "/contact"}
            render={() => <Contact />}
          />
      </div>
    );
  }
}

export default App;
