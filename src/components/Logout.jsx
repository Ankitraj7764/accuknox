// src/components/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const userData = { email, password }; 
    
    dispatch(loginUser(userData));
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
