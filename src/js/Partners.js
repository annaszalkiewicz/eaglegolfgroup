import React, { Component } from "react";
import Idg from "../img/idg.png";
import Play from "../img/playonpro.png";

class Partners extends Component {
  render() {
    return (
      <section id="partners" className="our-partners-container">
        <header className="grid-item section-header our-partners-item-1">
          <h2>Our Partners</h2>
        </header>
        <div className="grid-item our-partners-item-2">
          <img src={Idg} alt="Internation Design Group" />
        </div>
        <div className="grid-item our-partners-item-3">
          <p>
            Working together with International Golf Design, Eagle Golf Group
            can offer a full range of design and consultancy services for the
            creation of world class golf developments including building
            architecture, master planning landscape architecture and golf course
            design throughout the world. From initial concept work to the
            delivery of entire resorts, project promotion and project
            management.
          </p>
        </div>
        <div className="grid-item our-partners-item-4">
          <p>
            International Golf Design deals with all aspects of the design,
            development and consultancy of purpose built residential, commercial
            and sports communities, predominantly those involving golf.
          </p>
          <p>
            The company was established to provide the best possible advice and
            assistance to new and existing facilities. Our broad array of
            interconnected disciplines creates a single point of design
            responsibility which eliminates the inevitable communication issues
            between the consultant team. This format is quicker, faster, cheaper
            and more coherent than traditional design methods.
          </p>
        </div>
        <button className="grid-item our-partners-item-5">
          <a
            href="https://www.internationaldesigngroup.co.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about International Golf Design
          </a>
        </button>
        <div className="grid-item our-partners-item-6">
          <img src={Play} alt="Playonpro" />
        </div>
        <div className="grid-item our-partners-item-7">
          <p>
            Playonpro is the only pro sports network created “by the players for
            the players”: Viv Anderson MBE and Trevor Steven support that mantra
            by assuming key roles within the business. Viv, an English football
            coach and former player, heads up the organisation.
          </p>
          <p>
            Playon’s aim is to maintain its ambassador’s professional profile
            and value after retirement. Only 12 months after launch its
            ambassadors boast more than 500 major trophies, 6,000 international
            caps and 100 million social media followers: this carries
            significant brand value.
          </p>
        </div>
        <button className="grid-item our-partners-item-8">
          <a
            href="https://playonpro.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about Playonpro
          </a>
        </button>
      </section>
    );
  }
}

export default Partners;
