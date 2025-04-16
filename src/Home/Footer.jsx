import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div>
      <footer class="footer">
  <div class="footer-container">
    <div class="footer-section about">
      <h3>About Us</h3>
      <p>
        Welcome to our gift shop! Explore a wide range of unique and beautiful gifts for your loved ones.
      </p>
    </div>

    <div class="footer-section links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/gift">Gift</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">FAQs</a></li>
      </ul>
    </div>

    <div class="footer-section contact">
      <h3>Contact Us</h3>
      <p>Email: info@giftshop.com</p>
      <p>Phone: +1 123-456-7890</p>
      <p>Address: 123 Gift Lane, Joy City</p>
    </div>
  </div>

  <div class="footer-bottom">
    <p>&copy; 2025 Gift Shop. All Rights Reserved.</p>
  </div>
</footer>

    </div>
  )
}

export default Footer
