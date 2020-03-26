import React, { Component } from 'react';
import Fade from "react-reveal/Fade";

class Announcement extends Component {
  state = {
    open: true
  }

  closeAnnouncement = () => {
    this.setState({open: false})
    
  }
  render() {
    const styles = {
      display: (this.state.open) ? 'block' : 'none'
    }
    return (
    <Fade top>
      <div className="announcement-container" onClick={this.closeAnnouncement} style={styles}>
        <p><b>Corona virus Notice:</b>  We would like to advise all our clients that due to the devastating effect Covid-19 is currently having on worldwide major sporting events and following the guidelines from our Government we have sadly decided to postpone our next event to Jordan. We will update everyone and announce the new date once we have the all clear from The World Health Organisation. Thank you and stay safe.</p>
        <button className="close-button">X</button>
      </div>
      </Fade>
    )
  }
}

export default Announcement;