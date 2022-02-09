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
import Aqaba from "./Aqaba";

class App extends Component {

  constructor(props) {
    super(props);
    this.toggleCollapsible = this.toggleCollapsible.bind(this);
  }

  toggleCollapsible = e => {
    e.target.classList.toggle("active-testimonial");
    const content = e.target.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };

  render() {
    return (
      <div className="App">
        <a href="#main-content" className="skip-link">
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

        {/* <Route
          path={process.env.PUBLIC_URL + "/events"}
          render={() => <Events />}
        /> */}

        <Route
          path={process.env.PUBLIC_URL + "/testimonials"}
          render={() => <Testimonials toggleCollapsible= {this.toggleCollapsible}  />}
        />

        <Route
          path={process.env.PUBLIC_URL + "/partners"}
          render={() => <Partners />}
        />

        <Route
          path={process.env.PUBLIC_URL + "/contact"}
          render={() => <Contact />}
        />

        <Route
          path={process.env.PUBLIC_URL + "/jordan-charity-football-golf-event"}
          render={() => <Aqaba />}
        />

        <Footer />

        {/* <img src={Eagle} alt="Eagle" className="eagle" /> */}
      </div>
    );
  }
}

export default App;
