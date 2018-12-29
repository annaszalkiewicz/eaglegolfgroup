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
              <li className="nav-item">Home</li>
              <li className="nav-item">Our Ethos</li>
              <li className="nav-item">Events</li>
              <li className="nav-item">Testimonials</li>
              <li className="nav-item">Our Partners</li>
              <li className="nav-item">Contact Us</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
