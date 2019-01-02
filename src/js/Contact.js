import React, { Component } from 'react';
import ContactDetails from './ContactDetails';

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="contact-container">
        <header className="grid-item section-header contact-us-item-1">
          <h2>Contact Us</h2>
        </header>
        <ContactDetails/>
        <div className="grid-item contact-us-item-3">
          <h3>Get in touch</h3>
          <form className="contact-form">
            <label htmlFor="first-name">Name*</label>
            <input type="text" name="first-name" id="first-name" placeholder="Your name" required/>
            <label htmlFor="last-name">Last name</label>
            <input type="text" name="last-name" id="last-name" placeholder="Your last name"/>
            <label htmlFor="email">E-mail*</label>
            <input type="email" name="email" id="email" placeholder="example@example.com" required/>
            <label htmlFor="telephone">Telephone*</label>
            <input type="tel" name="telephone" id="telephone" placeholder="123456789" required/>
            <label htmlFor="message">Message*</label>
            <input type="text" name="message" id="message" placeholder="Write your message" required/>
            <button type="submit" className="btn-primary">Send message</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Contact;