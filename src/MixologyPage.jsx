import React, { useState } from 'react'

export default function MixologyPage({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const recipes = [
    {
      id: 'midnight-spark',
      title: 'Midnight Spark Cold Brew',
      type: 'mocktail',
      difficulty: 'Easy • 3 mins',
      vibe: 'Late Night Creative Fuel',
      ingredients: [
        '6 oz Chilled Diet Coke',
        '2 oz Dark Roast Cold Brew Coffee',
        '1 dash Vanilla Extract',
        'Orange twist garnish & fresh ice',
      ],
      instructions:
        'Fill highball glass with crystal-clear ice. Pour cold brew coffee over ice, then slowly top with sparkling Diet Coke. Express orange peel oils over the rim.',
      tag: 'Caffeine Boost',
    },
    {
      id: 'citrus-smoke',
      title: 'Smoked Citrus Highball',
      type: 'cocktail',
      difficulty: 'Intermediate • 5 mins',
      vibe: 'Sophisticated Evening Soirée',
      ingredients: [
        '5 oz Crisp Diet Coke',
        '1.5 oz Bourbon or Rye Whiskey',
        '0.5 oz Smoked Maple Syrup',
        '2 dashes Angostura Bitters',
        'Charred rosemary sprig',
      ],
      instructions:
        'Stir bourbon, syrup, and bitters in a mixing glass with ice. Strain into a rocks glass over a single large sphere. Top with Diet Coke and ignite rosemary tip.',
      tag: 'Refined Spirit',
    },
    {
      id: 'ruby-fizz',
      title: 'Ruby Pomegranate Spritz',
      type: 'mocktail',
      difficulty: 'Quick • 2 mins',
      vibe: 'Summer Afternoon Refreshment',
      ingredients: [
        '6 oz Feisty Cherry Diet Coke',
        '1.5 oz Pure Pomegranate Juice',
        '0.5 oz Fresh Lime Juice',
        'Pomegranate arils & fresh mint leaves',
      ],
      instructions:
        'Muddle mint lightly with lime juice. Add crushed ice and pomegranate juice. Fill to the top with cold Feisty Cherry Diet Coke and sprinkle with ruby arils.',
      tag: 'Zero Alcohol',
    },
    {
      id: 'botanical-zen',
      title: 'Ginger Lime Botanical Tonic',
      type: 'mocktail',
      difficulty: 'Easy • 4 mins',
      vibe: 'Spa Day & Wellness Reset',
      ingredients: [
        '6 oz Ginger Lime Diet Coke',
        '2 oz Cucumber-infused filtered water',
        '2 thin slices Fresh Ginger',
        'Sprig of fresh Thai Basil',
      ],
      instructions:
        'Clap Thai basil and place in stemless wine glass with cucumber water and fresh ginger slices. Add cubed ice and finish with bubbling Ginger Lime Diet Coke.',
      tag: 'Herb & Citrus',
    },
  ]

  const filteredRecipes =
    activeFilter === 'all'
      ? recipes
      : recipes.filter((r) => r.type === activeFilter)

  return (
    <div className="subpage-wrapper">
      <header className="subpage-hero">
        <span className="subpage-pill">Elevated Pairings</span>
        <h1 className="subpage-title">Mixology &amp; Recipes</h1>
        <p className="subpage-sub">
          Unlock new dimensions of taste. Signature zero-sugar mocktails and craft cocktails designed to spotlight Diet Coke's crisp carbonation.
        </p>

        <div className="filter-button-group">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Creations
          </button>
          <button
            className={`filter-btn ${activeFilter === 'mocktail' ? 'active' : ''}`}
            onClick={() => setActiveFilter('mocktail')}
          >
            Zero-Proof Mocktails
          </button>
          <button
            className={`filter-btn ${activeFilter === 'cocktail' ? 'active' : ''}`}
            onClick={() => setActiveFilter('cocktail')}
          >
            Craft Cocktails
          </button>
        </div>
      </header>

      <div className="recipes-grid">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <div className="recipe-top-bar">
              <span className="recipe-tag">{recipe.tag}</span>
              <span className="recipe-time">{recipe.difficulty}</span>
            </div>

            <h2 className="recipe-title">{recipe.title}</h2>
            <p className="recipe-vibe">✨ {recipe.vibe}</p>

            <div className="recipe-section">
              <h4>Ingredients</h4>
              <ul className="recipe-ing-list">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            </div>

            <div className="recipe-section">
              <h4>Preparation</h4>
              <p className="recipe-instructions">{recipe.instructions}</p>
            </div>

            <button className="btn-outline recipe-order-btn" onClick={() => onNavigate('order')}>
              Order Cans For This Recipe →
            </button>
          </div>
        ))}
      </div>

      <div className="mixology-pro-tip">
        <h3>Bartender’s Golden Rule for Diet Coke</h3>
        <p>
          Always keep your cans at freezing temperature ($34^\circ\text{F} - 38^\circ\text{F}$) before mixing. Cold temperatures keep the carbon dioxide dissolved in the liquid, ensuring vigorous effervescence and persistent bubbles.
        </p>
      </div>
    </div>
  )
}
