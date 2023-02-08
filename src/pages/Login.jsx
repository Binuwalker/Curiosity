import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router';
import { AiOutlineApple } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { BsFillExclamationCircleFill } from 'react-icons/bs';
import { MdVerified } from 'react-icons/md';
import { AppContext } from '../App';
import '../styles/LoginSignup.css';

const Login = () => {

  const { emailId, setEmailId, passwordValue, setPasswordValue, emailIdError, emailIdSuccess, passwordValueError, passwordValueSuccess, loginSuccess, handleLogin } = useContext(AppContext)

  const navigate = useNavigate('');

  return (
    <div>
      {loginSuccess ? (
        <Navigate to={'/'} />
      ) : (
        <div className='loginsignup' >
          <Container>
            <div className='login-form'>
              <div className='login-dummy-left'></div>
              <form className='login-validation' onSubmit={handleLogin}>
                <Container>
                  <center><h1 className='login-heading'>Login</h1></center>
                  <label className='login-email'>Email:</label>
                  <input className='login-email-input' placeholder='Enter your Email' type={'email'} onChange={(e) => setEmailId(e.target.value)} value={emailId} />
                  <div className='loginError'>
                    {emailIdError ? (
                      <div>
                        {emailIdError}
                        <div className='login-exclamation-icon'><BsFillExclamationCircleFill /></div>
                      </div>
                    ) : (
                      <div></div>
                    )}</div>
                  <div className='loginSuccess'>
                    {emailIdSuccess ? (
                      <div className='login-verified-icon'><MdVerified /></div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <div className='loginEmailErrorNone'></div>
                  <label className='login-password'>Password:</label>
                  <input className='login-password-input' placeholder='Enter the Password' type={'password'} onChange={(e) => setPasswordValue(e.target.value)} value={passwordValue} />
                  <div className='loginError'>
                    {passwordValueError ? (
                      <div>
                        {passwordValueError}
                        <div className='login-exclamation-icon'><BsFillExclamationCircleFill /></div>
                      </div>
                    ) : (
                      <div></div>
                    )}</div>
                  <div className='loginSuccess'>
                    {passwordValueSuccess ? (
                      <div className='login-verified-icon'><MdVerified /></div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <div className='loginPasswordErrorNone'></div>
                  <button className='login-btn'>Login</button>
                  <div className='new-user' onClick={() => navigate('/signup')}>Don't have an Account ?</div>
                  <div className='newUser-forgetPassword-dummy'></div>
                  <div className='forget-password'>Forget Password ?</div>
                  <div className='login-external-links'>
                    <button className='login-apple'>
                      <AiOutlineApple className='apple' />
                    </button>
                    <button className='login-facebook'>
                      <FiFacebook className='facebook' />
                    </button>
                    <button className='login-instagram'>
                      <BsInstagram className='instagram' />
                    </button>
                    <button className='login-google'>
                      <FcGoogle className='google' />
                    </button>
                  </div>
                </Container>
              </form>
              <div className='login-dummy-right'></div>
            </div >
          </Container >
        </div >
      )}
    </div >
  )
}

export default Login;