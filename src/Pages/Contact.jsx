import React, { useState } from 'react';
import "./Contact.css";
import ContactCard from '../Components/Card/ContactCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    userFirstName: '',
    userLastName: '',
    userEmail: '',
    userNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      // Handle success response as needed
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle error as needed
    });
  };
  return (
    <div>
      <div className='appointment'>
        <button className='appointment-button'>Book Appointment</button>
      </div>
      <div>
        <ContactCard/>
        </div>
      <div className="contact-container1">
      <div className="contact-content">
        <div className="form-container1">
          <form onSubmit={handleSubmit}> 
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
              <input
                className="input-field1"
                type="number"
                name="userNumber"
                id="userNumber"
                placeholder="Phone No."
              />
            </div>
            <div className="form-row full-width">
              <textarea
                className="textarea-field input-field1"
                type="text"
                name="message"
                id="message"
                placeholder="Your Message"
              />
            </div>
            <div className="form-row full-width">
            <button className="button-submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
      </div>
  );
}

export default Contact;

