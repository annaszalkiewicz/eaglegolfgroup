import React, { Component } from "react";
import Nav from "./Nav";
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
      <section>
        <header
          className="header-main"
          style={{
            background:
              window.location.pathname === "/"
                ? "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))"
                : window.location.pathname === "/ethos"
                ? "#757A2F"
                : window.location.pathname === "/events"
                ? "#677E20"
                : window.location.pathname === "/testimonials"
                ? "#273f29"
                : window.location.pathname === "/partners"
                ? "#14253f"
                : "#091327"
          }}
        >
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
          </div>
        </header>
        <Nav isOpen={isOpen} />
      </section>
    );
  }
}

export default Header;
