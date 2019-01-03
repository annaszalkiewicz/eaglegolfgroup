import React, { Component } from "react";
import testimonials from "../data/testimonials.json";

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonials: testimonials,
      colors: ['#757A2F', '#677E20', '#677F10', '#273f29', '#14253f', '#091327']
    };
    this.toggleCollapsible = this.toggleCollapsible.bind(this);
  }

  toggleCollapsible = e => {
    e.target.classList.toggle("active-testimonial");
    const content = e.target.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };

  render() {
    const { testimonials, colors } = this.state;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return (
      <section id="testimonials" className="testimonial-container">
        <header className="grid-item section-header testimonial-item-1">
          <h2>Testimonials</h2>
        </header>

        {testimonials.map(testimonial => (
            <div className="testimonial-card" key={testimonial.name}>
              <button className="collapsible" onClick={this.toggleCollapsible} style={{border: 'solid 10px' + randomColor, color: randomColor}}>
                <div className="avatar">
                <img src={require(`../img/${testimonial.avatar}`)} alt="avatar" />
                </div>
                <h2 style={{color: randomColor}}>{testimonial.name}</h2>
                <h2 className="position" style={{color: randomColor}}>{testimonial.position}</h2>
                <hr style={{border: 'solid 1px' + randomColor}} />
              </button>
              <div className="content">
                <p>{testimonial.testimonial}</p>
              </div>
            </div>
          ))}
      </section>
    );
  }
}

export default Testimonials;
