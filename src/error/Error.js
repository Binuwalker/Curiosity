import React from 'react';
import { Container } from 'react-bootstrap';
import '../error/Error.css';

const Error = () => {
  return (
    <div className='error'>
      <Container>
        <h1>Something Went Wrong</h1>
      </Container>
    </div>
  )
}

export default Error;