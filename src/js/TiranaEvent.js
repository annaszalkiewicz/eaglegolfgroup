import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TiranaEvent extends Component {

  render() {
    return (
      <main id="tirana-event">
        <Tabs>

          <TabList>
            <Tab>About</Tab>
            <Tab>Program</Tab>
            <Tab>Sponsors</Tab>
            <Tab>Endorsements</Tab>
          </TabList>


        </Tabs>
      </main>
    )
  }
}

export default TiranaEvent;