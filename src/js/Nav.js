import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    const { isOpen } = this.props;

    return (
      <div>
        {isOpen && (
          <nav className="nav-main open">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/ethos">Our Ethos</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/testimonials">Testimonials</NavLink>
            <NavLink to="/partners">Our Partners</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </nav>
        )}
        {!isOpen && (
          <nav className="nav-main">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/ethos">Our Ethos</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/testimonials">Testimonials</NavLink>
            <NavLink to="/partners">Our Partners</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </nav>
        )}
      </div>
    );
  }
}

export default Nav;
