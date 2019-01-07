import React, { Component } from "react";
import Nav from "./Nav";
import Logo from "../img/logo-white.svg";
import Fade from "react-reveal/Fade";

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
                ? "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))"
                : window.location.pathname === "/ethos"
                ? "rgba(103, 126, 32, 0.8)"
                : window.location.pathname === "/events"
                ? "rgba(103, 127, 16, 0.8)"
                : window.location.pathname === "/testimonials"
                ? "rgba(39, 63, 41, 0.8)"
                : window.location.pathname === "/partners"
                ? "rgba(20, 37, 63, 0.8)"
                : "rgba(9, 19, 39, 0.8)",
            boxShadow:
              window.location.pathname !== "/"
                ? "#9c9c9c 0px 10px 30px"
                : "none"
          }}
        >
          <div className="logo">
            <Fade left>
              <img src={Logo} alt="Eagle Golf Group" />
              <h1>Eagle Golf Group</h1>
            </Fade>
          </div>
          <Fade right delay={500}>
            <div className="nav">
              <i
                className="material-icons hamburger-menu"
                onClick={this.onClickHandler}
              >
                menu
              </i>
            </div>
          </Fade>
        </header>
        <Nav isOpen={isOpen} />
      </section>
    );
  }
}

export default Header;
