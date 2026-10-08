import React, { useEffect, useRef, useState } from 'react'
import { useProgress } from '@react-three/drei'

/**
 * LoadingScreen:
 * Full-screen branded loading interface tied to actual Drei asset loading progress.
 *
 * Requirements fulfilled:
 * - Real loading state from useProgress()
 * - Visual smoothing via requestAnimationFrame lerp (avoids 0% -> 70% -> 100% jarring jumps)
 * - Strictly monotonic: displayed progress never goes backwards
 * - Reaches 100% only when the required assets are truly finished loading
 * - Smooth transition to 100% with elegant fade out
 * - No fake arbitrary timeouts
 */
export default function LoadingScreen({ onLoaded }) {
  const { active, progress } = useProgress()
  const [displayProgress, setDisplayProgress] = useState(0)
  const [isDone, setIsDone] = useState(false)
  const [fadeComplete, setFadeComplete] = useState(false)

  // Track target progress and current visual progress with refs to avoid re-render loops
  const targetProgressRef = useRef(0)
  const currentProgressRef = useRef(0)
  const animFrameRef = useRef(null)
  const hasFinishedLoadingRef = useRef(false)

  // Update target progress when useProgress changes
  useEffect(() => {
    // Determine target based on real progress
    const realProgress = typeof progress === 'number' ? progress : 0

    // Ensure target never goes backwards
    if (realProgress > targetProgressRef.current) {
      targetProgressRef.current = realProgress
    }

    // When assets are actually done
    if (!active && progress >= 100) {
      targetProgressRef.current = 100
      hasFinishedLoadingRef.current = true
    }
  }, [active, progress])

  // Continuous smooth interpolation loop (rAF)
  useEffect(() => {
    let lastTime = performance.now()

    const updateProgress = (currentTime) => {
      const delta = Math.min((currentTime - lastTime) / 1000, 0.1) // clamp delta
      lastTime = currentTime

      const target = targetProgressRef.current
      const current = currentProgressRef.current

      if (current < target) {
        // Dynamic easing: speed up if far behind, smooth out when close
        const diff = target - current
        // Lerp factor adjusted by delta for consistent feel across 60Hz/120Hz/mobile
        const factor = target === 100 ? 12 : 7
        const step = diff * factor * delta + 0.15 // minimum continuous increment

        let next = current + step
        if (next > target) next = target
        currentProgressRef.current = next

        setDisplayProgress(Math.min(100, Math.round(next)))
      }

      // Check if visually reached 100% AND real loading is verified complete
      if (currentProgressRef.current >= 99.8 && hasFinishedLoadingRef.current) {
        currentProgressRef.current = 100
        setDisplayProgress(100)
        setIsDone(true)

        // Allow natural 450ms fade-out transition before unmounting
        setTimeout(() => {
          setFadeComplete(true)
          onLoaded?.()
        }, 500)
        return
      }

      animFrameRef.current = requestAnimationFrame(updateProgress)
    }

    animFrameRef.current = requestAnimationFrame(updateProgress)

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current)
      }
    }
  }, [onLoaded])

  if (fadeComplete) return null

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
          >
            <div className="progress-bar-shimmer" />
          </div>
        </div>

        <div className="loading-status-row">
          <span className="loading-status-text">
            {displayProgress < 100 ? 'PREPARING 3D ASSETS...' : 'CHILLED & READY'}
          </span>
          <span className="loading-percentage">{displayProgress}%</span>
        </div>
      </div>
    </div>
  )
}
