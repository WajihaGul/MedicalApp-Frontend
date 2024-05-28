import React from 'react';
import "./Contact.css";
import Button from "../Layouts/Button.jsx";

const Contact = () => {
  return (
    <div>
      <div className='appointment'>
        <button className='appointment-button'>Book Appointment</button>
      </div>
      <div className='contact-container'>
        <div className="div1">
          <div className="div2">
            <div className="contact">
              
              <h3>Mail Here</h3>
              <p>healthbuddy@gmail.com</p>
            </div>
          </div>
          <div className="div2">
            <div className="contact">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
              <h3>Call Here</h3>
              <p>(+92) 333567789</p>
            </div>
          </div>
          <div className="div2">
            <div className="contact">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#ffffff" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
              <h3>Pharmacy</h3>
              <p>(+92) 333567789</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="contact-container1">
          <div className='contact-content'>
          <div className="form-container1">
          <form>
            <h1 className="text">
              Anything On Your Mind
            </h1>
            <div className="form-row">
              <input
                className="input-field1"
                type="text"
                name="userFirstName"
                id="userFirstName"
                placeholder="First Name"
              />
            </div>
            <div className="form-row">
              <input
                className="input-field1"
                type="text"
                name="userLastName"
                id="userLastName"
                placeholder="Last Name"
              />
            </div>
            <div className="form-row">
              <input
                className="input-field1"
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="Your Email"
              />
            </div>
            <div className="form-row">
              <input
                className="input-field1"
                type="number"
                name="userNumber"
                id="userNumber"
                placeholder="Phone No."
              />
            </div>
            <div className="form-row">
              <input
                className="input-field1"
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
            </div>
            <div className="form-row">
              <textarea
                className="textarea-field input-field1"
                type="text"
                name="message"
                id="message"
                placeholder="Your Message"
              />
            </div>
            <div className="form-row">
              <Button title="Submit" />
            </div>
          </form>
        </div>
        </div>
        </div>
      </div>
      
    </div>
  );
}

export default Contact;

