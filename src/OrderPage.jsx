import React, { useState } from 'react'

export default function OrderPage({ onNavigate }) {
  const [pack, setPack] = useState('12-pack')
  const [selectedFlavor, setSelectedFlavor] = useState('Original')
  const [ordered, setOrdered] = useState(false)

  const packs = [
    { id: '6-pack', name: '6-Can Pack', price: '$5.49', popular: false },
    { id: '12-pack', name: '12-Can Fridge Pack', price: '$8.99', popular: true },
    { id: '24-pack', name: '24-Can Case', price: '$15.99', popular: false },
  ]

  const flavors = ['Original', 'Feisty Cherry', 'Ginger Lime', 'Caffeine Free']

  return (
    <div className="subpage-wrapper">
      <header className="subpage-hero">
        <span className="subpage-pill">Instant Refreshment</span>
        <h1 className="subpage-title">Fuel Your Drive</h1>
        <p className="subpage-sub">
          Order your favorite cold cases delivered straight to your studio, office, or home.
        </p>
      </header>

      <div className="order-container">
        <div className="order-box">
          <h2 className="order-section-title">1. Choose Your Flavor</h2>
          <div className="option-chips">
            {flavors.map((fl) => (
              <button
                key={fl}
                className={`chip ${selectedFlavor === fl ? 'active' : ''}`}
                onClick={() => setSelectedFlavor(fl)}
              >
                {fl}
              </button>
            ))}
          </div>

          <h2 className="order-section-title" style={{ marginTop: '2.5rem' }}>
            2. Choose Your Size
          </h2>
          <div className="pack-grid">
            {packs.map((p) => (
              <div
                key={p.id}
                className={`pack-card ${pack === p.id ? 'active' : ''}`}
                onClick={() => setPack(p.id)}
              >
                {p.popular && <span className="mini-badge">Most Popular</span>}
                <div className="pack-name">{p.name}</div>
                <div className="pack-price">{p.price}</div>
              </div>
            ))}
          </div>

          <div className="order-action-area">
            {ordered ? (
              <div className="order-success-msg">
                🎉 Thank you! Your order for {selectedFlavor} ({pack}) is on its way with chilled courier priority!
              </div>
            ) : (
              <button className="btn-primary btn-large" onClick={() => setOrdered(true)}>
                Order Now • {packs.find((p) => p.id === pack)?.price}
              </button>
            )}

            <button className="btn-outline" style={{ marginTop: '1rem' }} onClick={() => onNavigate('home')}>
              ← Back to 3D Experience
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
