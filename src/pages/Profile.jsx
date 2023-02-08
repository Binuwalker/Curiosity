import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import '../styles/Profile.css'

export const History = () => {
  return (
    <div className='history'>
      <div>
        <Container>
          <div className='user-history-none'>There is no any Previous travel History</div>
        </Container>
      </div>
    </div>
  )
}

const Profile = () => {

  const navigate = useNavigate()

  const { handleLogout, emailId } = useContext(AppContext);

  return (
    <div>
      <Container>
        <div className= "profile">
          <Container>
            <div className='user-profile'>
              <div>
                <div className='profile-img'>
                  <img src='/img/default-profile-img.jpg' alt='default-profile-img' className='profile-img-style' />
                  <h3 className='user-name'>Binu Walker</h3>
                  <h6 className='user-role'>Guest</h6>
                  <h6 className='user-role'>{emailId}</h6>
                  <Link to={'history'} className='user-history-txt-none'>
                    <h4 className='user-history'>History</h4>
                  </Link>
                </div>
                <div className='profile-details'>
                  <div className='profile-setting-btn'>
                    <div className='edit-profile-logout-dummy'></div>
                    <div className='edit-profile'>
                      <button className='edit-profile-btn'>
                        Edit Profile
                      </button>
                    </div>
                    <div className='logout'>
                      <button
                        className='logout-btn'
                        onClick={() => {
                          navigate('/login')
                          handleLogout()
                        }}
                      >Logout</button>
                    </div>
                  </div>
                </div>
                <div className='profile-history'>
                  <Outlet />
                </div>
              </div>
            </div >
          </Container >
        </div >
      </Container >
    </div >
  )
}

export default Profile;