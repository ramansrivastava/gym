import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Link
import Home from './home';
import RegistrationForm from './RegistrationForm';
import'./App.css'

const App = () => {
  return (
    <Router>
      <div>
      <header className="header">
        <div className="navbar">
          <div className="navbar-left">
            <img className="logo1" src="gymlogo.png" alt="" />
            <div>Expander gym</div>
          </div>
          <div className="navbar-right">
            <ul>
              <li><a href="/"><img src="home.png" alt="" /></a></li>
              <li><a href="/"><img src="about.png" alt="" /></a></li>
              <li><a href="#"><img src="location.png" alt="" /></a></li>
              <li><a href="#"><img src="call.png" alt="" /></a></li>
              <li><Link to="/registration"><button className="register-button">Register</button></Link></li> {/* Open RegistrationForm.jsx in a new tab */}
            </ul>
          </div>
        </div>
      </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
