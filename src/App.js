import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNav from "./navbar/TopNav";
import About from "./pages/About";
import BookNow from "./pages/BookNow";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile, { History } from "./pages/Profile";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import Error from "./error/Error";
import ProtectedRoutes from "./protectedroutes/ProtectedRoutes";

export const AppContext = createContext([])

function App() {

  const [countryListBookNow, setContryListBookNow] = useState(false)

  const [emailId, setEmailId] = useState('');
  const [emailIdError, setEmailIdError] = useState(false);
  const [emailIdSuccess, setEmailIdSuccess] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordValueError, setPasswordValueError] = useState(false);
  const [passwordValueSuccess, setPasswordValueSuccess] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const regexEmailId = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const regexPasswordValue = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/;

  const handleBookNow = () => {
    setContryListBookNow(true);
  }

const handleLogin = (e) => {

  e.preventDefault()

  if (emailId.length === 0) {
    setEmailIdError('Please Enter Your Email');
    setEmailIdSuccess(false);
    setLoginSuccess(false);
  } else if (!regexEmailId.test(emailId)) {
    setEmailIdError('Please Enter a Valid Email');
    setEmailIdSuccess(false);
    setLoginSuccess(false);
  } else {
    setEmailIdError(false);
    setEmailIdSuccess(true);
    setLoginSuccess(true);
  }

  if (passwordValue.length === 0) {
    setPasswordValueError('Please Enter the Password');
    setPasswordValueSuccess(false);
    setLoginSuccess(false);
  } else if (!regexPasswordValue.test(passwordValue)) {
    setPasswordValueError('Please Enter a Valid Password');
    setPasswordValueSuccess(false);
    setLoginSuccess(false);
  } else {
    setPasswordValueError(false);
    setPasswordValueSuccess(true);
    setLoginSuccess(true);
  }

}

const handleLogout = () => {
  setLoginSuccess(false)
}

return (
  <AppContext.Provider value={{ countryListBookNow, handleBookNow, emailId, setEmailId, passwordValue, setPasswordValue, emailIdError, emailIdSuccess, passwordValueError, passwordValueSuccess, loginSuccess, setLoginSuccess, handleLogin, handleLogout }}>
    <Router>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes loginSuccess={loginSuccess} />}>
          <Route path="/profile" element={<Profile />}>
            <Route path="history" element={<History />} />
          </Route>
          <Route path="/booknow" element={<BookNow />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </AppContext.Provider>
);
}

export default App;
