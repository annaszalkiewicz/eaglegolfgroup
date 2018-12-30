import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Footer />
      </div>
    )
  }
}

export default Home;