import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Logo from "../img/logo-white.svg";
import Charity from "../img/charity-icon.svg";
import Flag from "../img/flag-icon.svg";
import Football from "../img/football-icon.svg";
import Golf from "../img/golf-icon.svg";
import Dolar from "../img/monetization-icon.svg";
import Tv from "../img/tv-icon.svg";
import World from "../img/world-icon.svg";
import Sos from "../img/sos.png";
import Olympics from "../img/special-olympics.png";

class Home extends Component {
  render() {
    return (
      <div className="container" id="home">
        <Header />
        <Carousel />
        <div className="hero-text">
          <h2>
            A bird's eye view on the world of celebrity charity sporting events
          </h2>
          <button className="btn-primary">
            Contact Us <i className="material-icons btn-carousel">send</i>
          </button>
        </div>
        <main>
          <div className="grid-container">
            <div className="grid-item home-logo">
              <div className="home-container">
                <img src={Logo} alt="Eagle Golf Group logo" />
                <h2>Eagle Golf Group</h2>
              </div>
            </div>
            <div className="grid-item home-intro">
              <p>
                Eagle Golf Group offers a unique service to our clients by
                introducing the full spectrum of consultancy services for the
                construction of international golf resorts, from initial concept
                to the delivery of a championship-standard golf resort. The
                construction, promotion and management of 5 star luxury hotels
                complement our unique business from an initial feasibility study
                to the completed golf course.
              </p>
              <p>
                Our team of professional Golf Tourism Advisors have worked at
                director level in the travel promotion industry for over 50
                years. We conduct regular road show events with our clients,
                promoting new Golf Resort destinations.
              </p>
            </div>
            <header
              id="goals"
              className="grid-item goals-header section-header"
            >
              <h2>Our Goals</h2>
            </header>
            <div className="grid-item goals-list goals-item-1">
              <img src={Charity} alt="Charity" />
              <p>
                Organizing charity sporting events to support charities in
                various countries
              </p>
            </div>
            <div className="grid-item goals-list goals-item-2">
              <img src={Dolar} alt="Charity" />
              <p>Raising funds for charities</p>
            </div>
            <div className="grid-item goals-list goals-item-3">
              <img src={Golf} alt="Charity" />
              <p>Supporting incoming tourism and golf awareness</p>
            </div>
            <div className="grid-item goals-list goals-item-4">
              <img src={Flag} alt="Charity" />
              <p>Working in partnership with overseas governements</p>
            </div>
            <div className="grid-item goals-list goals-item-5">
              <img src={World} alt="Charity" />
              <p>Raising the profile of the country</p>
            </div>
            <div className="grid-item goals-list goals-item-6">
              <img src={Football} alt="Charity" />
              <p>Partnership with The England Legends Football Team</p>
            </div>
            <div className="grid-item goals-list goals-item-7">
              <img src={Tv} alt="Charity" />
              <p>
                Associating with National Media and TV companies to maximise the
                event we are organizing
              </p>
            </div>
            <button className="grid-item goals-button goals-item-8">
              <a href="#">Learn more about us</a>
            </button>
            <header className="grid-item section-header events-header">
              <h2>Next Event</h2>
            </header>
            <div className="grid-item event-list event-item-1">
              <h3>Celebrity Football Charity Event Tirana, Albania</h3>
              <hr />
              <h3>30 May - 02 June 2019</h3>
              <p>
                Tirana Charity Football Stadium (Qemal Stefa) &amp; Hayat Regency Hotel
              </p>
            </div>
            <div className="grid-item event-list event-item-2">
              <img src={Sos} alt="SOS Children's Villages"/>
            </div>
            <div className="grid-item event-list event-item-3">
              <img src={Olympics} alt="Special Olympics Albania"/>
            </div>
            <button className="grid-item event-button event-item-4">
              <a href="#">Learn more about events</a>
            </button>
            <header className="grid-item section-header testimonials-header">
              <h2>Testimonials</h2>
            </header>
            <div className="grid-item testimonials-item-1">
              <div className="left">
                <i class="material-icons left-arrow">keyboard_arrow_left</i>
              </div>
              <div className="testimonials-container">
                <i class="material-icons quote-icon">format_quote</i>
                <p>Just a brief note to thank you for a wonderful few days investigating what Cyprus has to offer golfers. I was not only enormously impressed with what I saw but also with the careful and well organised arrangements you made. It must have taken a huge effort to put together such a hectic itinerary but it was well worth it as it s important to see as much as possible in a short space of time...</p>
              </div>
              <div className="right">
                <i class="material-icons right-arrow">keyboard_arrow_right</i>
              </div>
            </div>
            <button className="grid-item testimonials-button">
              <a href="#">Read more testimonials</a>
            </button>            
            <header className="grid-item section-header partners-item-1">
              <h2>Our Partners</h2>
            </header>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
