import React, { useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF, Center, Resize } from '@react-three/drei'

/**
 * DietCoke Component:
 * - Loads /diet_coke_v2.glb with useGLTF
 * - Uses Drei <Resize> and <Center> to normalize the raw mesh to a predictable height (2.7 units)
 * - Forces the pivot to the geometric center of mass so rotations spin in-place without sweeping off-screen
 */
export default function DietCoke(props) {
  const modelPath = `${import.meta.env.BASE_URL}diet_coke_v2.glb`
  const { scene } = useGLTF(modelPath)

  useLayoutEffect(() => {
    if (!scene) return

    // Traverse to enhance metallic highlights on aluminum textures
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
        if (child.material) {
          child.material.roughness = 0.35
          child.material.metalness = 0.75
          child.material.needsUpdate = true
        }
      }
    })
  }, [scene])

  return (
    <group {...props} dispose={null}>
      {/* Center forces pivot to geometric center; Resize fits height to 2.7 units */}
      <Center>
        <Resize height scale={2.7}>
          <primitive object={scene} />
        </Resize>
      </Center>
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}diet_coke_v2.glb`)


