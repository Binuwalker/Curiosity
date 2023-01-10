import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Nav.css';

const TopNav = () => {
  return (
    <div className='topNav'>
      <Container>
        <div className='navLogo'>
          <p className='navLogo-style'>Curiosity</p>
        </div>
        <ul className='navLinks'>
          <li className='navLink'>
            <Link to={'/'} className='navLink-style'><p className='navLink-style'>Home</p></Link>
          </li>
          <li className='navLink'>
            <Link to={'/about'} className='navLink-style'><p className='navLink-style'>About</p></Link>
          </li>
          <li className='navLink'>
            <Link to={'/services'} className='navLink-style'><p className='navLink-style'>Services</p></Link>
          </li>
          <li className='navLink'>
            <Link to={'/login'} className='navLink-style'><p className='navLink-style'>Login</p></Link>
          </li>
        </ul>
        <button className='navBtn'>
          <p className='navBtn-style'>Register Now</p>
        </button>
      </Container>
    </div>
  )
}

export default TopNav;