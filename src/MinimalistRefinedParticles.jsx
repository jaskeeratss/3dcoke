import React, { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * MinimalistRefinedParticles:
 * Minimal, ultra-delicate suspended light motes.
 * Floating slowly with gentle organic drift to provide depth without visual noise.
 */
export default function MinimalistRefinedParticles({ count = 35 }) {
  const pointsRef = useRef()

  const [positions, speeds, phases] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const spd = new Float32Array(count)
    const phs = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = 1.2 + Math.random() * 2.2
      pos[i * 3 + 0] = Math.cos(angle) * radius
      pos[i * 3 + 1] = (Math.random() - 0.5) * 5.5
      pos[i * 3 + 2] = (Math.random() - 0.5) * 2.5

      spd[i] = 0.15 + Math.random() * 0.35 // very slow, graceful drift
      phs[i] = Math.random() * Math.PI * 2
    }
    return [pos, spd, phs]
  }, [count])

  useFrame((state, delta) => {
    if (!pointsRef.current) return
    const pos = pointsRef.current.geometry.attributes.position.array
    const time = state.clock.elapsedTime

    for (let i = 0; i < count; i++) {
      const yIdx = i * 3 + 1
      const xIdx = i * 3 + 0

      // Delicate upward motion
      pos[yIdx] += speeds[i] * delta * 0.8
      // Subtle organic sway
      pos[xIdx] += Math.sin(time * 0.8 + phases[i]) * 0.001

      // Loop gently
      if (pos[yIdx] > 3.2) {
        pos[yIdx] = -3.2
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#f0f3f8"
        transparent
        opacity={0.38}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}
