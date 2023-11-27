import React, { useState } from 'react';
import SignInPage from './SignInPage';
import SignupPage from './SignUpPage';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const handleSignInClick = () => {
    setIsSignInOpen(!isSignInOpen);
  };
 
  const closeSignInPage = () => {
    setIsSignInOpen(false);
  };
  
  const handleSignupClick = () => {
    setIsSignInOpen(!isSignInOpen);
  };
 
  const closeSignupPage = () => {
    setIsSignInOpen(false);
  };
  const Navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="https://t3.ftcdn.net/jpg/01/66/84/96/360_F_166849625_tPjczxCHpG1egnai8eUNRg20SSvMjzBT.jpg" alt="Garden Logo"/>
      </div>
      <div className="navbar__links">
        <a onClick={()=>Navigate('/')}>Home</a>
        <a onClick={()=>Navigate('about')}>About</a>
        <a href="#profile">Profile</a>
        <a onClick={()=>Navigate('contact')}>Contact</a>
      </div>
      <div className="navbar__sign-in">
        <button onClick={handleSignInClick}>Sign In</button>
        {isSignInOpen && <SignInPage onClose={closeSignInPage} />}
      </div>
      <div className="navbar__sign-up">
        <button onClick={handleSignupClick}>Sign up</button>
        {isSignupOpen && <SignupPage onClose={closeSignupPage} />}
      </div>
    </nav>
  );
};

export default Navbar;