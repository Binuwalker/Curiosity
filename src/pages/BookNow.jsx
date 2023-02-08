import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/BookNow.css';

const BookNow = () => {

  return (
    <div className='bookNow'>
      <Container>
        <div className='bookNow-form'>
          <div className='bookNow-dummy'></div>
          <div className='bookNow-validation'>
            <Container>
              <form className='container'>
                <div className='bookNow-destination'>
                  <label className='bookNow-destination-label'>Your Destination</label>
                  <input className='bookNow-destination-input' placeholder='Enter a Country Or Landmark' type={'text'} />
                </div>
                <div className='bookNow-checkIn'>
                  <label className='bookNow-checkIn-label'>Check In</label>
                  <input className='bookNow-checkIn-input' placeholder='Enter your Password' type={'date'} />
                </div>
                <div className='bookNow-checkOut'>
                  <label className='bookNow-checkOut-label'>Check Out</label>
                  <input className='bookNow-checkOut-input' placeholder='Enter your Password' type={'date'} />
                </div>
                <div className='bookNow-rooms'>
                  <label className='bookNow-rooms-label'>Rooms</label>
                  <input className='bookNow-rooms-input' placeholder='Rooms' type={'number'} />
                </div>
                <div className='bookNow-adults'>
                  <label className='bookNow-adults-label'>Adults</label>
                  <input className='bookNow-adults-input' placeholder='Adults' type={'number'} />
                </div>
                <div className='bookNow-children'>
                  <label className='bookNow-children-label'>Children</label>
                  <input className='bookNow-children-input' placeholder='Children' type={'number'} disabled/>
                </div>
                <button className='bookNow-checkAvail-btn' disabled>Check Availability</button>
              </form>
            </Container>
          </div>
          <div className='bookNow-right'>
            <Container>
              <div className='container'>
                <div className='bookNow-quotes'>
                  <h1 className='bookNow-reserve-quotes'>MAKE YOUR RESERVATION NOW</h1>
                  <p className='bookNow-paragraph-quotes'>Be advance on your choice, make your way to discover the World and be Curious on your Exploration.</p>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Container >
    </div >
  )
}

export default BookNow;