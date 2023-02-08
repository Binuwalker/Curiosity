import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/About.css';

const About = () => {
  return (
    <div className='about'>
      <Container>
        <div>
          <h2 className='about-us'>
            About Us
          </h2>
          <h3 className="about-heading">
            Who we Are?
          </h3>
          <p className="about-details">
            We Provide you the premium tours all over Europe and Asia. We have signed in with more than 10 countires and it's tourism.
          </p>
        </div>
        <div className='about-img'>
          {/* <img /> */}
        </div>
      </Container>
    </div>
  )
}

export default About;