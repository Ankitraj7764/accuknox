import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
};

export default App;
