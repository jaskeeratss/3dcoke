import React, { useEffect, useState } from 'react'
import { useProgress } from '@react-three/drei'

/**
 * LoadingScreen:
 * Full-screen branded loading interface tied to actual Drei asset loading progress.
 * Dismisses smoothly with a fade transition as soon as assets are ready.
 */
export default function LoadingScreen({ onLoaded }) {
  const { active, progress, total, loaded } = useProgress()
  const [isDone, setIsDone] = useState(false)
  const [fadeComplete, setFadeComplete] = useState(false)

  useEffect(() => {
    // When useProgress reports 100% or finishes loading (active === false)
    if (!active || progress >= 100) {
      setIsDone(true)
      const timer = setTimeout(() => {
        setFadeComplete(true)
        onLoaded?.()
      }, 550) // smooth exit transition
      return () => clearTimeout(timer)
    }
  }, [active, progress, onLoaded])

  if (fadeComplete) return null

  const displayProgress = Math.min(100, Math.round(progress))

  return (
    <div className={`loading-screen-overlay ${isDone ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-brand">
          DIET<span className="logo-accent">&nbsp;COKE</span>
        </div>

        <div className="loading-tagline">
          CHILLING TO 34°F &bull; CRISP REFRESHMENT
        </div>

        <div className="loading-progress-bar-container">
          <div
            className="loading-progress-bar"
            style={{ width: `${displayProgress}%` }}
          />
        </div>

        <div className="loading-status-row">
          <span className="loading-status-text">
            {displayProgress < 100 ? 'PREPARING 3D ASSETS...' : 'READY'}
          </span>
          <span className="loading-percentage">{displayProgress}%</span>
        </div>
      </div>
    </div>
  )
}
