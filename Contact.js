// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Have questions or need assistance? Reach out to us!</p>

      <div>
        <h2>Visit Our Store</h2>
        <p>
          Gardening Store,<br />
          LIG-694,VOC nagar<br />
          Thiruchi,Tamil Nadu<br />
        </p>
      </div>

      <div>
        <h2>Contact Information</h2>
        <p>
          Email: gardeningstore@gmail.com<br />
          Phone: 96544xxxx4<br />
        </p>
      </div>

      <div>
        <h2>Send Us a Message</h2>
        {/* Add your contact form here */}
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <br />
          <label>
            Message:
            <textarea name="message" rows="4" />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
