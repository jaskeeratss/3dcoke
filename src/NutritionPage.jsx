import React from 'react'

export default function NutritionPage({ onNavigate }) {
  const nutritionFacts = [
    { label: 'Total Calories', value: '1', percent: '0%', highlight: true },
    { label: 'Total Fat', value: '0g', percent: '0%' },
    { label: 'Sodium', value: '40mg', percent: '2%' },
    { label: 'Total Carbohydrate', value: '0g', percent: '0%' },
    { label: 'Total Sugars', value: '0g', percent: '0%', highlight: true },
    { label: 'Added Sugars', value: '0g', percent: '0%' },
    { label: 'Protein', value: '0g', percent: '0%' },
    { label: 'Caffeine Content', value: '46mg', percent: 'Per 12 fl oz can' },
    { label: 'Potassium', value: '25mg', percent: '1%' },
  ]

  const ingredients = [
    {
      name: 'Carbonated Water',
      role: 'Crisp Base',
      detail: 'Ultra-purified water infused with precise micro-carbonation for peak fizziness and sharp palate feel.',
    },
    {
      name: 'Caramel Color',
      role: 'Signature Hue',
      detail: 'Provides the iconic dark amber depth recognizable in every pour.',
    },
    {
      name: 'Aspartame',
      role: 'Zero Sugar Sweetness',
      detail: 'High-intensity sweetener delivering the classic clean sweetness without calories or glycemic spikes.',
    },
    {
      name: 'Phosphoric Acid',
      role: 'Crisp Tang',
      detail: 'Gives Diet Coke its legendary bite and sharp, thirst-quenching profile.',
    },
    {
      name: 'Potassium Benzoate',
      role: 'Freshness Seal',
      detail: 'Maintains freshness and flavor stability from bottling plant to fridge.',
    },
    {
      name: 'Natural Flavors',
      role: 'Proprietary Blend',
      detail: 'The secretive, masterfully balanced blend of citrus oils, botanical essences, and spice extracts.',
    },
    {
      name: 'Citric Acid & Caffeine',
      role: 'Spark & Lift',
      detail: 'Adds a whisper of tartness and delivers 46mg of uplifting, focus-sharpening caffeine.',
    },
  ]

  return (
    <div className="subpage-wrapper">
      <header className="subpage-hero">
        <span className="subpage-pill">Purity &amp; Transparency</span>
        <h1 className="subpage-title">Nutrition &amp; Ingredients</h1>
        <p className="subpage-sub">
          Everything that goes into crafting the world’s most distinctive low-calorie soda — with complete clarity.
        </p>
      </header>

      <div className="nutrition-grid-layout">
        {/* Nutrition Panel */}
        <div className="nutrition-label-card">
          <div className="nutrition-label-header">
            <h2>Nutrition Facts</h2>
            <p className="serving-text">1 serving per container</p>
            <p className="serving-size">Serving size: <strong>1 Can (12 fl oz / 355mL)</strong></p>
          </div>

          <div className="calories-block">
            <span className="cal-label">Amount Per Serving</span>
            <div className="cal-flex">
              <span className="cal-title">Calories</span>
              <span className="cal-value">1</span>
            </div>
          </div>

          <div className="dv-header">% Daily Value*</div>

          <div className="facts-list">
            {nutritionFacts.map((fact, idx) => (
              <div key={idx} className={`fact-row ${fact.highlight ? 'fact-highlight' : ''}`}>
                <span className="fact-name">{fact.label} <strong>{fact.value}</strong></span>
                <span className="fact-dv">{fact.percent}</span>
              </div>
            ))}
          </div>

          <p className="nutrition-disclaimer">
            *Percent Daily Values are based on a 2,000 calorie diet. Not a significant source of saturated fat, trans fat, cholesterol, dietary fiber, vitamin D, calcium, or iron.
          </p>
        </div>

        {/* Ingredients & Craftsmanship Breakdown */}
        <div className="ingredients-column">
          <h2 className="ingredients-section-title">Ingredient Masterclass</h2>
          <p className="ingredients-intro">
            We believe you deserve to know exactly what’s inside your glass. Here is how our core components work in harmony:
          </p>

          <div className="ingredient-cards-stack">
            {ingredients.map((item, idx) => (
              <div key={idx} className="ingredient-card">
                <div className="ingredient-header">
                  <span className="ing-index">0{idx + 1}</span>
                  <div>
                    <h3 className="ing-name">{item.name}</h3>
                    <span className="ing-role">{item.role}</span>
                  </div>
                </div>
                <p className="ing-detail">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="nutrition-action-card">
            <h3>Ready for peak refreshment?</h3>
            <p>Taste the balance for yourself with chilled packs delivered to your door.</p>
            <button className="btn-primary" onClick={() => onNavigate('order')}>
              Order Your Pack Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
