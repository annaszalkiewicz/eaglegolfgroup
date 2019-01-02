import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../img/logo-white.svg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen ? true : false });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <header className="header-main">
        <div className="logo">
          <img src={Logo} alt="Eagle Golf Group" />
          <h1>Eagle Golf Group</h1>
        </div>
        <div className="nav">
          <i
            className="material-icons hamburger-menu"
            onClick={this.onClickHandler}
          >
            menu
          </i>

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
      </header>
    );
  }
}

export default Header;
