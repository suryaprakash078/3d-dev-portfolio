import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function StarField() {
  const ref = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 50;
      pos[i3 + 1] = (Math.random() - 0.5) * 50;
      pos[i3 + 2] = (Math.random() - 0.5) * 50;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#14B8A6"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
}

function FloatingShapes() {
  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-5, 2, -10]}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#22D3EE" wireframe />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[5, -3, -8]}>
          <torusGeometry args={[0.8, 0.2, 16, 100]} />
          <meshStandardMaterial color="#14B8A6" wireframe />
        </mesh>
      </Float>
      <Float speed={3} rotationIntensity={0.8} floatIntensity={1.5}>
        <mesh position={[0, 5, -15]}>
          <icosahedronGeometry args={[1.5, 1]} />
          <meshStandardMaterial color="#5eead4" wireframe opacity={0.2} transparent />
        </mesh>
      </Float>
    </group>
  );
}

export function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#020617]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#14B8A6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22D3EE" />
        <StarField />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
