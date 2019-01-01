import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Logo from "../img/logo-white.svg";

class Home extends Component {
  render() {
    return (
      <div className="container" id="home">
        <Header />
        <Carousel />
        <div className="hero-text">
          <h2>
            A bird's eye view on the world of celebrity charity sporting events
          </h2>
          <button className="btn-primary">
            Contact Us <i className="material-icons btn-carousel">send</i>
          </button>
        </div>
        <main>
          <div className="grid-container">
            <div className="grid-item home-logo">
              <div className="home-container">
                <img src={Logo} alt="Eagle Golf Group logo" />
                <h2>Eagle Golf Group</h2>
              </div>
            </div>
            <div className="grid-item home-intro">
              <p>
                Eagle Golf Group offers a unique service to our clients by
                introducing the full spectrum of consultancy services for the
                construction of international golf resorts, from initial concept
                to the delivery of a championship-standard golf resort. The
                construction, promotion and management of 5 star luxury hotels
                complement our unique business from an initial feasibility study
                to the completed golf course.
              </p>
              <p>
                Our team of professional Golf Tourism Advisors have worked at
                director level in the travel promotion industry for over 50
                years. We conduct regular road show events with our clients,
                promoting new Golf Resort destinations.
              </p>
            </div>
            <header id="goals"  className="grid-item goals-header section-header">
              <h2>Our Goals</h2>
            </header>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
