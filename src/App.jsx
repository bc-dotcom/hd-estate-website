import React, { useEffect } from "react";
import {
  BedDouble,
  Bath,
  Car,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Users,
  Camera,
} from "lucide-react";
import "./App.css";

const properties = [
  {
    price: "$1,250,000",
    title: "Modern Family Residence",
    location: "Parramatta, NSW",
    beds: 4,
    baths: 2,
    cars: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    price: "$680 per week",
    title: "Stylish Apartment Living",
    location: "Granville, NSW",
    beds: 2,
    baths: 2,
    cars: 1,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    price: "Contact Agent",
    title: "Investment Opportunity",
    location: "Merrylands, NSW",
    beds: 3,
    baths: 1,
    cars: 1,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
  },
];

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/", icon: Users },
  { name: "Instagram", href: "https://www.instagram.com/", icon: Camera },
];

const browseLinks = [
  { name: "About us", href: "#about" },
  { name: "Sell your property", href: "#contact" },
  { name: "Customer feedback", href: "#contact" },
];

const termsLinks = [
  { name: "Legal information", href: "#contact" },
  { name: "Collection notice", href: "#contact" },
  { name: "Anti Money laundering", href: "#contact" },
];

const propertyActions = [
  {
    label: "Lease",
    video: "https://www.pexels.com/download/video/4301616/",
    fallback: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1100&q=80",
  },
  {
    label: "Buy",
    video: "https://www.pexels.com/download/video/15887298/",
    fallback: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1100&q=80",
  },
  {
    label: "Sell",
    video: "https://www.pexels.com/download/video/16641481/",
    fallback: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1100&q=80",
  },
];

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => {
      observer.observe(el);

      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("show");
      }
    });
  }, []);

  return (
    <div className="site">
      <header className="navbar">
        <a className="brand" href="#home" aria-label="HD Estate home">
          <img src="/hd-estate-logo-white.png" alt="" />
          <span className="brandName"><strong>HD</strong> ESTATE</span>
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#listings">Listings</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="#footer-connect">Connect</a>
        </nav>
        <a className="navButton" href="#contact">Book Appraisal</a>
      </header>

      <section className="hero" id="home">
        <div className="heroBackdrop" aria-hidden="true">
          <span className="heroSlide slideOne"></span>
          <span className="heroSlide slideTwo"></span>
          <span className="heroSlide slideThree"></span>
        </div>
        <div className="heroInner">
          <p className="eyebrow">Sydney Real Estate Agency</p>

          <h1>Local Knowledge. Strong Results.</h1>

          <p className="heroMotto">
            High Definition Living Starts Here
          </p>

          <div className="appraisalBox">
            <input placeholder="Start typing your property address" />
            <button>Find Out</button>
          </div>

          <p className="heroSmallText">
            Looking to buy, sell, lease or manage a property? Speak with HD Estate today.
          </p>

          <div className="heroActions">
            <a href="#contact" className="primaryBtn">Book an Appraisal</a>
            <a href="#listings" className="secondaryBtn">View Listings</a>
            <a href="#contact" className="secondaryBtn">Contact Us</a>
          </div>
        </div>
      </section>

      <section id="about" className="section about fade-up">
        <div>
          <p className="eyebrow">About HD Estate</p>
          <h2>Modern property service with local Sydney knowledge.</h2>
        </div>
        <p>
          HD Estate focuses on clear communication, strong market knowledge and client-focused results.
          Whether you are selling, leasing, buying or investing, we help you move forward with confidence.
        </p>
      </section>

      <section id="listings" className="section listings">
        <div className="listingSplit">
          <div className="listingActions" aria-label="Property options">
            {propertyActions.map((action) => (
              <a
                className="listingAction"
                href="#contact"
                key={action.label}
                style={{ backgroundImage: `url(${action.fallback})` }}
              >
                <video
                  className="listingActionVideo"
                  src={action.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />
                <span>{action.label}</span>
              </a>
            ))}
          </div>

          <div className="listingDivider" aria-hidden="true"></div>

          <div className="listingContent">
            <p className="eyebrow">Featured Listings</p>
            <h2>Properties for sale and rent</h2>

            <div className="propertyGrid">
              {properties.map((property) => (
                <div className="propertyCard" key={property.title}>
                  <img src={property.image} alt={property.title} />
                  <div className="propertyBody">
                    <h3>{property.price}</h3>
                    <h4>{property.title}</h4>
                    <p>{property.location}</p>
                    <div className="features">
                      <span><BedDouble size={17} /> {property.beds}</span>
                      <span><Bath size={17} /> {property.baths}</span>
                      <span><Car size={17} /> {property.cars}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section services fade-up">
        <p className="eyebrow center">Our Services</p>
        <h2 className="center">Property services designed for Sydney clients</h2>

        <div className="serviceGrid">
          <div>
            <h3>Property Sales</h3>
            <p>Strategic selling support to maximise value and attract serious buyers.</p>
          </div>
          <div>
            <h3>Property Management</h3>
            <p>Reliable rental management focused on care, communication and protection.</p>
          </div>
          <div>
            <h3>Free Appraisals</h3>
            <p>Clear property value guidance based on current Sydney market conditions.</p>
          </div>
          <div>
            <h3>Investment Advice</h3>
            <p>Practical advice to help investors make confident property decisions.</p>
          </div>
        </div>
      </section>

      <section className="cta fade-up">
        <div className="ctaSlider">
          <img src="/images/sydney1.png" alt="Sydney suburb view" />
          <img src="/images/sydney2.png" alt="Sydney suburb homes" />
          <img src="/images/sydney3.png" alt="Sydney harbour view" />
          <img src="/images/sydney4.png" alt="Sydney residential area" />
          <img src="/images/sydney5.png" alt="Sydney city and suburbs" />
        </div>

        <div className="ctaOverlay"></div>

        <div className="ctaContent">
          <h2>Ready to understand your property value?</h2>
          <p>Book a free appraisal and speak with HD Estate today.</p>
          <a href="#contact" className="primaryBtn">
            Get Free Appraisal <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section id="contact" className="section contact fade-up">
        <div>
          <p className="eyebrow">Contact HD Estate</p>
          <h2>Speak to an agent today</h2>
          <p className="contactIntro">
            Send an enquiry and we will contact you about sales, rentals, appraisals or property management.
          </p>

          <p><Phone size={18} /> 0420 200 969</p>
          <p><Mail size={18} /> Work email to be confirmed</p>
          <p><MapPin size={18} /> Sydney, NSW</p>
        </div>

        <form>
          <input placeholder="Full name" />
          <input placeholder="Email address" />
          <input placeholder="Phone number" />
          <textarea placeholder="How can we help?"></textarea>
          <button type="button">Send Enquiry</button>
        </form>
      </section>

      <footer>
        <div className="footerIntro">
          <a className="brand footerBrand" href="#home" aria-label="HD Estate home">
            <img src="/hd-estate-logo-white.png" alt="" />
            <span className="brandName"><strong>HD</strong> ESTATE</span>
          </a>
          <p>High Definition Living Starts Here</p>
          <small>&copy; 2026 HD Estate. All rights reserved.</small>
        </div>

        <div className="footerColumn">
          <h2>Browse</h2>
          {browseLinks.map((link) => (
            <a href={link.href} key={link.name}>{link.name}</a>
          ))}
        </div>

        <div className="footerColumn">
          <h2>Terms</h2>
          {termsLinks.map((link) => (
            <a href={link.href} key={link.name}>{link.name}</a>
          ))}
        </div>

        <div id="footer-connect" className="footerColumn footerSocial">
          <h2>Connect</h2>
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <a href={href} key={name} target="_blank" rel="noreferrer">
              <Icon size={18} strokeWidth={2.1} />
              <span>{name}</span>
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
