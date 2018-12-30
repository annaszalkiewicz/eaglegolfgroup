import React, { Component } from 'react';
import Logo from '../img/mywebgraphicdesign-logo.svg';

class Footer extends Component {
  
  render() {
    return (
      <footer>
        <div className="copyright">
          <p>Copyright &copy; Eagle Golf Group All rights reserved</p>
        </div>
        <div className="credit">
          <p>Designed by 
            <a href="https://mywebgraphicdesign.com" target="_blank" rel="noopener noreferrer">
              <img src={Logo} alt="My Web Graphic Design"/>
            </a>
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer;