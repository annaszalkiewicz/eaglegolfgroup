import React, { Component } from "react";
import MetaTags from "react-meta-tags";
import testimonials from "../data/testimonials.json";
import Fade from "react-reveal/Fade";

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonials: testimonials,
      colors: ["#757A2F", "#677E20", "#677F10", "#273f29", "#14253f", "#091327"]
    };
  }

  render() {
    const { toggleCollapsible } = this.props;
    const { testimonials, colors } = this.state;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return (
      <main id="testimonials main-content" className="testimonial-container">
        <MetaTags>
          <title>Testimonials | Eagle Golf Group</title>
          <meta
            name="description"
            content="Eagle Golf Group provies services on the highest level. Read what our clients says about us."
          />
        </MetaTags>
        <Fade left>
          <header className="grid-item section-header testimonial-item-1">
            <h2>Testimonials</h2>
          </header>
        </Fade>

        {testimonials.map(testimonial => (
          <div className="testimonial-card" key={testimonial.name}>
            <Fade left delay={200}>
              <button
                className="collapsible"
                onClick={toggleCollapsible}
                style={{
                  border: "solid 10px" + randomColor,
                  color: randomColor
                }}
              >
                <div className="avatar">
                  <img
                    src={require(`../img/${testimonial.avatar}`)}
                    alt="avatar"
                  />
                </div>
                <h2 style={{ color: randomColor }}>{testimonial.name}</h2>
                <h2 className="position" style={{ color: randomColor }}>
                  {testimonial.position}
                </h2>
                <hr style={{ border: "solid 1px" + randomColor }} />
              </button>
            </Fade>

            <div className="content">
              <p>{testimonial.testimonial}</p>
            </div>
          </div>
        ))}
      </main>
    );
  }
}

export default Testimonials;
