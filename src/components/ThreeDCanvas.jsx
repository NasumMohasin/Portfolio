import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';

function FloatingShapes() {
  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <pointLight position={[-10, -10, -5]} intensity={1.2} color="#bd00ff" />
      <pointLight position={[10, -10, 5]} intensity={1.8} color="#00f0ff" />
      <pointLight position={[0, 10, 0]} intensity={1.5} color="#ff007a" />
      
      {/* 3D Torus */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-2.2, 1.2, -1]} rotation={[0.5, 0.2, 0.1]}>
          <torusGeometry args={[0.7, 0.22, 16, 100]} />
          <meshStandardMaterial 
            color="#00f0ff" 
            roughness={0.1} 
            metalness={0.8}
          />
        </mesh>
      </Float>

      {/* Wobble Sphere */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[2.2, -1.2, 0]}>
          <sphereGeometry args={[0.65, 64, 64]} />
          <MeshWobbleMaterial
            color="#bd00ff"
            factor={0.4}
            speed={1.5}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </Float>

      {/* Distorted Tetrahedron/Cone */}
      <Float speed={2.5} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[1.8, 1.6, -1.5]} rotation={[0.8, 1.2, 0.4]}>
          <coneGeometry args={[0.45, 0.9, 4]} />
          <MeshDistortMaterial
            color="#ff007a"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.7}
          />
        </mesh>
      </Float>

      {/* Background Tech Wireframe Cube */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[-1.8, -1.8, -2]} rotation={[0.2, 0.5, 0.1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#7c3aed"
            wireframe={true}
            roughness={0.5}
          />
        </mesh>
      </Float>
    </>
  );
}

function ThreeDCanvas() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none opacity-70 hidden md:block">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <FloatingShapes />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}

export default ThreeDCanvas;
