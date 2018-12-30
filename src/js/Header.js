import React, { Component } from "react";
import Logo from "../img/logo-white.svg";

class Header extends Component {

  render() {

    return (
      <header>
        <div className="logo">
          <img src={Logo} alt="Eagle Golf Group" />
          <h1>Eagle Golf Group</h1>
        </div>
        <div className="nav">
          <i className="material-icons hamburger-menu">menu</i>
          <nav className="nav-main">
            <ul>
              <li>Home</li>
              <li>Our Ethos</li>
              <li>Events</li>
              <li>Testimonials</li>
              <li>Our Partners</li>
              <li>Contact Us</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
