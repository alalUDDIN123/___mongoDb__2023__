// RandomComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RandomComponent.css';

const RandomComponent = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomNumber = async () => {
      try {
        const response = await axios.get('http://localhost:5000/random-number', { withCredentials: true });
        setRandomNumber(response.data.randomNumber);
        setError(null); // Reset error if the request is successful
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          setError(error.response.data.message);
        } else if (error.request) {
          // The request was made but no response was received
          setError('No response from the server');
        } else {
          // Something happened in setting up the request that triggered an Error
          setError('An unexpected error occurred');
        }
      }
    };

    fetchRandomNumber();
  }, []);

  return (
    <div className="RandomComponent">
      <h2>Random Number Generator</h2>
      {error ? (
        <p className="error-message">{error}</p>
      ) : randomNumber !== null ? (
        <p>Random Number: {randomNumber}</p>
      ) : (
        <p>Loading random number...</p>
      )}
    
    </div>
  );
};

export default RandomComponent;
