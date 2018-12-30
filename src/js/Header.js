import React, { Component } from "react";
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
  }
  
  render() {
    const { isOpen } = this.state;

    return (
      <header>
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
              <ul>
                <li>Home</li>
                <li>Our Ethos</li>
                <li>Events</li>
                <li>Testimonials</li>
                <li>Our Partners</li>
                <li>Contact Us</li>
              </ul>
            </nav>
          )}
          {!isOpen && (
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
          )}
        </div>
      </header>
    );
  }
}

export default Header;
