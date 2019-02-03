import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import MetaTags from "react-meta-tags";

class Ethos extends Component {
  render() {
    return (
      <section id="ethos">
        <MetaTags>
          <title>Our Ethos | Eagle Golf Group</title>
          <meta
            name="description"
            content="Eagle Golf Group remains a consistent leader throughout the past years in golf tourism and awareness of new golf destinations."
          />
        </MetaTags>
        <main className="ethos-container" id="main-content">
          <Fade right>
            <header className="grid-item ethos-item-1 section-header">
              <h2>Our Ethos</h2>
            </header>
          </Fade>
          <Fade left delay={100}>
            <div className="grid-item ethos-item-2">
              <p>
                Eagle Golf Group remains a consistent leader throughout the past
                years in golf tourism and awareness of new golf destinations. We
                maintain the shaping of golf development with the highest of
                trust, quality and have become trusted by the European PGA.
              </p>
              <p>
                Eagle Golf Group proceeds boldly towards its goals with
                versatility, creativity and a clear understanding of today’s
                worldwide golf needs
              </p>
              <p>
                To be always the preferred golf marketing company, and for our
                staff to feel proud of working for and being affiliated with
                Eagle Golf Group of Companies.
              </p>
              <p>
                Eagle Golf Group …”a bird’s eye view on celebrity charity
                sporting events. We are what we do.”
              </p>
            </div>
          </Fade>
          <Fade left delay={200}>
            <div className="grid-item ethos-item-3 team">
              <h2>T</h2>
              <p>Trust</p>
            </div>
          </Fade>
          <Fade bottom delay={300}>
            <div className="grid-item ethos-item-4 team">
              <h2>E</h2>
              <p>Enthusiasm</p>
            </div>
          </Fade>
          <Fade bottom delay={400}>
            <div className="grid-item ethos-item-5 team">
              <h2>A</h2>
              <p>Achievement</p>
            </div>
          </Fade>
          <Fade right delay={500}>
            <div className="grid-item ethos-item-6 team">
              <h2>M</h2>
              <p>Motivation</p>
            </div>
          </Fade>
        </main>
      </section>
    );
  }
}

export default Ethos;
