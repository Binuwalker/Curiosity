import React, { useContext } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Nav.css';
import { AppContext } from '../App';

const TopNav = () => {

  const { loginSuccess } = useContext(AppContext);

  return (
    <Navbar className='nav-bg fixed-top' expand="lg">
      <Container>
        <Link>
          <img src='/img/curiosity-logo.jpg' alt='curiosity-logo' className='nav-logo' />
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto nav-links">
            <Link to={'/'} className='nav-link nav-link-style'>Home</Link>
            <Link to={'/about'} className='nav-link nav-link-style'>About</Link>
            <Link to={'/services'} className='nav-link nav-link-style'>Services</Link>
            {loginSuccess ? (
              <li className='navLink'>
                <Link to={'/profile'} className='nav-link nav-link-style'>Profile</Link>
              </li>
            ) : (
              <li className='navLink'>
                <Link to={'/login'} className='nav-link nav-link-style'>Login</Link>
              </li>
            )}
            {loginSuccess ? (
              <Link to={'/booknow'} >
                <button className='nav-btn'>
                  booknow
                </button>
              </Link>
            ) : (
              <Link to={'/login'}>
                <button className='nav-btn'>
                  Book Now
                </button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNav;