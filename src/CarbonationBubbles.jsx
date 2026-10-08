import React, { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * Fizzy Carbonation Bubbles:
 * Floating micro-particles rising upwards with soft turbulent sway
 * to immerse the 3D can in sparkling Diet Coke effervescence.
 */
export default function CarbonationBubbles({ count = 160 }) {
  const meshRef = useRef()

  const [positions, speeds, phases] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const spd = new Float32Array(count)
    const phs = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      // Cylindrical distribution around can: radius between 0.8 and 3.5
      const angle = Math.random() * Math.PI * 2
      const radius = 0.8 + Math.random() * 2.8
      pos[i * 3 + 0] = Math.cos(angle) * radius
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8 // height from -4 to +4
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4

      spd[i] = 0.6 + Math.random() * 1.4 // rising speed
      phs[i] = Math.random() * Math.PI * 2 // wobble phase
    }
    return [pos, spd, phs]
  }, [count])

  useFrame((state, delta) => {
    if (!meshRef.current) return
    const posAttr = meshRef.current.geometry.attributes.position
    const pos = posAttr.array
    const time = state.clock.elapsedTime

    for (let i = 0; i < count; i++) {
      const idxY = i * 3 + 1
      const idxX = i * 3 + 0

      // Ascend bubbles
      pos[idxY] += speeds[i] * delta * 1.2
      // Horizontal subtle shimmer
      pos[idxX] += Math.sin(time * 2 + phases[i]) * 0.003

      // Reset when reaching top
      if (pos[idxY] > 4.5) {
        pos[idxY] = -4.5
      }
    }
    posAttr.needsUpdate = true
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        color="#ffccd5"
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}
