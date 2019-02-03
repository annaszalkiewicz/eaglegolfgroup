import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TiranaEvent extends Component {

  render() {
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
              <div className="about-grid-item-1 grid-item about-header-1">What?</div>
              <div className="about-grid-item-2 grid-item">Celebrity Charity Football Event</div>
              <div className="about-grid-item-3 grid-item about-header-2">When?</div>
              <div className="about-grid-item-4 grid-item">30 May - 02 June 2019</div>
              <div className="about-grid-item-5 grid-item about-header-3">Where?</div>
              <div className="about-grid-item-6 grid-item">Tirana Football Stadium (Qemal Stefa) and Tirana Plaza Hotel</div>
              <div className="about-grid-item-7 grid-item about-header-4">Goal</div>
              <div className="about-grid-item-8 grid-item">Raising funds for SOS Children's Villages and Special Olympics Albania</div>
            </section>
          </TabPanel>

          <TabPanel className="tab-panel">
            Program tab is working!
          </TabPanel>

          <TabPanel className="tab-panel">
            Sponsors tab is working!
          </TabPanel>

          <TabPanel className="tab-panel">
            Endorsements tab is working!
          </TabPanel>

        </Tabs>
      </main>
    )
  }
}

export default TiranaEvent;