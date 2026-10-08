import React, { useState } from 'react'

export default function FAQPage({ onNavigate }) {
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: 'What is the key difference between Diet Coke and Coca-Cola Zero Sugar?',
      a: 'Diet Coke was formulated in 1982 with its own unique, lighter, and more citrus-forward flavor profile that created a global following. Coca-Cola Zero Sugar, introduced later, was crafted specifically to mimic the exact taste of original Coca-Cola Classic without sugar.',
    },
    {
      q: 'Does Diet Coke contain any sugar or carbohydrates?',
      a: 'None! Diet Coke contains 0g of sugar and 0g of total carbohydrates per serving, sweetened with high-intensity aspartame for zero caloric burden.',
    },
    {
      q: 'How much caffeine is in a standard 12 fl oz can?',
      a: 'A standard 12 fl oz (355 mL) can of Diet Coke contains 46 mg of caffeine. For comparison, a typical 8 oz cup of brewed coffee contains approximately 95 mg.',
    },
    {
      q: 'Is there a caffeine-free version available?',
      a: 'Yes! Diet Coke Caffeine Free offers the exact same crisp, effervescent flavor you love, crafted without any caffeine so you can enjoy it late into the evening.',
    },
    {
      q: 'Are Diet Coke cans infinitely recyclable?',
      a: 'Absolutely. Aluminum is one of the most sustainable packaging materials on earth. It can be recycled an infinite number of times without losing its structural integrity or quality.',
    },
    {
      q: 'What is the optimal serving temperature for maximum crispness?',
      a: 'Diet Coke is best enjoyed ice-cold, between 35°F and 38°F (1.5°C to 3.3°C). Pour over dense, clear ice cubes to retain peak carbonation and crisp aromatics.',
    },
  ]

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <div className="subpage-wrapper">
      <header className="subpage-hero">
        <span className="subpage-pill">Help &amp; Insights</span>
        <h1 className="subpage-title">Frequently Asked Questions</h1>
        <p className="subpage-sub">
          Got questions about our ingredients, flavors, carbonation, or sustainability? Find your answers here.
        </p>
      </header>

      <div className="faq-container">
        {faqs.map((item, idx) => (
          <div
            key={idx}
            className={`faq-item ${openIdx === idx ? 'open' : ''}`}
            onClick={() => toggleAccordion(idx)}
          >
            <div className="faq-question">
              <span>{item.q}</span>
              <span className="faq-toggle-icon">{openIdx === idx ? '−' : '+'}</span>
            </div>
            {openIdx === idx && (
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="faq-contact-card">
        <h3>Still have questions?</h3>
        <p>Our concierge support and beverage specialists are available 24/7.</p>
        <div className="faq-action-row">
          <button className="btn-primary" onClick={() => onNavigate('order')}>
            Explore Packs &amp; Order
          </button>
          <button className="btn-outline" onClick={() => onNavigate('nutrition')}>
            View Full Nutrition Data
          </button>
        </div>
      </div>
    </div>
  )
}
