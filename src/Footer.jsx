import React, { useState } from 'react'

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
    }
  }

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            DIET<span className="logo-accent">&nbsp;COKE</span>
          </div>
          <p className="footer-tagline">
            Zero sugar. Maximum refreshment. Fueling ambitious minds and bold creators since 1982.
          </p>

          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email for VIP drops..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input"
              required
            />
            <button type="submit" className="btn-primary newsletter-btn">
              {subscribed ? 'Subscribed ✓' : 'Join'}
            </button>
          </form>
          {subscribed && (
            <p className="sub-feedback">Welcome to the Club. Watch your inbox for secret releases!</p>
          )}
        </div>

        <div className="footer-links-group">
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><button onClick={() => onNavigate('home')}>3D Experience</button></li>
              <li><button onClick={() => onNavigate('flavors')}>Flavors &amp; Variations</button></li>
              <li><button onClick={() => onNavigate('mixology')}>Mixology &amp; Cocktails</button></li>
              <li><button onClick={() => onNavigate('order')}>Order Online</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Brand &amp; Values</h4>
            <ul>
              <li><button onClick={() => onNavigate('story')}>Our Heritage</button></li>
              <li><button onClick={() => onNavigate('nutrition')}>Nutrition &amp; Ingredients</button></li>
              <li><button onClick={() => onNavigate('sustainability')}>Sustainability Mission</button></li>
              <li><button onClick={() => onNavigate('faq')}>Help &amp; FAQ</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Specifications</h4>
            <div className="spec-item">
              <span className="spec-k">Calories</span>
              <span className="spec-v">1 Cal</span>
            </div>
            <div className="spec-item">
              <span className="spec-k">Sugar</span>
              <span className="spec-v">0 Grams</span>
            </div>
            <div className="spec-item">
              <span className="spec-k">Caffeine</span>
              <span className="spec-v">46 mg</span>
            </div>
            <div className="spec-item">
              <span className="spec-k">Can Material</span>
              <span className="spec-v">100% Recyclable</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 The Coca-Cola Company. All Rights Reserved. "Diet Coke" is a registered trademark.</p>
        <div className="footer-legal-links">
          <span>Privacy Policy</span>
          <span>•</span>
          <span>Terms of Use</span>
          <span>•</span>
          <span>Cookie Preferences</span>
        </div>
      </div>
    </footer>
  )
}
