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
              <div className="about-grid-item-1">What?</div>
              <div className="about-grid-item-2">Celebrity Charity Football Event</div>
              <div className="about-grid-item-3">When?</div>
              <div className="about-grid-item-4">30 May - 02 June 2019</div>
              <div className="about-grid-item-5">Where?</div>
              <div className="about-grid-item-6">Tirana Football Stadium (Qemal Stefa) and Tirana Plaza Hotel</div>
              <div className="about-grid-item-7">Goal</div>
              <div className="about-grid-item-8">Raising funds for SOS Children's Villages and Special Olympics Albania</div>
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