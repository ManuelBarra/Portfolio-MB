'use client'

/**
 * Phoenix 3D Model Component (Fallback Activo)
 * Se provee temporalmente un modelo luminoso abstracto para evitar crash.
 * Cuando tengas tu phoenix.glb, descomenta la importación useGLTF y
 * reemplaza el contenido del grupo.
 */

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
// import { useGLTF } from '@react-three/drei'

interface PhoenixProps {
  scale?: number
}

export function Phoenix({ scale = 1.5 }: PhoenixProps) {
  // Cuando tengas tu modelo usa esto:
  // const { scene } = useGLTF('/models/phoenix.glb')
  
  const groupRef = useRef<THREE.Group>(null)
  
  // Geometría "Fénix Abstracto"
  const rings = useMemo(() => {
    const list = []
    for(let i = 0; i < 5; i++) {
        list.push({
            speedFactor: Math.random() * 0.5 + 0.2,
            radius: Math.random() * 1.5 + 0.5,
            rotationAxis: new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize()
        });
    }
    return list;
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.getElapsedTime()
    // Rotación suave general del grupo
    groupRef.current.rotation.y += 0.005
    groupRef.current.rotation.z = Math.sin(t * 0.2) * 0.1
    groupRef.current.position.y = Math.sin(t * 0.6) * 0.3
    
    // Animar anillos internos y esferas
    groupRef.current.children.forEach((child, index) => {
      child.rotation.x += rings[index % rings.length].speedFactor * 0.02
      child.rotation.y -= rings[index % rings.length].speedFactor * 0.015
    })
  })

  return (
    <group ref={groupRef} scale={scale}>
      {/* 
        ========================================================
        Aquí usarías: <primitive object={scene} /> 
        en vez de las esferas cuando tengas el modelo .glb
        ========================================================
      */}
      
      {/* Esfera central de energía */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#FF6B35" emissive="#FF6B35" emissiveIntensity={2} />
      </mesh>
      
      {/* Anillos / Satélites de fuego */}
      {rings.map((ring, i) => (
        <group key={i} rotation={ring.rotationAxis.toArray()}>
          <mesh position={[ring.radius, 0, 0]}>
             <sphereGeometry args={[0.1 * ring.radius, 16, 16]} />
             <meshStandardMaterial color="#F7B32B" emissive="#F7B32B" emissiveIntensity={1.5} />
          </mesh>
          <mesh position={[-ring.radius, 0, 0]}>
             <sphereGeometry args={[0.05 * ring.radius, 16, 16]} />
             <meshStandardMaterial color="#FF6B35" emissive="#FF2200" emissiveIntensity={2.5} />
          </mesh>
          <mesh>
            <torusGeometry args={[ring.radius, 0.01, 8, 50]} />
            <meshBasicMaterial color="#FF6B35" transparent opacity={0.2} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

// Descomentar esto cuando se tenga el modelo
// useGLTF.preload('/models/phoenix.glb')
