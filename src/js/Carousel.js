import React, { Component } from "react";
import Golf from "../img/golf-carousel.jpg";
import Football from "../img/football-carousel.jpg";

class Carousel extends Component {
  render() {
    return (
      <div className="carousel">
        <div className="slider-container">
          <img src={Golf} alt="golf" />
          
        </div>
      </div>
      
    );
  }
}

export default Carousel;
