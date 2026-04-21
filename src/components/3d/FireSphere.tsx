'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Particle system for fire effect
function FireParticles() {
  const count = 150
  const meshRef = useRef<THREE.Points>(null)

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      const r = 1.2 + Math.random() * 0.8

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      velocities[i * 3] = (Math.random() - 0.5) * 0.02
      velocities[i * 3 + 1] = Math.random() * 0.04 + 0.01
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02
    }

    return { positions, velocities }
  }, [])

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3))
    return geo
  }, [positions])

  useFrame(() => {
    if (!meshRef.current) return
    const pos = meshRef.current.geometry.attributes.position as THREE.BufferAttribute
    const arr = pos.array as Float32Array

    for (let i = 0; i < count; i++) {
      arr[i * 3] += velocities[i * 3]
      arr[i * 3 + 1] += velocities[i * 3 + 1]
      arr[i * 3 + 2] += velocities[i * 3 + 2]

      const dist = Math.sqrt(
        arr[i * 3] ** 2 + arr[i * 3 + 1] ** 2 + arr[i * 3 + 2] ** 2
      )
      if (dist > 3 || arr[i * 3 + 1] > 3) {
        const theta = Math.random() * Math.PI * 2
        const phi = Math.random() * Math.PI
        arr[i * 3] = 1.1 * Math.sin(phi) * Math.cos(theta)
        arr[i * 3 + 1] = 1.1 * Math.sin(phi) * Math.sin(theta)
        arr[i * 3 + 2] = 1.1 * Math.cos(phi)
      }
    }
    pos.needsUpdate = true
  })

  return (
    <points ref={meshRef} geometry={geometry}>
      <pointsMaterial
        size={0.04}
        color="#FF6B35"
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

// Main glowing sphere — Phoenix placeholder
export function FireSphere() {
  const outerRef = useRef<THREE.Mesh>(null)
  const innerRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (outerRef.current) {
      outerRef.current.rotation.y = t * 0.3
      outerRef.current.rotation.z = Math.sin(t * 0.5) * 0.1
      outerRef.current.position.y = Math.sin(t * 0.8) * 0.15
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.5
    }
  })

  return (
    <group>
      {/* Core glow sphere */}
      <Sphere ref={innerRef} args={[0.7, 64, 64]}>
        <meshStandardMaterial
          color="#FF6B35"
          emissive="#FF4500"
          emissiveIntensity={3}
          roughness={0.2}
          metalness={0.1}
        />
      </Sphere>

      {/* Distorted outer shell */}
      <Sphere ref={outerRef} args={[1.1, 64, 64]}>
        <MeshDistortMaterial
          color="#F7B32B"
          emissive="#FF6B35"
          emissiveIntensity={1.5}
          distort={0.35}
          speed={2}
          roughness={0.3}
          metalness={0.6}
          transparent
          opacity={0.85}
        />
      </Sphere>

      {/* Particles */}
      <FireParticles />

      {/* Point light at center for bloom effect */}
      <pointLight color="#FF6B35" intensity={3} distance={8} />
    </group>
  )
}
