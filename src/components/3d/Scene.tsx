'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Stars } from '@react-three/drei'
import { Suspense } from 'react'
import { FireSphere } from './FireSphere'

function SceneContent() {
  return (
    <>
      {/* Camera */}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.8}
      />

      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#F7B32B" />
      <pointLight position={[-5, 5, -5]} intensity={1.5} color="#FF6B35" distance={20} />
      <pointLight position={[5, -5, 5]} intensity={0.5} color="#004E89" distance={15} />
      <spotLight
        position={[0, 10, 0]}
        intensity={2}
        color="#FF6B35"
        angle={Math.PI / 6}
        penumbra={0.5}
        castShadow
      />

      {/* Environment */}
      <Environment preset="night" />
      <Stars radius={100} depth={50} count={3000} factor={3} saturation={0} fade speed={1} />

      {/* Main 3D object — Phoenix placeholder until model arrives */}
      <Suspense fallback={null}>
        <FireSphere />
      </Suspense>
    </>
  )
}

export function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      shadows
      dpr={[1, 2]}
      style={{
        width: '100%',
        height: '100svh',
        background: 'linear-gradient(180deg, #0A0E27 0%, #0F1535 60%, #1A0A05 100%)',
      }}
    >
      <SceneContent />
    </Canvas>
  )
}
