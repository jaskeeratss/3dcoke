import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Overlay({ onNavigate }) {
  const containerRef = useRef()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.to('.hero-badge', { opacity: 1, y: 0, duration: 0.8, delay: 0.2 })
      tl.to('.hero-title', { opacity: 1, y: 0, duration: 1 }, '-=0.4')
      tl.to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
      tl.to('.hero-cta-group', { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')
      tl.to('.scroll-indicator', { opacity: 0.7, duration: 1 }, '-=0.2')

      // Helper function for standardized section reveals
      const registerSection = (id) => {
        gsap.to(`${id} .section-badge`, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          scrollTrigger: {
            trigger: id,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        })
        gsap.to(`${id} .section-heading`, {
          opacity: 1,
          y: 0,
          duration: 0.85,
          scrollTrigger: {
            trigger: id,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        })
        gsap.to(`${id} .section-body`, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: id,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        })
        gsap.to(`${id} .section-feature-grid, ${id} .section-stats, ${id} .section-action-row`, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: id,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        })
      }

      // Register all sections
      registerSection('#features')
      registerSection('#sensory')
      registerSection('#design')
      registerSection('#craftsmanship')
      registerSection('#heritage-spotlight')
      registerSection('#lifestyle')
      registerSection('#experience')
      registerSection('#final')
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div id="main-3d-experience" className="scroll-overlay" ref={containerRef}>
      {/* ===== SECTION 1: HERO (0% SCROLL) ===== */}
      <section id="hero" className="section section--hero">
        <div className="section-inner">
          <div className="hero-badge">
            <span className="dot"></span>
            Iconic Crisp Taste
          </div>

          <h1 className="hero-title">
            <span className="highlight">Diet</span> Coke
          </h1>

          <p className="hero-subtitle">
            Zero sugar. Unrivaled refreshment. Designed for those who refuse
            to compromise on ambition or taste.
          </p>

          <div className="hero-cta-group">
            <button
              className="hero-cta"
              id="hero-cta-btn"
              onClick={() => {
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span>Explore The Journey</span>
              <span className="arrow">↓</span>
            </button>
            <button className="btn-outline" onClick={() => onNavigate('flavors')}>
              Browse Flavors
            </button>
          </div>

          <div className="scroll-indicator">
            <span>Scroll To Experience</span>
            <div className="scroll-line"></div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: THE SPARK (12.5% SCROLL) ===== */}
      <section id="features" className="section section--features">
        <div className="section-inner">
          <p className="feature-label section-badge">Engineered For Focus</p>

          <h2 className="feature-heading section-heading">
            The distinct spark of<br />
            crisp carbonation
          </h2>

          <p className="feature-text section-body">
            Every ice-cold sip delivers our signature sensory punch: light, fizzy, and undeniably sharp.
            Formulated to keep your thoughts clear, your palate refreshed, and your tempo high.
          </p>

          <div className="feature-stats section-stats">
            <div className="stat">
              <span className="stat-value">0g</span>
              <span className="stat-label">Sugar</span>
            </div>
            <div className="stat">
              <span className="stat-value">1</span>
              <span className="stat-label">Calorie</span>
            </div>
            <div className="stat">
              <span className="stat-value">46mg</span>
              <span className="stat-label">Caffeine</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: SENSORY ANATOMY (25% SCROLL) ===== */}
      <section id="sensory" className="section section--aligned-right">
        <div className="section-inner">
          <p className="feature-label section-badge">Sensory Profile</p>

          <h2 className="feature-heading section-heading">
            The Three Phases<br />
            Of Every Sip
          </h2>

          <p className="feature-text section-body">
            Diet Coke is famously engineered as a multi-stage flavor crescendo. It begins with biting effervescence and ends in pure clean zero-calorie crispness.
          </p>

          <div className="mini-cards-stack section-feature-grid">
            <div className="mini-card">
              <span className="mini-card-step">01. The Bite</span>
              <h4>Micro-Carbonated Spark</h4>
              <p>Tight pressurized bubbles stimulate the palate with a refreshing effervescent rush.</p>
            </div>
            <div className="mini-card">
              <span className="mini-card-step">02. The Lift</span>
              <h4>Citrus &amp; Botanical Tone</h4>
              <p>Our proprietary aromatic essence unfurls with clean, bright citrus subtleties.</p>
            </div>
            <div className="mini-card">
              <span className="mini-card-step">03. The Finish</span>
              <h4>Zero-Residue Snap</h4>
              <p>Crisp phosphoric tang dissipates cleanly without syrup or heavy aftertaste.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: DESIGN & AEROSPACE ALUMINUM (37.5% SCROLL) ===== */}
      <section id="design" className="section section--aligned-left">
        <div className="section-inner">
          <p className="feature-label section-badge">Materials &amp; Design</p>

          <h2 className="feature-heading section-heading">
            Aerospace Aluminum.<br />
            Infinite Longevity.
          </h2>

          <p className="feature-text section-body">
            The iconic silver-and-crimson can is a triumph of industrial packaging. Engineered at just 0.097mm wall thickness, it withstands 90 PSI of internal pressure while chilling in record time.
          </p>

          <div className="feature-stats section-stats">
            <div className="stat">
              <span className="stat-value">60 Days</span>
              <span className="stat-label">Can to Can</span>
            </div>
            <div className="stat">
              <span className="stat-value">90 PSI</span>
              <span className="stat-label">Internal Pressure</span>
            </div>
            <div className="stat">
              <span className="stat-value">100%</span>
              <span className="stat-label">Recyclable</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: ZERO SACRIFICE (50% SCROLL - CENTER ZOOM) ===== */}
      <section id="craftsmanship" className="section section--hero">
        <div className="section-inner">
          <p className="feature-label section-badge">Zero Compromise</p>

          <h2 className="feature-heading section-heading" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            Bold Enough To Lead.<br />
            Light Enough To Never Slow Down.
          </h2>

          <p className="feature-text section-body" style={{ maxWidth: '640px', margin: '0 auto 2.5rem' }}>
            When deadlines loom or creative sparks ignite, Diet Coke provides the cold, sharp clarity that keeps visionaries moving forward without sugar crashes.
          </p>

          <div className="hero-cta-group section-action-row">
            <button className="btn-primary" onClick={() => onNavigate('order')}>
              Order Cold Packs
            </button>
            <button className="btn-outline" onClick={() => onNavigate('nutrition')}>
              Check Full Nutrition
            </button>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: HERITAGE SPOTLIGHT (62.5% SCROLL) ===== */}
      <section id="heritage-spotlight" className="section section--aligned-right">
        <div className="section-inner">
          <p className="feature-label section-badge">Pop Culture Legend</p>

          <h2 className="feature-heading section-heading">
            Four Decades of<br />
            Cultural Disruption
          </h2>

          <p className="feature-text section-body">
            From Karl Lagerfeld's couture custom bottles to backstage film sets and tech company war rooms, Diet Coke has remained the signature uniform of culture shapers since 1982.
          </p>

          <div className="mini-cards-stack section-feature-grid">
            <div className="mini-card">
              <span className="mini-card-step">1982 Launch</span>
              <h4>Radio City Debut</h4>
              <p>Premiered in Manhattan under blinding spotlights as the drink of the new era.</p>
            </div>
            <div className="mini-card">
              <span className="mini-card-step">Haute Couture</span>
              <h4>Runway Collaborations</h4>
              <p>Reimagined by fashion icons Jean Paul Gaultier, Marc Jacobs, and J.W. Anderson.</p>
            </div>
          </div>

          <button className="btn-outline" style={{ marginTop: '1.5rem' }} onClick={() => onNavigate('story')}>
            Explore Heritage Archive →
          </button>
        </div>
      </section>

      {/* ===== SECTION 7: MODERN RITUALS (75% SCROLL) ===== */}
      <section id="lifestyle" className="section section--aligned-left">
        <div className="section-inner">
          <p className="feature-label section-badge">Daily Rituals</p>

          <h2 className="feature-heading section-heading">
            The 3 PM Lifesaver &amp;<br />
            Midnight Breakthrough
          </h2>

          <p className="feature-text section-body">
            There is a distinct ritual in opening that pull-tab. The sharp hiss of pressurized CO₂, the frost condensing on silver aluminum, and the electric chill that wakes up your senses.
          </p>

          <div className="feature-stats section-stats">
            <div className="stat">
              <span className="stat-value">34°F</span>
              <span className="stat-label">Optimal Chill</span>
            </div>
            <div className="stat">
              <span className="stat-value">4 Flavors</span>
              <span className="stat-label">Crafted Varietals</span>
            </div>
            <div className="stat">
              <span className="stat-value">Millions</span>
              <span className="stat-label">Daily Fans</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: MIXOLOGY & CREATIVE TASTINGS (87.5% SCROLL) ===== */}
      <section id="experience" className="section section--aligned-right">
        <div className="section-inner">
          <p className="feature-label section-badge">Elevated Pairings</p>

          <h2 className="feature-heading section-heading">
            Zero-Proof Mocktails &amp;<br />
            Evening Spritzers
          </h2>

          <p className="feature-text section-body">
            Diet Coke isn't just an afternoon pick-me-up. Top mixologists use its crisp profile as a sparkling backbone for espresso tonics, smoked citrus highballs, and ruby spritzers.
          </p>

          <div className="section-action-row" style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <button className="btn-primary" onClick={() => onNavigate('mixology')}>
              View Recipe Book
            </button>
            <button className="btn-outline" onClick={() => onNavigate('flavors')}>
              Discover Feisty Cherry
            </button>
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: FINAL ORDER CALL (100% SCROLL) ===== */}
      <section id="final" className="section section--final">
        <div className="section-inner">
          <p className="final-label section-badge">Your Turn To Sip</p>

          <h2 className="final-heading section-heading">
            Elevate Every<br />
            Single Moment
          </h2>

          <p className="final-text section-body">
            Stock your fridge with the drink that defined an era. Crisp, clean, bold refreshment delivered straight to your door with courier priority.
          </p>

          <div className="final-cta-group section-action-row">
            <button className="btn-primary" id="order-btn" onClick={() => onNavigate('order')}>
              Order Cold Packs Now
            </button>
            <button className="btn-outline" id="flavors-btn" onClick={() => onNavigate('flavors')}>
              Explore Flavors Lineup
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
