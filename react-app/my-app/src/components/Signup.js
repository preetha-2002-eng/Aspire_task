import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import './Signup.css'

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    return usernameRegex.test(username) && username.length >= 3;
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!validateUsername(username)) {
      alert('Username must be at least 3 characters long and can only contain letters, numbers, and underscores.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      alert('Password must be at least 8 characters long, include at least one letter, one number, and one special character.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.get('http://localhost:5000/users');
      const existingUser = response.data.find((user) => user.email === email);

      if (existingUser) {
        alert('You already have an account');
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        await axios.post('http://localhost:5000/users', {
          username,
          email,
          password: hashedPassword,
        });
        alert('Signup successful');
        navigate('/login');
      }
    } catch (error) {
      console.error('Error signing up', error);
    }
  };

  return (
    <div className='signup-container'>
      
      <form onSubmit={handleSignup}>

      <h2>Signup</h2>
      <a className="close" href="/">X</a>
      <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input
          type="password"
          placeholder="Enter Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>

        <p>
        Already have an account? <a onClick={() => navigate('/login')}>Login</a>
      </p>
      </form>
     
    </div>
  );
};

export default Signup;
