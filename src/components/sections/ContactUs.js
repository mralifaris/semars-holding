import React from 'react';
import './ContactUs.css'; 

function ContactUs() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Do we have everything you are looking for?</h2>
      <p>
        Drop us your contact details. We are always more than happy to help.
      </p>
      
      <div className="contact-button">
        <button className="primary-button" onClick={() => window.location.href = "mailto:info@semarsholding.com"}>
          Get in Touch
        </button>
      </div>
    </section>
  );
}

export default ContactUs;
