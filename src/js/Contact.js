import React, { Component } from "react";
import MetaTags from "react-meta-tags";
import ContactDetails from "./ContactDetails";
import Fade from "react-reveal/Fade";
import ContactForm from "./ContactForm";

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="contact-container">
        <MetaTags>
          <title>Contact Us | Eagle Golf Group</title>
          <meta
            name="description"
            content="Contact Eagle Golf Group by email, phone or fill contact form on website."
          />
        </MetaTags>
        <Fade right>
          <header className="grid-item section-header contact-us-item-1">
            <h2>Contact Us</h2>
          </header>
        </Fade>

        <ContactDetails />
        <Fade left delay={200}>
          <div className="grid-item contact-us-item-3">
            <h3>Get in touch</h3>
            <ContactForm />
          </div>
        </Fade>
      </section>
    );
  }
}

export default Contact;
