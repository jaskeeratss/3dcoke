import React from 'react'

export default function FlavorsPage({ onNavigate }) {
  const flavors = [
    {
      id: 'classic',
      name: 'Diet Coke Original',
      tagline: 'The crisp, authentic taste that started a revolution.',
      accent: '#e4002b',
      calories: '1 Cal',
      caffeine: '46 mg',
      description: 'Bold, crisp flavor with distinctive carbonation and zero sugar. The undisputed legend.',
      badge: 'Iconic Classic',
    },
    {
      id: 'cherry',
      name: 'Feisty Cherry',
      tagline: 'An adventurous twist of ripe cherry with the crisp Diet Coke edge.',
      accent: '#9b111e',
      calories: '0 Cal',
      caffeine: '46 mg',
      description: 'Sweet dark cherry notes dancing across sparkling bubbles. Energetic, punchy, and vibrant.',
      badge: 'Fan Favorite',
    },
    {
      id: 'lime',
      name: 'Ginger Lime',
      tagline: 'A zesty shockwave of citrus with a spicy aromatic finish.',
      accent: '#2e8b57',
      calories: '0 Cal',
      caffeine: '46 mg',
      description: 'Bright lime zest layered over a subtle warm ginger note for an invigorating kick.',
      badge: 'Zesty Twist',
    },
    {
      id: 'caffeine-free',
      name: 'Caffeine Free',
      tagline: 'Everything you love about Diet Coke, crafted for calm evenings.',
      accent: '#b8860b',
      calories: '0 Cal',
      caffeine: '0 mg',
      description: 'Pure, crisp refreshment whenever you crave the taste without the late-night stimulation.',
      badge: 'Evening Chill',
    },
  ]

  return (
    <div className="subpage-wrapper">
      <header className="subpage-hero">
        <span className="subpage-pill">Explore The Spectrum</span>
        <h1 className="subpage-title">Flavors &amp; Variations</h1>
        <p className="subpage-sub">
          Every palate has its perfect match. Discover our lineup of bold infusions and timeless expressions.
        </p>
      </header>

      <div className="flavor-grid">
        {flavors.map((flavor) => (
          <div key={flavor.id} className="flavor-card">
            <div className="flavor-badge" style={{ backgroundColor: flavor.accent }}>
              {flavor.badge}
            </div>
            <h2 className="flavor-name">{flavor.name}</h2>
            <p className="flavor-tagline">{flavor.tagline}</p>
            <p className="flavor-desc">{flavor.description}</p>
            <div className="flavor-meta">
              <span>{flavor.calories}</span>
              <span className="separator">•</span>
              <span>{flavor.caffeine} Caffeine</span>
            </div>
            <button
              className="btn-primary flavor-cta"
              onClick={() => onNavigate('order')}
            >
              Select Flavor
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
