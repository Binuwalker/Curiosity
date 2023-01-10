import React from 'react';
import { Container } from 'react-bootstrap';

const Catalogue = () => {
  return (
    <div className='catalogue'>
      <Container className='catalogue-containers'>
        <div className='catalogue-container-1'>
          <div className='catalogue-container-1-section-1'>
            <div className='container-1-section-1-img-1'>
              <img src='/img/germany-catalogue.jpg' alt='germany-catalogue-img' className='catalogue-img' />
            </div>
            <div className='container-1-section-1-img-2'>
              <img src='/img/maldive-catalogue.jpg' alt='germany-catalogue-img' className='catalogue-img' />
            </div>
          </div>
          <div className='catalogue-container-1-section-2'>
            <img src='/img/france-catalogue.jpg' alt='france-catalogue-img' className='catalogue-img' />
          </div>
        </div>
        <div className='catalogue-container-2'>
          <div className='catalogue-container-2-section-1'>
            <img src='/img/newzealand-catalogue.jpg' alt='newzealand-catalogue-img' className='catalogue-img' />
          </div>
          <div className='catalogue-container-2-section-2'>
            <div className='container-2-section-2-img-1'></div>
            <div className='container-2-section-2-img-2'></div>
          </div>
        </div>
        <div className='catalogue-dummy'></div>
      </Container>
    </div>
  )
}

export default Catalogue;