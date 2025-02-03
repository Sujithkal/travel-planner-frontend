import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import TripPlanner from './pages/TripPlanner';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/plan-trip" element={<TripPlanner />} />
            </Routes>
        </Router>
    );
};

export default App;
