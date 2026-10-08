import React from 'react'

export default function StoryPage({ onNavigate }) {
  const milestones = [
    {
      year: '1982',
      title: 'The Unveiling at Radio City',
      description: 'Diet Coke made its star-studded debut at Radio City Music Hall in New York, becoming the biggest soft-drink innovation of the century.',
    },
    {
      year: '1984',
      title: 'Number One Worldwide',
      description: 'Within two short years, Diet Coke soared to become the #1 diet soft drink across the globe, defining pop culture and urban lifestyles.',
    },
    {
      year: '2000s',
      title: 'Fashion & Haute Couture',
      description: 'Legendary designers from Karl Lagerfeld to Jean Paul Gaultier and Marc Jacobs designed limited-edition collector bottles.',
    },
    {
      year: 'Today',
      title: 'Crisp Modernity',
      description: 'Still the undisputed icon for bold visionaries, creatives, and anyone who demands zero sugar with zero compromise.',
    },
  ]

  return (
    <div className="subpage-wrapper">
      <header className="subpage-hero">
        <span className="subpage-pill">Our Heritage</span>
        <h1 className="subpage-title">The Legend of Crisp</h1>
        <p className="subpage-sub">
          More than four decades of uncompromising taste, creative collaboration, and cultural disruption.
        </p>
      </header>

      <div className="story-timeline">
        {milestones.map((item) => (
          <div key={item.year} className="timeline-item">
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="story-quote-card">
        <blockquote>
          "Diet Coke isn’t just a beverage. It is a creative fuel, an attitude, and a symbol of sharp focus."
        </blockquote>
        <div className="story-cta-box">
          <button className="btn-primary" onClick={() => onNavigate('home')}>
            Back to 3D Experience
          </button>
        </div>
      </div>
    </div>
  )
}
