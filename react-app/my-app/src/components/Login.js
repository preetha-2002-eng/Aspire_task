import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import './Login.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'admin') {
      alert('Admin login successful');
      navigate('/admin');
      return;
    }

    try {
      const response = await axios.get('http://localhost:5000/users');
      const user = response.data.find((user) => user.username === username);

      if (!user) {
        alert('Invalid username and password');
        return;
      }

      // Compare the hashed password with the stored hash
      const isPasswordValid = await bcrypt.compare(password, user.password);

     if (isPasswordValid) {
        alert('Login successful');
        navigate(`/user/${user.id}`);
      } else {
        alert('Invalid username and password');
      }
    } catch (error) {
      console.error('Error logging in', error);
      alert('Error logging in');
    }
  };

  return (
    <div className='login-container'>
      
      <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <a className="close" href="/">X</a>
      
      <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <button type="submit">Login</button>

        <p>
        New user? <a onClick={() => navigate('/signup')}>Sign up</a>
      </p>
      </form>
      
    </div>
  );
};

export default Login;
