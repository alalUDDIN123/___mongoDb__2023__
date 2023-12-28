// App.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Import your CSS file
export const REACT_APP_SERVER_BACKEND_BASE_API=process.env.REACT_APP_SERVER_BACKEND_BASE_API

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  console.log(`${REACT_APP_SERVER_BACKEND_BASE_API}/users/login`)

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${REACT_APP_SERVER_BACKEND_BASE_API}/users/login`, { email:username, password }, { withCredentials: true });
      console.log(response.data.message);
      navigate('/random');
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
    }
  };


  return (
    <div className="App">
      <div className="login-container">
        <h1>Login</h1>
        <div className="input-container">
          <label>Username: </label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input-container">
          <label>Password: </label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={handleLogin}>Login</button>
    
      </div>
    </div>
  );
}

export default App;
