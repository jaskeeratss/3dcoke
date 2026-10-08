import React, { useRef, useLayoutEffect, Suspense } from 'react'
import * as THREE from 'three'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Environment, Float, ContactShadows } from '@react-three/drei'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import DietCoke from './DietCoke'
import MinimalistRefinedParticles from './MinimalistRefinedParticles'

gsap.registerPlugin(ScrollTrigger)

/**
 * MinimalistCanHero:
 * Pure, high-end product presentation.
 * Uses a gentle, slow float coupled with soft cursor tracking (luxurious ease).
 */
function MinimalistCanHero() {
  const groupRef = useRef()
  const mouseTarget = useRef({ x: 0, y: 0 })

  useFrame((state, delta) => {
    if (!groupRef.current) return
    const { pointer } = state

    // Very subtle, premium parallax (0.08 radians max)
    mouseTarget.current.x = pointer.x * 0.08
    mouseTarget.current.y = pointer.y * 0.08

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouseTarget.current.y,
      delta * 2.0
    )
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouseTarget.current.x,
      delta * 2.0
    )
  })

  return (
    <group ref={groupRef}>
      {/* Slow, elegant breathing float */}
      <Float
        speed={1.0}
        rotationIntensity={0.12}
        floatIntensity={0.2}
        floatingRange={[-0.04, 0.04]}
      >
        <DietCoke />
      </Float>
    </group>
  )
}

/**
 * AnimatedCan Controller:
 * Minimalist, buttery-smooth GSAP scroll choreography across the 9 sections.
 * Clean translations and rotations without visual clutter.
 */
function AnimatedCan() {
  const canRef = useRef()
  const { viewport } = useThree()

  useLayoutEffect(() => {
    if (!canRef.current) return

    const can = canRef.current
    const isMobile = viewport.width < 5.5

    const posX = (desktopX) => (isMobile ? desktopX * 0.22 : desktopX)
    const posY = (desktopY) => (isMobile ? desktopY + 0.35 : desktopY)
    const scaleFactor = isMobile ? 0.72 : 1.0

    // Initial Stage 1: Hero
    gsap.set(can.position, { x: 0, y: posY(0), z: 0 })
    gsap.set(can.rotation, { x: 0, y: 0, z: 0.12 })
    gsap.set(can.scale, { x: 1.0 * scaleFactor, y: 1.0 * scaleFactor, z: 1.0 * scaleFactor })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#main-3d-experience',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
        invalidateOnRefresh: true,
      },
    })

    // S1 -> S2 (0% -> 12.5%): Gentle Left Shift, 90° Turn
    tl.to(
      can.position,
      { x: posX(-1.6), y: posY(-0.05), z: 0, duration: 1, ease: 'power1.inOut', immediateRender: false },
      0
    )
    tl.to(
      can.rotation,
      { x: 0, y: Math.PI * 0.5, z: 0, duration: 1, ease: 'power1.inOut', immediateRender: false },
      0
    )
    tl.to(
      can.scale,
      { x: 1.08 * scaleFactor, y: 1.08 * scaleFactor, z: 1.08 * scaleFactor, duration: 1, ease: 'power1.inOut', immediateRender: false },
      0
    )

    // S2 -> S3 (12.5% -> 25%): Right Shift, 180° Turn
    tl.to(
      can.position,
      { x: posX(1.5), y: posY(0.05), z: 0, duration: 1, ease: 'power1.inOut', immediateRender: false },
      1
    )
    tl.to(
      can.rotation,
      { x: 0, y: Math.PI, z: 0.08, duration: 1, ease: 'power1.inOut', immediateRender: false },
      1
    )
    tl.to(
      can.scale,
      { x: 1.15 * scaleFactor, y: 1.15 * scaleFactor, z: 1.15 * scaleFactor, duration: 1, ease: 'power1.inOut', immediateRender: false },
      1
    )

    // S3 -> S4 (25% -> 37.5%): Left Shift with subtle top bevel view
    tl.to(
      can.position,
      { x: posX(-1.4), y: posY(-0.15), z: 0.2, duration: 1, ease: 'power1.inOut', immediateRender: false },
      2
    )
    tl.to(
      can.rotation,
      { x: 0.45, y: Math.PI * 1.35, z: -0.05, duration: 1, ease: 'power1.inOut', immediateRender: false },
      2
    )
    tl.to(
      can.scale,
      { x: 1.18 * scaleFactor, y: 1.18 * scaleFactor, z: 1.18 * scaleFactor, duration: 1, ease: 'power1.inOut', immediateRender: false },
      2
    )

    // S4 -> S5 (37.5% -> 50%): Centered Showcase, Scale Up
    tl.to(
      can.position,
      { x: 0, y: posY(0), z: 0.3, duration: 1, ease: 'power1.inOut', immediateRender: false },
      3
    )
    tl.to(
      can.rotation,
      { x: 0, y: Math.PI * 2, z: 0, duration: 1, ease: 'power1.inOut', immediateRender: false },
      3
    )
    tl.to(
      can.scale,
      { x: 1.32 * scaleFactor, y: 1.32 * scaleFactor, z: 1.32 * scaleFactor, duration: 1, ease: 'power1.inOut', immediateRender: false },
      3
    )

    // S5 -> S6 (50% -> 62.5%): Left Shift, 270° Turn
    tl.to(
      can.position,
      { x: posX(-1.5), y: posY(0.1), z: 0, duration: 1, ease: 'power1.inOut', immediateRender: false },
      4
    )
    tl.to(
      can.rotation,
      { x: 0, y: Math.PI * 2.5, z: 0.05, duration: 1, ease: 'power1.inOut', immediateRender: false },
      4
    )
    tl.to(
      can.scale,
      { x: 1.08 * scaleFactor, y: 1.08 * scaleFactor, z: 1.08 * scaleFactor, duration: 1, ease: 'power1.inOut', immediateRender: false },
      4
    )

    // S6 -> S7 (62.5% -> 75%): Right Shift, 360° Turn
    tl.to(
      can.position,
      { x: posX(1.6), y: posY(-0.05), z: 0.1, duration: 1, ease: 'power1.inOut', immediateRender: false },
      5
    )
    tl.to(
      can.rotation,
      { x: 0.08, y: Math.PI * 3.0, z: -0.05, duration: 1, ease: 'power1.inOut', immediateRender: false },
      5
    )
    tl.to(
      can.scale,
      { x: 1.12 * scaleFactor, y: 1.12 * scaleFactor, z: 1.12 * scaleFactor, duration: 1, ease: 'power1.inOut', immediateRender: false },
      5
    )

    // S7 -> S8 (75% -> 87.5%): Left Shift
    tl.to(
      can.position,
      { x: posX(-1.3), y: posY(0.15), z: 0.1, duration: 1, ease: 'power1.inOut', immediateRender: false },
      6
    )
    tl.to(
      can.rotation,
      { x: 0.2, y: Math.PI * 3.5, z: 0.1, duration: 1, ease: 'power1.inOut', immediateRender: false },
      6
    )
    tl.to(
      can.scale,
      { x: 1.15 * scaleFactor, y: 1.15 * scaleFactor, z: 1.15 * scaleFactor, duration: 1, ease: 'power1.inOut', immediateRender: false },
      6
    )

    // S8 -> S9 (87.5% -> 100%): Clean Final Presentation on Right
    tl.to(
      can.position,
      { x: posX(1.8), y: posY(0), z: 0, duration: 1, ease: 'power1.inOut', immediateRender: false },
      7
    )
    tl.to(
      can.rotation,
      { x: 0, y: Math.PI * 4.0, z: 0, duration: 1, ease: 'power1.inOut', immediateRender: false },
      7
    )
    tl.to(
      can.scale,
      { x: 1.1 * scaleFactor, y: 1.1 * scaleFactor, z: 1.1 * scaleFactor, duration: 1, ease: 'power1.inOut', immediateRender: false },
      7
    )

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === '#main-3d-experience') st.kill()
      })
    }
  }, [viewport.width, viewport.height])

  return (
    <group ref={canRef}>
      <MinimalistCanHero />
    </group>
  )
}

/**
 * Minimalist Scene:
 * Elegant studio lighting, soft floor contact shadows,
 * ultra-delicate floating light motes, and smooth scroll transitions.
 */
export default function Scene() {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
        }}
        dpr={[1, 1.75]}
      >
        {/* Drei Studio environment for metallic reflections */}
        <Environment preset="studio" environmentIntensity={0.85} />

        {/* Clean, sculpted three-point studio lighting */}
        <directionalLight position={[4, 7, 5]} intensity={2.0} color="#ffffff" />
        <directionalLight position={[-4, 2, -2]} intensity={0.5} color="#e5ecf6" />
        <directionalLight position={[0, -3, 3]} intensity={0.25} color="#ffffff" />

        {/* Soft, baked floor contact shadow grounded under the can */}
        <ContactShadows
          position={[0, -1.6, 0]}
          opacity={0.45}
          scale={7}
          blur={2.8}
          far={3.5}
          frames={1}
          color="#050508"
        />

        {/* Minimalist delicate floating light motes */}
        <MinimalistRefinedParticles count={35} />

        {/* 3D Can presentation */}
        <Suspense fallback={null}>
          <AnimatedCan />
        </Suspense>
      </Canvas>
    </div>
  )
}
