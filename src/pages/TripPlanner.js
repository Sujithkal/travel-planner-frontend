import React, { useState } from 'react';
import axios from 'axios';

const TripPlanner = () => {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handlePlanTrip = async (e) => {
    e.preventDefault();

    if (!destination || !dates) {
      setErrorMessage('Please enter both destination and travel dates');
      return;
    }

    try {
      const response = await axios.post('https://travel-planner-frontend-i2nowgd3z-sujith-kallutlas-projects.vercel.app/', {
        destination,
        dates,
      });

      setSuccessMessage(response.data.message);
      setErrorMessage('');
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div>
      <h2>Plan Your Trip</h2>
      <form onSubmit={handlePlanTrip}>
        <div>
          <label>Destination:</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Enter your destination"
          />
        </div>
        <div>
          <label>Travel Dates:</label>
          <input
            type="text"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
            placeholder="Enter your travel dates"
          />
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <button type="submit">Plan Trip</button>
      </form>
    </div>
  );
};

export default TripPlanner;
