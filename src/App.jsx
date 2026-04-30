import "./App.css";

function App() {
  return (
    <div className="site">
      <header className="navbar">
        <div className="logo">HD ESTATE</div>
        <nav>
          <a>Home</a>
          <a>About</a>
          <a>Listings</a>
          <a>Services</a>
          <a>Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroOverlay">
          <h1>High Definition Living Starts Here</h1>
          <p>Premium property sales, management and appraisal services across Sydney.</p>
          <div className="buttons">
            <button>Book an Appraisal</button>
            <button className="outline">View Listings</button>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="label">About HD Estate</p>
        <h2>Sydney property specialists focused on results.</h2>
        <p className="text">
          HD Estate is a modern real estate agency built on local market knowledge,
          strong presentation, clear communication and client focused service.
        </p>
      </section>

      <section className="section dark">
        <p className="label">Featured Listings</p>
        <h2>Properties For Sale</h2>

        <div className="cards">
          {[1, 2, 3].map((item) => (
            <div className="card" key={item}>
              <div className="propertyImage"></div>
              <div className="cardBody">
                <h3>Modern Family Home</h3>
                <p>Guildford, NSW</p>
                <p>4 Bed • 2 Bath • 2 Car</p>
                <strong>Contact Agent</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="label">Our Services</p>
        <h2>Real estate services tailored to your goals.</h2>

        <div className="services">
          <div>Property Sales</div>
          <div>Property Management</div>
          <div>Free Appraisals</div>
          <div>Investment Advice</div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to make your next property move?</h2>
        <p>Speak to HD Estate today.</p>
        <button>Contact Us</button>
      </section>
    </div>
  );
}

export default App;
