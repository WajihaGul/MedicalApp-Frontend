import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { FaEnvelope, FaPhone } from 'react-icons/fa'; // Importing the icons

const ContactCard = () => {
  return (
    <Container>
      <Row className="my-3">
        <Col md={4} className="d-flex justify-content-center">
          <Card className="m-3" style={{ width: '18rem' }}>
            <Card.Body className="text-center">
              <div className="circle-icon">
                <FaEnvelope size={40} />
              </div>
              <Card.Text>
                <h3>Mail Here</h3>
                <p>healthbuddy@gmail.com</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex justify-content-center">
          <Card className="m-3" style={{ width: '18rem' }}>
            <Card.Body className="text-center">
              <div className="circle-icon">
                <FaPhone size={40} />
              </div>
              <Card.Text>
                <h3>Call Here</h3>
                <p>(+92) 333567789</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex justify-content-center">
          <Card className="m-3" style={{ width: '18rem' }}>
            <Card.Body className="text-center">
              <div className="circle-icon">
                <FaPhone size={40} />
              </div>
              <Card.Text>
                <h3>Pharmacy</h3>
                <p>(+92) 333567789</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

// Custom CSS for the circle icon
const style = document.createElement('style');
style.innerHTML = `
  .circle-icon {
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #000;
    border-radius: 50%;
    margin: 0 auto 10px;
    background-color:#002a68;
    margin-bottom:30px;
    color:white;
    margin-top:30px;
  }
`;
document.head.appendChild(style);

export default ContactCard;
