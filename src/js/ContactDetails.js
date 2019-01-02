import React from "react";

const ContactDetails = () => {
  return (
    <div className="grid-item contact-item-2">
      <p>
        If you would like to organize a charity sporting event, to become a
        sponsor or have any other query, please contact us.
      </p>
      <hr />
      <h3>Eagle Golf Group</h3>
      <div className="contact-telephone">
        <i className="material-icons">phone</i>
        <span>+44 (0) 7785 500 205</span>
      </div>
      <div className="contact-email">
        <i className="material-icons">alternate_email</i>
        <span>johnwade@eaglegolfgroup.co.uk</span>
      </div>
    </div>
  );
};

export default ContactDetails;
