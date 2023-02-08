import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router';
import { AiFillApple } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc';
import { BsFillExclamationCircleFill } from 'react-icons/bs';
import { MdVerified } from 'react-icons/md';
import '../styles/LoginSignup.css';

const Signup = () => {

    const navigate = useNavigate('')

    const [firstName, setFirstName] = useState('')
    const [firstNameError, setFirstNameError] = useState(false);
    const [firstNameSuccess, setFirstNameSuccess] = useState(false);
    const [lastName, setLastName] = useState('')
    const [lastNameError, setLastNameError] = useState(false);
    const [lastNameSuccess, setLastNameSuccess] = useState(false);
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false);
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('')
    const [phoneNumberError, setPhoneNumberError] = useState(false);
    const [phoneNumberSuccess, setPhoneNumberSuccess] = useState(false);
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false);
    const [passwordSuccess, setPasswordSuccess] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [confirmPasswordSuccess, setConfirmPasswordSuccess] = useState(false);

    const [signupSuccess, setSignupSuccess] = useState(false)

    // const regexFirstNameLastName = /^[a-zA-Z ]{1,10}$/;
    // const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // const regexPhone = /^[0-9]{10}$/;
    // const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/;

    const handleSignup = () => {
        if (firstName.length === 0) {
            setFirstNameError('Please Enter Your First Name');
            setFirstNameSuccess(false);
            setSignupSuccess(false);
        } else {
            setFirstNameError(false);
            setFirstNameSuccess(true);
            setSignupSuccess(true);
        }
        if (lastName.length === 0) {
            setLastNameError('Please Enter Your Last Name');
            setLastNameSuccess(false);
            setSignupSuccess(false);
        } else {
            setLastNameError(false);
            setLastNameSuccess(true);
            setSignupSuccess(true);
        }
        if (email.length === 0) {
            setEmailError('Please Enter Your Email');
            setEmailSuccess(false);
            setSignupSuccess(false);
        } else {
            setEmailError(false);
            setEmailSuccess(true);
            setSignupSuccess(true);
        }
        if (phoneNumber.length === 0) {
            setPhoneNumberError('Please Enter Your Phone Number');
            setPhoneNumberSuccess(false);
            setSignupSuccess(false);
        } else {
            setPhoneNumberError(false);
            setPhoneNumberSuccess(true);
            setSignupSuccess(true);
        }
        if (password.length === 0) {
            setPasswordError('Please Enter a Password');
            setPasswordSuccess(false);
            setSignupSuccess(false);
        } else {
            setPasswordError(false)
            setPasswordSuccess(true);
            setSignupSuccess(true);
        }
        if (confirmPassword.length === 0) {
            setConfirmPasswordError('Please Enter the Password Again');
            setConfirmPasswordSuccess(false);
            setSignupSuccess(false);
        } else if (confirmPassword !== password) {
            setConfirmPasswordError('Enter the Correct Password');
            setConfirmPasswordSuccess(false);
            setSignupSuccess(false);
        } else {
            setConfirmPasswordError(false);
            setConfirmPasswordSuccess(true);
            setSignupSuccess(true);
        }
    }

    return (
        <div>
            {signupSuccess ? (
                <Navigate to='/login' />
            ) : (
                <div className='loginsignup'>
                    <div className='signup-form'>
                        <div className='signup-dummy-left'></div>
                        <div className='signup-validation'>
                            <Container>
                                <center><h1 className='signup-heading'>Register</h1></center>
                                <div className='signup-form-align'>
                                    <div className='first-name'>
                                        <label className='signup-firstName'>First Name:</label>
                                        <input className='signup-firstName-input' placeholder='Enter your First Name' type={'text'} onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                                        <div className='signupError'>
                                            {firstNameError ? (
                                                <div>
                                                    {firstNameError}
                                                    <div className='signup-exclamation-icon'><BsFillExclamationCircleFill /></div>
                                                </div>
                                            ) : (
                                                <div></div>
                                            )}</div>
                                        <div className='signupSuccess'>
                                            {firstNameSuccess ? (
                                                <div className='signup-verified-icon'><MdVerified /></div>
                                            ) : (
                                                <div></div>
                                            )}
                                        </div>
                                    </div>
                                    <div className='last-name'>
                                        <label className='signup-lastName'>Last Name:</label>
                                        <input className='signup-lastName-input' placeholder='Enter your Last Name' type={'text'} onChange={(e) => setLastName(e.target.value)} value={lastName} />
                                        <div className='signupError'>
                                            {lastNameError ? (
                                                <div>
                                                    {lastNameError}
                                                    <div className='signup-exclamation-icon'><BsFillExclamationCircleFill /></div>
                                                </div>
                                            ) : (
                                                <div></div>
                                            )}</div>
                                        <div className='signupSuccess'>
                                            {lastNameSuccess ? (
                                                <div className='signup-verified-icon'><MdVerified /></div>
                                            ) : (
                                                <div></div>
                                            )}
                                        </div>
                                    </div>
                                    <div className='email'>
                                        <label className='signup-email'>Email:</label>
                                        <input className='signup-email-input' placeholder='Enter your Email' type={'email'} onChange={(e) => setEmail(e.target.value)} value={email} />
                                        <div className='signupError'>
                                            {emailError ? (
                                                <div>
                                                    {emailError}
                                                    <div className='signup-exclamation-icon'><BsFillExclamationCircleFill /></div>
                                                </div>
                                            ) : (
                                                <div></div>
                                            )}</div>
                                        <div className='signupSuccess'>
                                            {emailSuccess ? (
                                                <div className='signup-verified-icon'><MdVerified /></div>
                                            ) : (
                                                <div></div>
                                            )}
                                        </div>
                                    </div>
                                    <div className='phone-number'>
                                        <label className='signup-phoneNumber'>Phone Number:</label>
                                        <input className='signup-phoneNumber-input' placeholder='Enter your Phone Number' type={'text'} onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                                        <div className='signupError'>
                                            {phoneNumberError ? (
                                                <div>
                                                    {phoneNumberError}
                                                    <div className='signup-exclamation-icon'><BsFillExclamationCircleFill /></div>
                                                </div>
                                            ) : (
                                                <div></div>
                                            )}</div>
                                        <div className='signupSuccess'>
                                            {phoneNumberSuccess ? (
                                                <div className='signup-verified-icon'><MdVerified /></div>
                                            ) : (
                                                <div></div>
                                            )}
                                        </div>
                                    </div>
                                    <div className='password'>
                                        <label className='signup-password'>Password:</label>
                                        <input className='signup-password-input' placeholder='Enter a Password' type={'password'} onChange={(e) => setPassword(e.target.value)} value={password} />
                                        <div className='signupError'>
                                            {passwordError ? (
                                                <div>
                                                    {passwordError}
                                                    <div className='signup-exclamation-icon'><BsFillExclamationCircleFill /></div>
                                                </div>
                                            ) : (
                                                <div></div>
                                            )}</div>
                                        <div className='signupSuccess'>
                                            {passwordSuccess ? (
                                                <div className='signup-verified-icon'><MdVerified /></div>
                                            ) : (
                                                <div></div>
                                            )}
                                        </div>
                                    </div>
                                    <div className='confirm-password'>
                                        <label className='signup-confirmPassword'>Confirm Password:</label>
                                        <input className='signup-confirmPassword-input' placeholder='Enter the Password Again' type={'password'} onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                                        <div className='signupError'>
                                            {confirmPasswordError ? (
                                                <div>
                                                    {confirmPasswordError}
                                                    <div className='signup-exclamation-icon'><BsFillExclamationCircleFill /></div>
                                                </div>
                                            ) : (
                                                <div></div>
                                            )}</div>
                                        <div className='signupSuccess'>
                                            {confirmPasswordSuccess ? (
                                                <div className='signup-verified-icon'><MdVerified /></div>
                                            ) : (
                                                <div></div>
                                            )}
                                        </div>
                                    </div>
                                    <button className='signup-btn' onClick={handleSignup}>Register</button>
                                    <div className='pre-user' onClick={() => {
                                        navigate('/login')
                                    }}>Do You have an Account ?</div>
                                    <div className='preUser-termsCondition-dummy'></div>
                                    <div className='terms-condition'>Terms & Conditions Apply</div>
                                    <div className='signup-external-links'>
                                        <button className='signup-apple'>Sign in with Apple <AiFillApple className='apple-2' /></button>
                                        <button className='signup-google'>Sign in with Google <FcGoogle className='google-2' /></button>
                                    </div>
                                </div>
                            </Container>
                        </div>
                        <div className='signup-dummy-right'></div>
                    </div >
                </div>
            )}
        </div>
    )
}

export default Signup;