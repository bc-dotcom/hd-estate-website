import React, { useEffect, useState } from "react";
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
  Upload,
  Search,
  SlidersHorizontal,
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
    price: "$980,000",
    title: "Updated Brick Home",
    location: "Parramatta, NSW",
    beds: 3,
    baths: 2,
    cars: 1,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80",
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
    price: "$720 per week",
    title: "Townhouse Near Station",
    location: "Guildford, NSW",
    beds: 3,
    baths: 2,
    cars: 2,
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80",
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
  {
    price: "$1,080,000",
    title: "Family Home With Outdoor Space",
    location: "Guildford, NSW",
    beds: 4,
    baths: 2,
    cars: 2,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80",
  },
];

const facebookUrl = "https://www.facebook.com/profile.php?id=61588757889392";

const socialLinks = [
  { name: "Facebook", href: facebookUrl, icon: Users },
  { name: "Instagram", href: "https://www.instagram.com/hdestategroup?igsh=YTNjM2k4OXppYnRi", icon: Camera },
];

const browseLinks = [
  { name: "About us", href: "#about" },
  { name: "Sell your property", href: "#contact" },
  { name: "Customer feedback", action: "feedback" },
];

const termsLinks = [
  { name: "Legal information", action: "legal" },
  { name: "Collection notice", action: "collection" },
  { name: "Anti Money laundering", action: "antiMoneyLaundering" },
];

const legalPagePaths = {
  legal: "/legal-information",
  collection: "/collection-notice",
  antiMoneyLaundering: "/anti-money-laundering",
};

const getLegalPageFromPath = () => {
  const path = window.location.pathname;
  return Object.keys(legalPagePaths).find((page) => legalPagePaths[page] === path) || null;
};

const getPropertySearchFromPath = () => {
  if (window.location.pathname !== "/properties") {
    return null;
  }

  return new URLSearchParams(window.location.search).get("area") || "";
};

const propertyActions = [
  {
    label: "Buy",
    slug: "buy",
    video: "https://www.pexels.com/download/video/15887298/",
    fallback: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1100&q=80",
  },
  {
    label: "Sell",
    slug: "sell",
    enquiry: true,
    video: "https://www.pexels.com/download/video/16641481/",
    fallback: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1100&q=80",
  },
  {
    label: "Lease",
    slug: "lease",
    enquiry: true,
    video: "https://www.pexels.com/download/video/4301616/",
    fallback: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1100&q=80",
  },
  {
    label: "Rent",
    slug: "rent",
    video: "https://www.pexels.com/download/video/7578546/",
    fallback: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=80",
  },
];

const getEnquiryTypeFromPath = () => {
  const match = window.location.pathname.match(/^\/enquiry\/(buy|sell|lease|rent)$/);
  return match ? match[1] : null;
};

export default function App() {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [legalPage, setLegalPage] = useState(getLegalPageFromPath);
  const [propertySearch, setPropertySearch] = useState(getPropertySearchFromPath);
  const [enquiryType, setEnquiryType] = useState(getEnquiryTypeFromPath);
  const [searchInput, setSearchInput] = useState(getPropertySearchFromPath() || "");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const showHomePage = (event, hash = "#home") => {
    event?.preventDefault();
    setLegalPage(null);
    setPropertySearch(null);
    setEnquiryType(null);

    if (window.location.pathname !== "/" || window.location.hash !== hash) {
      window.history.pushState(null, "", `/${hash}`);
    }

    requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    });
  };

  const showTermsPage = (page) => {
    setLegalPage(page);
    setPropertySearch(null);
    setEnquiryType(null);
    window.history.pushState({ legalPage: page }, "", legalPagePaths[page]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showPropertyResults = (area) => {
    const cleanArea = area.trim();
    setLegalPage(null);
    setPropertySearch(cleanArea);
    setEnquiryType(null);
    setSearchInput(cleanArea);
    window.history.pushState(
      { propertySearch: cleanArea },
      "",
      `/properties${cleanArea ? `?area=${encodeURIComponent(cleanArea)}` : ""}`
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePropertySearch = (event) => {
    event.preventDefault();
    showPropertyResults(searchInput);
  };

  const showEnquiryPage = (event, type) => {
    event.preventDefault();
    setLegalPage(null);
    setPropertySearch(null);
    setEnquiryType(type);
    window.history.pushState({ enquiryType: type }, "", `/enquiry/${type}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const legalPages = {
    legal: {
      eyebrow: "Terms",
      title: "Legal information",
      image: "/images/sydney2.png",
      imageAlt: "Sydney residential property",
      paragraphs: [
        "The information provided on this website is for general informational purposes only and does not constitute legal, financial, or real estate advice. While HD Estate makes every effort to ensure the accuracy and reliability of the information presented, we make no guarantees, representations, or warranties of any kind, express or implied, about the completeness, accuracy, or suitability of the content.",
        "All property listings, pricing, and availability are subject to change without notice. Interested parties should make their own enquiries and seek independent legal advice before making any decisions relating to property investments, leasing, or transactions.",
        "HD Estate will not be held liable for any loss, damage, or inconvenience arising from the use of, or reliance on, the information contained on this website.",
      ],
    },
    collection: {
      eyebrow: "Terms",
      title: "Collection notice",
      image: "/images/sydney3.png",
      imageAlt: "Sydney city and suburbs",
      paragraphs: [
        "HD Estate collects, uses, and discloses personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.",
        "We collect personal information necessary to provide our real estate and property management services, including responding to enquiries, managing properties, and processing applications. This may include your name, contact details, identification, and relevant financial information. Where required, we may also collect information from third parties such as referees or employers.",
        "Your information may be disclosed to landlords, tenants, contractors, service providers, and government authorities (including NSW Fair Trading) where necessary or required by law. If you do not provide this information, we may be unable to deliver our services.",
        "By submitting your details or engaging with HD Estate, you consent to the collection, use, and disclosure of your personal information for these purposes.",
        "You may request access to or correction of your personal information at any time by contacting us.",
      ],
    },
    antiMoneyLaundering: {
      eyebrow: "Terms",
      title: "Anti Money laundering",
      image: "/images/sydney4.png",
      imageAlt: "Sydney residential area",
      paragraphs: [
        "HD Estate is committed to complying with all applicable anti-money laundering and counter-terrorism financing obligations under Australian law.",
        "As part of this commitment, we may be required to verify the identity of our clients, collect and retain certain personal information, and conduct due diligence on transactions. We may also be required to report certain matters to relevant authorities where mandated by law.",
        "By engaging our services, you agree to provide accurate and complete information as reasonably requested to enable us to meet our legal and regulatory obligations. Failure to do so may result in delays or an inability to provide services.",
        "All information collected for compliance purposes is handled in accordance with our privacy obligations.",
      ],
    },
  };

  const currentLegalPage = legalPage ? legalPages[legalPage] : null;
  const currentEnquiryAction = propertyActions.find((action) => action.slug === enquiryType);
  const filteredProperties = propertySearch
    ? properties.filter((property) =>
        `${property.location} ${property.title}`.toLowerCase().includes(propertySearch.toLowerCase())
      )
    : properties;

  useEffect(() => {
    const handlePopState = () => {
      setLegalPage(getLegalPageFromPath());
      setPropertySearch(getPropertySearchFromPath());
      setEnquiryType(getEnquiryTypeFromPath());
      setSearchInput(getPropertySearchFromPath() || "");
      window.scrollTo({ top: 0 });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

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
        <div className="headerBrandGroup">
          <a className="brand" href="#home" aria-label="HD Estate home" onClick={(event) => showHomePage(event)}>
            <img src="/hd-estate-logo-white.png" alt="" />
            <span className="brandName"><strong>HD</strong> ESTATE</span>
          </a>
          <div className="headerSocial" aria-label="Social links">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a href={href} key={name} aria-label={name} title={name}>
                <Icon size={18} strokeWidth={2.1} />
              </a>
            ))}
          </div>
        </div>
        <nav>
          <a href="#about" onClick={(event) => showHomePage(event, "#about")}>About</a>
          <a href="#listings" onClick={(event) => showHomePage(event, "#listings")}>Listings</a>
          <a href="#services" onClick={(event) => showHomePage(event, "#services")}>Services</a>
          <a href="#contact" onClick={(event) => showHomePage(event, "#contact")}>Contact</a>
          <a href={facebookUrl}>Connect</a>
        </nav>
      </header>

      {currentLegalPage ? (
        <main className="legalPage">
          <section className="legalHero">
            <div className="legalPageTitle">
              <div>
                <p className="eyebrow">{currentLegalPage.eyebrow}</p>
                <h1>{currentLegalPage.title}</h1>
              </div>
              <a href="#legal-content">View below</a>
            </div>
            <img src={currentLegalPage.image} alt={currentLegalPage.imageAlt} />
          </section>

          <section id="legal-content" className="legalContent">
            <div className="legalCopy">
              {currentLegalPage.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        </main>
      ) : currentEnquiryAction ? (
        <main className="enquiryPage">
          <section
            className="enquiryHero"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${currentEnquiryAction.fallback})` }}
          >
            <p className="eyebrow">Property Enquiry</p>
            <h1>{currentEnquiryAction.label} enquiry</h1>
            <p>Tell us a few details and HD Estate will contact you about your property needs.</p>
          </section>

          <section className="enquiryContent">
            <div className="enquiryIntro">
              <p className="eyebrow">{currentEnquiryAction.label}</p>
              <h2>Send your details</h2>
              <p>
                Complete the form and our team will follow up with clear next steps for your
                {` ${currentEnquiryAction.label.toLowerCase()} `}enquiry.
              </p>
            </div>

            <form className="enquiryForm">
              <input value={currentEnquiryAction.label} readOnly aria-label="Enquiry type" />
              <input placeholder="Full name" />
              <input placeholder="Email address" />
              <input placeholder="Phone number" />
              <input placeholder="Property address or preferred suburb" />
              <select defaultValue="">
                <option value="" disabled>Preferred contact time</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
              <textarea placeholder="Tell us what you need help with"></textarea>
              <button type="button">Submit Enquiry</button>
            </form>
          </section>
        </main>
      ) : propertySearch !== null ? (
        <main className="resultsPage">
          <section className="resultsSearchSection">
            <form className="resultsSearchBar" onSubmit={handlePropertySearch}>
              <Search size={18} strokeWidth={2} />
              <input
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                placeholder="Search suburb or area"
              />
              <button className="filterBtn" type="button">
                <SlidersHorizontal size={16} /> Filters
              </button>
              <button className="searchPill" type="submit">Search</button>
            </form>
          </section>

          <section className="resultsControls">
            <div>
              {propertySearch && <span className="areaChip">{propertySearch}</span>}
              <p>
                Showing {filteredProperties.length} of {properties.length} listings
                {propertySearch ? ` for ${propertySearch}` : ""}
              </p>
            </div>
            <div className="resultsFilterGroup" aria-label="Listing filters">
              <button type="button">Buy</button>
              <button type="button">Rent</button>
              <button type="button">Price</button>
              <button type="button">Beds</button>
            </div>
          </section>

          <section className="resultsGrid" aria-label="Property search results">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <article className="propertyCard resultCard" key={`${property.title}-${property.location}`}>
                  <img src={property.image} alt={property.title} />
                  <div className="propertyBody">
                    <span className="propertyType">House</span>
                    <h3>{property.price}</h3>
                    <h4>{property.title}</h4>
                    <p>{property.location}</p>
                    <div className="features">
                      <span><BedDouble size={17} /> {property.beds}</span>
                      <span><Bath size={17} /> {property.baths}</span>
                      <span><Car size={17} /> {property.cars}</span>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="noResults">
                <h2>No listings found</h2>
                <p>Try searching another Sydney suburb or area.</p>
              </div>
            )}
          </section>
        </main>
      ) : (
        <>
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

          <form className="appraisalBox" onSubmit={handlePropertySearch}>
            <input
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              placeholder="Search suburb or area"
            />
            <button type="submit">Search</button>
          </form>

          <a href="#contact" className="appraisalLink" onClick={(event) => showHomePage(event, "#contact")}>
            Book free appraisal <ArrowRight size={18} />
          </a>

          <p className="heroSmallText">
            Looking to buy, sell, lease or manage a property? Speak with HD Estate today.
          </p>
        </div>
      </section>

      <section id="about" className="section about fade-up">
        <div>
          <p className="eyebrow">About HD Estate</p>
          <h2>This is where high-definition living starts.</h2>
        </div>
        <div className="aboutCopy">
          <p>
            HD Estate is a professional real estate agency based in Guildford, proudly servicing all Sydney
            suburbs. We specialise in property management and residential sales, delivering reliable,
            transparent, and results-driven service to property owners, investors, and sellers.
          </p>
          <p>
            Built on years of industry experience, HD Estate was created to provide a more personalised and
            dependable approach to real estate. From proactive property management to strategic sales
            campaigns, we are committed to maximising property value and achieving the best possible outcomes
            for our clients.
          </p>
          <p>
            At HD Estate, we focus on strong communication, professionalism, and long-term relationships built
            on trust, performance, and results.
          </p>
        </div>
      </section>

      <section id="listings" className="section listings">
        <div className="listingSplit">
          <div className="listingActions" aria-label="Property options">
            {propertyActions.map((action) => (
              <a
                className="listingAction"
                href={action.enquiry ? `/enquiry/${action.slug}` : "/properties"}
                key={action.label}
                onClick={(event) => {
                  if (action.enquiry) {
                    showEnquiryPage(event, action.slug);
                    return;
                  }

                  event.preventDefault();
                  showPropertyResults("");
                }}
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
        </>
      )}

      <footer>
        <div className="footerIntro">
          <a
            className="brand footerBrand"
            href="#home"
            aria-label="HD Estate home"
            onClick={(event) => showHomePage(event)}
          >
            <img src="/hd-estate-logo-white.png" alt="" />
            <span className="brandName"><strong>HD</strong> ESTATE</span>
          </a>
          <p>High Definition Living Starts Here</p>
          <small>&copy; 2026 HD Estate. All rights reserved.</small>
        </div>

        <div className="footerColumn">
          <h2>Browse</h2>
          {browseLinks.map((link) => (
            link.action === "feedback" ? (
              <button
                className="footerTextButton"
                type="button"
                onClick={() => setIsFeedbackOpen(true)}
                key={link.name}
              >
                {link.name}
              </button>
            ) : (
              <a href={link.href} onClick={(event) => showHomePage(event, link.href)} key={link.name}>{link.name}</a>
            )
          ))}
        </div>

        <div className="footerColumn">
          <h2>Terms</h2>
          {termsLinks.map((link) => (
            link.action ? (
              <button
                className="footerTextButton"
                type="button"
                onClick={() => showTermsPage(link.action)}
                key={link.name}
              >
                {link.name}
              </button>
            ) : (
              <a href={link.href} onClick={(event) => showHomePage(event, link.href)} key={link.name}>{link.name}</a>
            )
          ))}
        </div>

        <div id="footer-connect" className="footerColumn footerSocial">
          <h2>Connect</h2>
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <a href={href} key={name}>
              <Icon size={18} strokeWidth={2.1} />
              <span>{name}</span>
            </a>
          ))}
        </div>
      </footer>

      {isFeedbackOpen && (
        <div className="feedbackOverlay" role="dialog" aria-modal="true" aria-labelledby="feedback-title">
          <div className="feedbackModal">
            <button
              className="feedbackClose"
              type="button"
              aria-label="Close feedback form"
              onClick={() => setIsFeedbackOpen(false)}
            >
              ×
            </button>

            <div className="feedbackInfo">
              <p className="eyebrow">Customer Feedback</p>
              <h2 id="feedback-title">Lodge feedback</h2>
              <p>
                Tell us about your experience with HD Estate. Include the property, service or team member
                involved if it helps us review your feedback properly.
              </p>

              <ul>
                <li>Your name and contact details</li>
                <li>The property address, if relevant</li>
                <li>Details of your feedback or concern</li>
                <li>Any supporting information</li>
              </ul>
            </div>

            <form className="feedbackForm">
              <input placeholder="Full name" />
              <input placeholder="Email address" />
              <input placeholder="Phone number" />
              <input placeholder="Property address, if relevant" />
              <label className="feedbackField">
                <span>Please provide your feedback</span>
                <small>
                  If your feedback exceeds 2,000 characters or includes an email thread as evidence,
                  please attach it as a document below.
                </small>
                <textarea
                  maxLength="2000"
                  placeholder="Tell us about your experience"
                  value={feedbackMessage}
                  onChange={(event) => setFeedbackMessage(event.target.value)}
                ></textarea>
                <em>{feedbackMessage.length}/2000</em>
              </label>
              <label className="fileUpload">
                <span>Attach File</span>
                <small>Please upload any relevant file(s) if applicable</small>
                <input type="file" multiple />
                <div>
                  <Upload size={34} strokeWidth={1.8} />
                  <p><strong>Choose a file to upload</strong> <span>or drag and drop here</span></p>
                </div>
              </label>
              <button className="feedbackSubmit" type="button">Submit Feedback</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
