import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import aboutus from '../../Assets/aboutus.jpg';

const AboutUs = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h1 className="font-weight-bold ">Who we are?</h1>
          <p>
          Health Buddy is a comprehensive hospital management system designed to streamline and enhance the operations of healthcare facilities. Our platform empowers healthcare providers by integrating various aspects of hospital management into a single, cohesive system. 
          </p>
          <p>
          From patient registration, appointment scheduling, and electronic health records (EHR) management, to billing, inventory control, and reporting, Health Buddy offers a suite of tools to ensure efficient and effective hospital administration. Our system is designed to improve patient care, reduce operational costs, and enhance the overall hospital experience.
          </p>
          <p>
          No need to juggle multiple systems or spend valuable time and resources on inefficient processes. With Health Buddy, you have a reliable partner that covers all your hospital management needs—seamlessly and efficiently.
          </p>
          <p>
          Our team of experienced professionals works closely with healthcare providers to tailor our solutions to meet the unique needs of each facility. We ensure that our system is easy to use, highly secure, and compliant with all relevant healthcare regulations.
          </p>
          <p>
            This dedication to excellence is why healthcare facilities across the globe trust Health Buddy to manage their operations. Join the growing number of hospitals that rely on us to deliver superior patient care and streamlined operations.
          </p>
        </Col>
        <Col md={6}>
          <Image src={aboutus} fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
