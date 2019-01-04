import React, { Component } from 'react';
import Logo from '../img/mywebgraphicdesign-logo.svg';

class Footer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      year: '' 
    }
    this.getDate = this.getDate.bind(this);
  }
  
  componentDidMount() {
    this.getDate();
  }

  getDate() {
    const date = new Date();
    this.setState({ year: date.getFullYear() });
  }
  
  render() {

    const { year } = this.state;
    return (
      <footer>
        <div className="copyright">
          <p>Copyright &copy; {year} Eagle Golf Group All rights reserved</p>
        </div>
        <div className="credit">
          <p>Designed &amp; developed by &nbsp;
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