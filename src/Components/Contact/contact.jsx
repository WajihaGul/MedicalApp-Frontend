import React, { useState } from 'react';
import "./Contact.css";
import ContactCard from '../Card/ContactCard';
import ContactAdditional from '../ContactAdditional/ContactAdditional';
import AboutUs from "./AboutUs";

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
      <div>
        <ContactAdditional/>
      </div>
      <div>
        <AboutUs/>
      </div>
      <div>
        <ContactCard/>
        </div>
      </div>
  );
}

export default Contact;
