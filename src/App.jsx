import React from "react";
import { Phone, Mail, MapPin, BedDouble, Bath, Car, Star } from "lucide-react";
import "./App.css";

export default function App() {
  return (
    <div className="site">
      <header className="navbar">
        <div className="logo">HD ESTATE</div>
        <nav>
          <a href="#about">About</a>
          <a href="#listings">Listings</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-btn" href="#contact">Book Appraisal</a>
      </header>

      <section className="hero">
        <div className="hero-overlay">
          <p className="small-title">Sydney Real Estate Agency</p>
          <h1>High Definition Living Starts Here</h1>
          <p className="hero-text">
            Helping Sydney owners, buyers, renters and investors move forward with confidence.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">Book an Appraisal</a>
            <a href="#listings" className="secondary-btn">View Listings</a>
          </div>
        </div>
      </section>

      <section id="about" className="section two-col">
        <div>
          <p className="small-title">About HD Estate</p>
          <h2>Modern real estate service with local Sydney knowledge.</h2>
        </div>
        <p>
          HD Estate is focused on honest advice, strong communication and property results.
          Whether you are selling, leasing, buying or investing, we provide clear support from
          start to finish.
        </p>
      </section>

      <section id="listings" className="section dark">
        <p className="small-title center">Featured Listings</p>
        <h2 className="center">Properties for sale and rent</h2>

        <div className="cards">
          <PropertyCard
            image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80"
            price="$1,250,000"
            title="Modern Family Home"
            location="Parramatta, NSW"
            beds="4"
            baths="2"
            cars="2"
          />

          <PropertyCard
            image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
            price="$680 per week"
            title="Stylish Apartment"
            location="Granville, NSW"
            beds="2"
            baths="2"
            cars="1"
          />

          <PropertyCard
            image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
            price="Contact Agent"
            title="Investment Opportunity"
            location="Merrylands, NSW"
            beds="3"
            baths="1"
            cars="1"
          />
        </div>
      </section>

      <section id="services" className="section">
        <p className="small-title center">Our Services</p>
        <h2 className="center">Property services designed for Sydney clients</h2>

        <div className="service-grid">
          <div>Property Sales</div>
          <div>Property Management</div>
          <div>Free Appraisals</div>
          <div>Investment Advice</div>
        </div>
      </section>

      <section className="section dark">
        <p className="small-title center">Client Reviews</p>
        <h2 className="center">Service that clients remember</h2>

        <div className="reviews">
          <Review text="Professional, clear and very helpful from start to finish." />
          <Review text="Strong local knowledge and excellent communication." />
          <Review text="A reliable agency that genuinely cares about clients." />
        </div>
      </section>

      <section id="contact" className="section contact">
        <div>
          <p className="small-title">Contact HD Estate</p>
          <h2>Speak to an agent today</h2>
          <p>Phone, email or send an enquiry to request a free property appraisal.</p>

          <p><Phone size={18} /> 0420 200 969</p>
          <p><Mail size={18} /> Work email to be confirmed</p>
          <p><MapPin size={18} /> Sydney, NSW</p>
        </div>

        <form>
          <input placeholder="Full name" />
          <input placeholder="Email address" />
          <input placeholder="Phone number" />
          <textarea placeholder="Message"></textarea>
          <button type="button">Send Enquiry</button>
        </form>
      </section>
    </div>
  );
}

function PropertyCard({ image, price, title, location, beds, baths, cars }) {
  return (
    <div className="property-card">
      <img src={image} alt={title} />
      <div className="property-content">
        <h3>{price}</h3>
        <h4>{title}</h4>
        <p>{location}</p>
        <div className="features">
          <span><BedDouble size={16} /> {beds}</span>
          <span><Bath size={16} /> {baths}</span>
          <span><Car size={16} /> {cars}</span>
        </div>
      </div>
    </div>
  );
}

function Review({ text }) {
  return (
    <div className="review">
      <div className="stars">
        <Star size={16} fill="white" />
        <Star size={16} fill="white" />
        <Star size={16} fill="white" />
        <Star size={16} fill="white" />
        <Star size={16} fill="white" />
      </div>
      <p>“{text}”</p>
    </div>
  );
}