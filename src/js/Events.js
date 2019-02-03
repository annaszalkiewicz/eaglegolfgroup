import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sos from "../img/sos.png";
import Olympics from "../img/special-olympics.png";
import Fade from "react-reveal/Fade";
import MetaTags from "react-meta-tags";

class Events extends Component {
  render() {
    return (
      <section id="events">
        <MetaTags>
          <title>Events | Eagle Golf Group</title>
          <meta
            name="description"
            content="Eagle Golf Group is working hard in partnership with The National Culture and Tourist Board of Albania and together with both Governments for a magnificent charity Football event in Albania."
          />
        </MetaTags>
        <main className="events-container" id="main-content">
          <Fade left>
            <header className="grid-item events-item-1 section-header">
              <h2>Events</h2>
            </header>
          </Fade>
          <Fade right>
            <div className="grid-item events-item-2">
              <p>
                After an amazingly successful charity Golf and Football Tour
                Event for the former Aston Villa and Celtic club captain and
                captain of Bulgaria - Stiliyan Petrov in May 2013 Eagle Golf
                Group are extremely honoured and proud to announce other charity
                tour event for May 2019. The Management Team of Eagle Golf are
                currently working hard in partnership with The National Culture
                and Tourist Board of Albania and together with both Governments
                for a magnificent charity Football event in Albania. We are delighted to confirm the dates for this magnificent event are 30 May – 02 June 2019. The event has been
                already endorsed and supported by both Albanian and British Ambassadors together with Government dignitaries.
              </p>
              <p>
                Furthermore, we have had an endorsement of approval and support
                from The Football Federation of Albania. The core purpose and main
                goal of this charity event is to raise funds for The SOS
                Orphanage Children of Albania and The Special Olympics Albania.
                We also envisage to invite the global mega super star to join in
                this magnificent charity event to sing in the national stadium.
              </p>
              <p>
                This magnificent good cause charity football event will be
                schedule around the opening of the new and spectacular national
                football stadium recently been endorsed by UEFA.
              </p>
              <p>
                The charity football match will be against Former Albanian
                Legends X1 v Former England Legends X1.
              </p>
              <p>
                We are also organising a magnificent Gala Dinner Presentation
                for the Albanian event which we are honoured will be hosted by
                The Mayor and Municipality of Tirana. The Gala Dinner Presentation will be held at the prestigous 5 star Tirana Plaza Hotel.
              </p>
              <p>
                Further information how to book and join these unique charity
                events and meet your football heroes will be announced in March
                2019.
              </p>
            </div>
          </Fade>
          <Fade left delay={500}>
            <div className="grid-item events-item-3">
              <img src={Sos} alt="SOS Children's Villages" className="sos" />
              <img
                src={Olympics}
                alt="Special Olympics Albania"
                className="olympics"
              />
            </div>
          </Fade>
          <Fade left delay={600}>
            <div className="grid-item events-item-4 event-button">
              <Link to="/albania-charity-football-event-2019" role="button">
              Learn more about our next event
              </Link>
            </div>
          </Fade>
        </main>
      </section>
    );
  }
}

export default Events;
