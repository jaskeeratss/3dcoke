import React, { useState } from 'react'
import Scene from './Scene'
import Overlay from './Overlay'
import FlavorsPage from './FlavorsPage'
import StoryPage from './StoryPage'
import NutritionPage from './NutritionPage'
import MixologyPage from './MixologyPage'
import SustainabilityPage from './SustainabilityPage'
import FAQPage from './FAQPage'
import OrderPage from './OrderPage'
import Footer from './Footer'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavigate = (page) => {
    setCurrentPage(page)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Ambient background glows */}
      <div className="ambient-glow glow-1" />
      <div className="ambient-glow glow-2" />
      <div className="ambient-glow glow-3" />

      {/* Modern fixed Navbar with mobile hamburger menu */}
      <nav className="navbar" id="navbar">
        <button
          className="nav-logo btn-text"
          onClick={() => handleNavigate('home')}
        >
          DIET<span className="logo-accent">&nbsp;COKE</span>
        </button>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <li>
            <button
              className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => handleNavigate('home')}
            >
              3D Experience
            </button>
          </li>
          <li>
            <button
              className={`nav-btn ${currentPage === 'flavors' ? 'active' : ''}`}
              onClick={() => handleNavigate('flavors')}
            >
              Flavors
            </button>
          </li>
          <li>
            <button
              className={`nav-btn ${currentPage === 'story' ? 'active' : ''}`}
              onClick={() => handleNavigate('story')}
            >
              Heritage
            </button>
          </li>
          <li>
            <button
              className={`nav-btn ${currentPage === 'nutrition' ? 'active' : ''}`}
              onClick={() => handleNavigate('nutrition')}
            >
              Nutrition
            </button>
          </li>
          <li>
            <button
              className={`nav-btn ${currentPage === 'mixology' ? 'active' : ''}`}
              onClick={() => handleNavigate('mixology')}
            >
              Mixology
            </button>
          </li>
          <li>
            <button
              className={`nav-btn ${currentPage === 'sustainability' ? 'active' : ''}`}
              onClick={() => handleNavigate('sustainability')}
            >
              Sustainability
            </button>
          </li>
          <li>
            <button
              className={`nav-btn ${currentPage === 'faq' ? 'active' : ''}`}
              onClick={() => handleNavigate('faq')}
            >
              FAQ
            </button>
          </li>
          <li>
            <button
              className={`nav-btn nav-btn-cta ${currentPage === 'order' ? 'active' : ''}`}
              onClick={() => handleNavigate('order')}
            >
              Order Online
            </button>
          </li>
        </ul>
      </nav>

      {/* Conditionally render 3D Scene when on Home */}
      {currentPage === 'home' && <Scene />}

      {/* Page Routing */}
      <main className="main-content-flow">
        {currentPage === 'home' && <Overlay onNavigate={handleNavigate} />}
        {currentPage === 'flavors' && <FlavorsPage onNavigate={handleNavigate} />}
        {currentPage === 'story' && <StoryPage onNavigate={handleNavigate} />}
        {currentPage === 'nutrition' && <NutritionPage onNavigate={handleNavigate} />}
        {currentPage === 'mixology' && <MixologyPage onNavigate={handleNavigate} />}
        {currentPage === 'sustainability' && <SustainabilityPage onNavigate={handleNavigate} />}
        {currentPage === 'faq' && <FAQPage onNavigate={handleNavigate} />}
        {currentPage === 'order' && <OrderPage onNavigate={handleNavigate} />}
      </main>

      {/* Global Comprehensive Footer on all pages */}
      <Footer onNavigate={handleNavigate} />

      {/* Film grain texture */}
      <div className="grain-overlay" />
    </>
  )
}
