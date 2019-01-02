import React, { Component } from "react";
import Sos from '../img/sos.png';

class Testimonials extends Component {

  constructor(props) {
    super(props);
    this.toggleCollapsible = this.toggleCollapsible.bind(this);
  }

  toggleCollapsible = (e) => {    
    e.target.classList.toggle("active");
    const content = e.target.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  }
  
  render() {
    return (
      <section id="testimonials" className="testimonial-container">
        <header className="grid-item section-header testimonial-item-1">
          <h2>Testimonials</h2>
        </header>
        <button className="collapsible" onClick={this.toggleCollapsible}>
          <div className="avatar">
            <img src={Sos} alt="avatar" />
          </div>
          <h2>Test name</h2>
          <h2>Test position Test position</h2>
          <hr />
        </button>
        <div className="content">
          <p>Test testimonial here...</p>
        </div>

      </section>
    );
  }
}

export default Testimonials;
