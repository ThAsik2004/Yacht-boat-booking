export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="hero"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/843633/pexels-photo-843633.jpeg')",
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-text">
          <h1>Stay on Water in Phuket</h1>
          <p>Luxury yacht & catamaran stays with sunset, sea & silence</p>
          <button className="primary-btn">Explore Experiences</button>
        </div>
      </section>

      {/* BOAT CATEGORIES */}
      <section className="section">
        <h2 className="section-title">Our Experiences</h2>

        <div className="cards">
          <div className="card">
            <h3>Luxury Yacht</h3>
            <p>For couples & premium stays</p>
            <span>From ₹45,000 / night</span>
          </div>

          <div className="card">
            <h3>Catamaran Escape</h3>
            <p>Perfect for families & groups</p>
            <span>From ₹35,000 / night</span>
          </div>

          <div className="card">
            <h3>Sunset Cruise</h3>
            <p>Evening ocean experience</p>
            <span>From ₹20,000</span>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section dark">
        <h2 className="section-title">Guest Reviews</h2>

        <div className="reviews">
          <div className="review">
            ⭐⭐⭐⭐⭐
            <p>
              “One of the most unforgettable stays of my life. Luxury, privacy,
              and ocean vibes.”
            </p>
            <span>— Alex, UK</span>
          </div>

          <div className="review">
            ⭐⭐⭐⭐⭐
            <p>
              “Dock & Dream feels like a floating 5-star hotel. Highly trusted.”
            </p>
            <span>— Priya, India</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h3>Dock & Dream</h3>
        <p>Stay on Water • Phuket</p>

        <div className="footer-links">
          <span>About</span>
          <span>Experiences</span>
          <span>Booking</span>
          <span>Contact</span>
        </div>

        <small>© 2025 Dock & Dream. All rights reserved.</small>
      </footer>
    </>
  );
}
