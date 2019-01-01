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
          <button className="btn-primary">Contact Us <i className="material-icons btn-carousel">send</i></button>
        </div>
        <main>
          <div className="home-logo">
           <img src={Logo} alt="Eagle Golf Group logo"/>
           <h2>Eagle Golf Group</h2>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
