import React, { useState } from 'react';

const SignupPage = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="sign-in-page">
      <div className="sign-in-box">
        <h2>Sign Up</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />

          <button type="button" onClick={onClose}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;