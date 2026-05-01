import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">HD Estate</div>
        <div className="nav-links">
          <a href="#">About</a>
          <a href="#">Listings</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <button className="btn-primary">Book Appraisal</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>High Definition Living Starts Here</h1>
          <p>
            Helping Sydney buyers, sellers and investors move forward with confidence
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">View Listings</button>
            <button className="btn-outline">Contact Agent</button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>Modern real estate service with local Sydney knowledge</h2>
        <p>
          We provide premium service with strong communication and proven results.
        </p>
      </section>

      {/* PROPERTIES */}
      <section className="section">
        <h2>Featured Properties</h2>

        <div className="grid">

          <div className="card">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" />
            <div className="card-body">
              <h3>$1,250,000</h3>
              <p>Modern Family Home</p>
              <span>Parramatta, NSW</span>
            </div>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994" />
            <div className="card-body">
              <h3>$680/week</h3>
              <p>Stylish Apartment</p>
              <span>Granville, NSW</span>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="section dark">
        <h2>Our Services</h2>
        <div className="services">
          <div>Property Sales</div>
          <div>Property Management</div>
          <div>Free Appraisals</div>
          <div>Investment Advice</div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section">
        <h2>Client Reviews</h2>
        <p className="review">
          “Professional, clear and very helpful from start to finish.”
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 HD Estate</p>
      </footer>

    </div>
  );
}