import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";

class Nav extends Component {

  render() {

    const { isOpen } = this.props;

    return (
      <div>
        {isOpen && (
          <nav className="nav-main open">
            <Fade top cascade>
              <NavLink exact to="/">
                Home
              </NavLink>
              <NavLink to="/ethos">Our Ethos</NavLink>
              <NavLink to="/events">Events</NavLink>
              <NavLink to="/testimonials">Testimonials</NavLink>
              <NavLink to="/partners">Our Partners</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
            </Fade>
          </nav>
        )}
        {!isOpen && (
                      <Fade top duration={2000} cascade>

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
          </Fade>

        )}
      </div>
    );
  }
}

export default Nav;
