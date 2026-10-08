import React, { useState } from 'react'

export default function SustainabilityPage({ onNavigate }) {
  const [pledgeCount, setPledgeCount] = useState(14820)
  const [hasPledged, setHasPledged] = useState(false)

  const handlePledge = () => {
    if (!hasPledged) {
      setPledgeCount((prev) => prev + 1)
      setHasPledged(true)
    }
  }

  const sustainabilityPillars = [
    {
      stat: '100%',
      title: 'Infinitely Recyclable Aluminum',
      desc: 'Every single Diet Coke can is made of aluminum that can be melted down and re-engineered back onto store shelves in as few as 60 days.',
      icon: '♻️',
    },
    {
      stat: '73%',
      title: 'Average Recycled Content',
      desc: 'Our aluminum cans average over 73% post-consumer recycled metal, substantially cutting carbon footprints compared to virgin mining.',
      icon: '🌍',
    },
    {
      stat: '28%',
      title: 'Water Footprint Reduction',
      desc: 'Our bottling facilities have reduced freshwater intake by 28% over the past decade through closed-loop advanced purification systems.',
      icon: '💧',
    },
    {
      stat: 'Zero',
      title: 'Direct Manufacturing Waste',
      desc: 'Over 95% of our primary North American and European production hubs have certified zero-waste-to-landfill designations.',
      icon: '🌱',
    },
  ]

  return (
    <div className="subpage-wrapper">
      <header className="subpage-hero">
        <span className="subpage-pill">Planet &amp; Purpose</span>
        <h1 className="subpage-title">Sustainability &amp; Closed Loop</h1>
        <p className="subpage-sub">
          Iconic taste shouldn't cost the earth. Discover our mission toward a World Without Waste.
        </p>
      </header>

      {/* 4 Pillars Grid */}
      <div className="sustainability-grid">
        {sustainabilityPillars.map((pillar, i) => (
          <div key={i} className="sustain-card">
            <div className="sustain-icon">{pillar.icon}</div>
            <div className="sustain-stat">{pillar.stat}</div>
            <h3 className="sustain-title">{pillar.title}</h3>
            <p className="sustain-desc">{pillar.desc}</p>
          </div>
        ))}
      </div>

      {/* Infinite Cycle Diagram / Steps */}
      <div className="cycle-section">
        <h2 className="cycle-title">The 60-Day Aluminum Life Cycle</h2>
        <div className="cycle-steps">
          <div className="step-card">
            <span className="step-num">Step 1</span>
            <h4>Sip &amp; Enjoy</h4>
            <p>You drink crisp, ice-cold Diet Coke and drop the clean can in your recycling bin.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-card">
            <span className="step-num">Step 2</span>
            <h4>Sorting &amp; Smelting</h4>
            <p>The can is collected, shredded, and melted into solid ingots at specialized smelting hubs.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-card">
            <span className="step-num">Step 3</span>
            <h4>Rolling &amp; Rebirth</h4>
            <p>Rolled into ultra-thin sheets and reshaped into brand-new cans, back on shelves in 60 days.</p>
          </div>
        </div>
      </div>

      {/* Community Pledge Card */}
      <div className="pledge-card">
        <h3>Join The 100% Can Recycling Pledge</h3>
        <p>
          Join {pledgeCount.toLocaleString()} conscious drinkers who commit to recycling every can they open.
        </p>

        {hasPledged ? (
          <div className="pledge-confirmed">
            🌱 Thank you for pledging! Together we close the loop.
          </div>
        ) : (
          <button className="btn-primary" onClick={handlePledge}>
            Take The Pledge Today
          </button>
        )}
      </div>
    </div>
  )
}
