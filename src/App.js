import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Events from './Events';
import News from './News';
import Developersapi from './Developersapi';
import Profile from './Profile';
import Navbar from './Navbar';
import Login from './Login'
import Weeklybrief from './Weeklybrief';
import FilterComponent from './FilterComponent';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="news" element={<News />} />
          <Route path="developerapi" element={<Developersapi />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="/weekly-brief" element={<Weeklybrief />} />
          <Route path="/filter" element={<FilterComponent />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
