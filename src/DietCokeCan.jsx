import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Center } from '@react-three/drei'
import * as THREE from 'three'

/**
 * Procedural Diet Coke can built from Three.js primitives.
 * Body = LatheGeometry for the iconic soda-can silhouette
 * Top/Bottom = tapered cylinder caps
 * Pull Tab = small torus on top
 * Materials = PBR metallic finish
 */
export default function DietCokeCan(props) {
  const groupRef = useRef()

  /* --- Can Profile (Lathe Curve) --- */
  const bodyGeometry = useMemo(() => {
    const points = []
    const R = 0.55  // main radius
    const H = 1.65  // total height

    // Bottom dome
    for (let i = 0; i <= 10; i++) {
      const t = i / 10
      const angle = (Math.PI / 2) * t
      const x = R - 0.04 + 0.04 * Math.cos(angle)
      const y = 0.04 - 0.04 * Math.sin(angle)
      points.push(new THREE.Vector2(x, y))
    }

    // Bottom taper in
    points.push(new THREE.Vector2(R, 0.04))
    points.push(new THREE.Vector2(R, 0.12))

    // Main body
    points.push(new THREE.Vector2(R, 0.15))
    points.push(new THREE.Vector2(R, H - 0.15))

    // Top taper
    points.push(new THREE.Vector2(R, H - 0.12))
    points.push(new THREE.Vector2(R - 0.02, H - 0.06))
    points.push(new THREE.Vector2(R - 0.06, H - 0.03))

    // Top lip
    for (let i = 0; i <= 10; i++) {
      const t = i / 10
      const angle = (Math.PI / 2) * (1 - t)
      const x = (R - 0.08) - 0.03 + 0.03 * Math.cos(angle)
      const y = (H - 0.03) + 0.03 * Math.sin(angle)
      points.push(new THREE.Vector2(x, y))
    }

    // Top inner rim
    points.push(new THREE.Vector2(R - 0.12, H))
    points.push(new THREE.Vector2(R - 0.14, H - 0.01))

    const geo = new THREE.LatheGeometry(points, 64)
    geo.computeVertexNormals()
    return geo
  }, [])

  /* --- Top Lid --- */
  const lidGeometry = useMemo(() => {
    const geo = new THREE.CylinderGeometry(0.41, 0.41, 0.01, 64)
    return geo
  }, [])

  /* --- Pull Tab Ring --- */
  const tabGeometry = useMemo(() => {
    const shape = new THREE.Shape()
    shape.moveTo(0.12, 0)
    shape.absarc(0, 0, 0.12, 0, Math.PI * 2, false)
    const holePath = new THREE.Path()
    holePath.absarc(0, 0, 0.07, 0, Math.PI * 2, true)
    shape.holes.push(holePath)

    const extrudeSettings = {
      depth: 0.015,
      bevelEnabled: true,
      bevelThickness: 0.003,
      bevelSize: 0.003,
      bevelSegments: 3,
    }
    return new THREE.ExtrudeGeometry(shape, extrudeSettings)
  }, [])

  /* --- Materials --- */
  const bodyMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#d8d8d8'),
      metalness: 0.95,
      roughness: 0.15,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
      reflectivity: 1,
      envMapIntensity: 1.5,
    })
  }, [])

  const redBandMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#cc0033'),
      metalness: 0.7,
      roughness: 0.25,
      clearcoat: 0.6,
      clearcoatRoughness: 0.15,
    })
  }, [])

  const lidMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#b0b0b0'),
      metalness: 0.98,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
    })
  }, [])

  const tabMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#999999'),
      metalness: 0.95,
      roughness: 0.2,
    })
  }, [])

  /* --- Red stripe band geometry (middle of can) --- */
  const stripeBand = useMemo(() => {
    const geo = new THREE.CylinderGeometry(0.552, 0.552, 0.35, 64, 1, true)
    return geo
  }, [])

  /* --- Accent stripe (thin) --- */
  const accentStripe = useMemo(() => {
    return new THREE.CylinderGeometry(0.553, 0.553, 0.03, 64, 1, true)
  }, [])

  const accentMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#880022'),
      metalness: 0.8,
      roughness: 0.2,
    })
  }, [])

  /* --- "DIET COKE" text band --- */
  const textBand = useMemo(() => {
    return new THREE.CylinderGeometry(0.554, 0.554, 0.08, 64, 1, true)
  }, [])

  const textMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#ffffff'),
      metalness: 0.3,
      roughness: 0.4,
      emissive: new THREE.Color('#ffffff'),
      emissiveIntensity: 0.1,
    })
  }, [])

  return (
    <Center>
      <group ref={groupRef} {...props} dispose={null}>
        {/* Main can body */}
        <mesh geometry={bodyGeometry} material={bodyMaterial} />

        {/* Red branded band */}
        <mesh
          geometry={stripeBand}
          material={redBandMaterial}
          position={[0, 0.75, 0]}
        />

        {/* Accent stripes */}
        <mesh
          geometry={accentStripe}
          material={accentMaterial}
          position={[0, 0.58, 0]}
        />
        <mesh
          geometry={accentStripe}
          material={accentMaterial}
          position={[0, 0.93, 0]}
        />

        {/* White text band in center */}
        <mesh
          geometry={textBand}
          material={textMaterial}
          position={[0, 0.76, 0]}
        />

        {/* Top lid */}
        <mesh
          geometry={lidGeometry}
          material={lidMaterial}
          position={[0, 1.645, 0]}
        />

        {/* Pull tab */}
        <mesh
          geometry={tabGeometry}
          material={tabMaterial}
          position={[0.08, 1.66, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </Center>
  )
}
