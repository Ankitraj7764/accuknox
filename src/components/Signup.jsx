import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const user = useSelector(state => state);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (user && user.email === email) {
      alert('User with this email already exists!');
    } else {
      const userData = { name, email, password };
      localStorage.setItem('userData', JSON.stringify(userData)); 
      dispatch(registerUser(userData));
      alert("Successfully registered. Please login.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Signup</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          style={styles.input}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          style={styles.input}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Signup</button>
      </form>
      <button onClick={() => navigate('/login')} style={styles.loginButton}>Login</button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#333',
    color: '#fff',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    backgroundColor: '#444',
    color: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  },
  loginButton: {
    backgroundColor: '#6c757d',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default Signup;
