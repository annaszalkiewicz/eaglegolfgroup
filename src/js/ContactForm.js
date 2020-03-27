import React, { Component } from "react";
import axios from "axios";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  onHandleSubmit = e => {
    e.preventDefault();
    const firstName = document.getElementById("name").value;
    const lastName = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const tel = document.getElementById("telephone").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      url: "/send",
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
        onSubmit={this.onHandleSubmit}
        method="POST"
        action="/send"
      >
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          required
        />
        <label htmlFor="surname">Last name</label>
        <input
          type="text"
          name="surname"
          id="surname"
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
        <textarea
          name="message"
          id="message"
          rows="5"
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
