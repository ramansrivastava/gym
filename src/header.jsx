import React from 'react'

export default function () {
  return (
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
              <li><a href="./RegistrationForm.jsx" target="_blank"><button className="register-button">Register</button></a></li> {/* Open RegistrationForm.jsx in a new tab */}
            </ul>
          </div>
        </div>
      </header>
    </div>
  )
}
