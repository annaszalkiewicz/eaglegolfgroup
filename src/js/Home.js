import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Carousel />
        <div className="hero-text">
          <h2>
            A bird's eye view on the world of celebrity charity sporting events
          </h2>
          <button className="btn-primary">Contact Us <i className="material-icons btn-carousel">send</i></button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
