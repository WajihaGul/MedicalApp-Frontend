import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./ContactAdditional.css";

const ContactAdditional = () => {
  return (
    <Container className="my-5 position-relative top-0 start-0">
      <div className="help-section text-center">
        <Row className="text-center mb-8">
          <Col>
            <h2 className="font-weight-bold text-white">How can we help?</h2>
            <p className="text-white">Send us a message!</p>
          </Col>
        </Row>
      </div>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                className="input-field1"
                type="text"
                placeholder="First Name"
              />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                className="input-field1"
                type="text"
                placeholder="Last Name"
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="input-field1"
                type="email"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                className="textarea-field"
                as="textarea"
                rows={3}
                placeholder="I'm interested in learning more about..."
              />
            </Form.Group>
            <Button
              type="submit"
              className="mt-3 form-row full-width custom-button"
            >
              Send Message
            </Button>
          </Form>
        </Col>
        <Col md={6} className="text-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.986259210279!2d-122.41941548468109!3d37.77492977975939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c0e0e0e0e%3A0x8085808c0e0e0e0e!2sGoogle!5e0!3m2!1sen!2sus!4v1516369673235"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            title="Google Maps Location"
          ></iframe>
          <p className="mt-3">Health Buddy Hospital Management System</p>
          <p>1234 Hospital Road, City, State, ZIP</p>
          <p>Email: contact@healthbuddy.com</p>
          <p>Phone: (123) 456-7890</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactAdditional;
