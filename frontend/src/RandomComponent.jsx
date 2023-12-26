// RandomComponent.js
import React from 'react';
import axios from 'axios';

const RandomComponent = () => {
  const handleGetRandomNumber = async () => {
    try {
      const response = await axios.get('http://localhost:5000/random-number', { withCredentials: true });
      console.log('Random Number:', response.data.randomNumber);
    } catch (error) {
      console.error('Unauthorized:', error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Random Number Generator</h2>
      <button onClick={handleGetRandomNumber}>Generate Random Number</button>
    </div>
  );
};

export default RandomComponent;
