import React, { Component } from "react";
import testimonials from "../data/testimonials.json";

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonials: testimonials,
      colors: ['#b9c056', '#88a429', '#9bbe1f', '#273f29', '#14253f', '#091327']
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
              <button className="collapsible" onClick={this.toggleCollapsible} style={{backgroundColor: randomColor}}>
                <div className="avatar">
                <img src={require(`../img/${testimonial.avatar}`)} alt="avatar" />

                  {/* <img src="/static/media/placeholder.png" alt="avatar" /> */}
                </div>
                <h2>{testimonial.name}</h2>
                <h2 className="position">{testimonial.position}</h2>
                <hr />
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
