import React, { Component } from 'react';
import Logo from '../img/logo-white.svg';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <img src={Logo} alt="Eagle Golf Group"/>
          <h1>Eagle Golf Group</h1>
        </div>
      </header>
    );
  }
}

export default Header;