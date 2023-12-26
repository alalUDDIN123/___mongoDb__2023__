
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password },{ withCredentials: true });
      console.log(response.data.message);
      navigate('/random')
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
    }
  };

  const handleGetUser = async () => {
    try {
      const response = await axios.get('http://localhost:5000/user', { withCredentials: true });
      console.log('User data:', response.data.user);
    } catch (error) {
      console.error('Unauthorized:', error.response.data.message);
    }
  };



  return (
    <div className="App">
      <div>
        <label>Username: </label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGetUser}>Get User Data</button>

    </div>
  );
}

export default App;
