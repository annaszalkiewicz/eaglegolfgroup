import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Jessie from "../img/jessie-j.jpg";
import Klosi from "../img/blendi-klosi.jpg";
import Veliaj from "../img/erion-veliaj.jpg";
import Plaza from '../img/plaza-tirana.png';
import Birra from '../img/birra-stela.svg';
import endorsements from '../data/endorsements.json';

class TiranaEvent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      endorsements: endorsements,
      colors: ["#757A2F", "#677E20", "#677F10", "#273f29", "#14253f", "#091327"]
    };
  }

  render() {
    const { toggleCollapsible } = this.props;
    const { colors } = this.state;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return (
      <main id="tirana-event" className="tirana-event">
        <Tabs>
          <TabList className="tab-list">
            <Tab>About</Tab>
            <Tab>Program</Tab>
            <Tab>Sponsors</Tab>
            <Tab>Endorsements</Tab>
          </TabList>

          <TabPanel className="tab-panel">
            <section className="tirana-about-grid-container">
              <div className="about-grid-item-1 grid-item about-header-1">
                What?
              </div>
              <div className="about-grid-item-2 grid-item">
                Celebrity Charity Football Event
              </div>
              <div className="about-grid-item-3 grid-item about-header-2">
                When?
              </div>
              <div className="about-grid-item-4 grid-item">
                30 May - 02 June 2019
              </div>
              <div className="about-grid-item-5 grid-item about-header-3">
                Where?
              </div>
              <div className="about-grid-item-6 grid-item">
                Tirana Football Stadium (Qemal Stefa) and Tirana Plaza Hotel
              </div>
              <div className="about-grid-item-7 grid-item about-header-4">
                Goal
              </div>
              <div className="about-grid-item-8 grid-item">
                Raising funds for SOS Children's Villages and Special Olympics
                Albania
              </div>
            </section>
          </TabPanel>

          <TabPanel className="tab-panel">
            <section className="tirana-program-grid-container">
              <div className="program-grid-item-1 grid-item">01 June 2019</div>
              <div className="program-grid-item-2 grid-item">
                Tirana Football Stadium (Qemal Stefa)
              </div>
              <div className="program-grid-item-3 grid-item">
                <p>16:00</p>
                <p>
                  Pre-match Entertainment Program including performance by
                  international superstar - Jessie J
                </p>
              </div>
              <div className="program-grid-item-4 grid-item">
                <img src={Jessie} alt="Jessie J" />
              </div>
              <div className="program-grid-item-5 grid-item">
                <p>18:00</p>
                <p>
                  Football match between former Albanian legends and former
                  England legends
                </p>
              </div>
              <div className="program-grid-item-6 grid-item">
                Tirana Plaza Hotel
              </div>
              <div className="program-grid-item-7 grid-item">
                <p>21:00</p>
                <p>Charity Presentation Gala Dinner</p>
              </div>
            </section>
          </TabPanel>

          <TabPanel className="tab-panel">
            <div className="sponsors-grid-container">
              <div className="sponsors-grid-item-1 grid-item">
                <div className="avatar">
                  <img src={Klosi} alt="avatar" />
                </div>
                <p>Blendi Klosi</p>
                <p>Albanian Minister of Tourism and Environment</p>
              </div>
              <div className="sponsors-grid-item-2 grid-item">
                <div className="avatar">
                  <img src={Veliaj} alt="avatar" />
                </div>
                <p>Erion Veliaj</p>
                <p>Mayor of Tirana</p>
              </div>
              <div className="sponsors-grid-item-3 grid-item">
                <div className="avatar">
                  <img src={Plaza} alt="avatar" />
                </div>
                <p>Erisa Male</p>
                <p>Director of Tirana Plaza Hotel</p>
              </div>
              <div className="sponsors-grid-item-4 grid-item">
                <div className="avatar">
                  <img src={Birra} alt="avatar" />
                </div>
                <p>Enzo Panteqi</p>
                <p>Senior Administrator of Birra Stela</p>
              </div>
            </div>
          </TabPanel>

          <TabPanel className="tab-panel">
            <div className="endorsements-grid-container">
            {endorsements.map(endorsement => (
          <div className="testimonial-card  endorsement-card" key={endorsement.name}>
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
                    src={require(`../img/${endorsement.avatar}`)}
                    alt="avatar"
                  />
                </div>
                <h2 style={{ color: randomColor }}>{endorsement.name}</h2>
                <h2 className="position" style={{ color: randomColor }}>
                  {endorsement.position}
                </h2>
                <hr style={{ border: "solid 1px" + randomColor }} />
              </button>

            <div className="content">
              <p>{endorsement.testimonial}</p>
            </div>
          </div>
        ))}
            </div>
          </TabPanel>
        </Tabs>
      </main>
    );
  }
}

export default TiranaEvent;
