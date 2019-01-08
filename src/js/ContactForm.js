import React, { Component } from "react";
import axios from "axios";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.onHandleSbumit = this.onHandleSbumit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  onHandleSbumit = e => {
    e.preventDefault();
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const tel = document.getElementById("telephone").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        tel: tel,
        messsage: message
      }
    }).then(response => {
      if (response.data.msg === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  };

  resetForm = () => {
    document.getElementById("contact-form").reset();
  };

  render() {
    return (
      <form
        className="contact-form"
        id="contact-form"
        onClick={this.onHandleSbumit}
        method="POST"
      >
        <label htmlFor="first-name">Name*</label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          placeholder="Your name"
          required
        />
        <label htmlFor="last-name">Last name</label>
        <input
          type="text"
          name="last-name"
          id="last-name"
          placeholder="Your last name"
        />
        <label htmlFor="email">E-mail*</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@example.com"
          required
        />
        <label htmlFor="telephone">Telephone*</label>
        <input
          type="tel"
          name="telephone"
          id="telephone"
          placeholder="123456789"
          required
        />
        <label htmlFor="message">Message*</label>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Write your message"
          required
        />
        <button type="submit" className="btn-primary">
          Send message
        </button>
      </form>
    );
  }
}

export default ContactForm;
