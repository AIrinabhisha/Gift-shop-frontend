import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
       <nav class="navbar">
    <ul class="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/gift">Gift</a></li>
     
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
    </div>
  )
}

export default Navbar
