import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Ethos from "./Ethos";
import Events from "./Events";
import Testimonials from "./Testimonials";
import Partners from "./Partners";
import Contact from "./Contact";
// import Eagle from "../img/logo-white-reversed.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <a href="#main-content" className="skip-link" aria-hidden="true">
          Skip to main content
        </a>

        <Header />

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

        <Footer />

        {/* <img src={Eagle} alt="Eagle" className="eagle" /> */}
      </div>
    );
  }
}

export default App;
