import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef();
  const particleCount = 3000;

  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00f5ff"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingGrid() {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.z = (state.clock.elapsedTime * 0.5) % 20;
    }
  });

  return (
    <group ref={ref} position={[0, -5, -10]}>
      <gridHelper
        args={[100, 50, '#00f5ff', '#1a1a2e']}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

function CyberSphere() {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, -15]}>
      <icosahedronGeometry args={[3, 1]} />
      <meshBasicMaterial
        color="#a855f7"
        wireframe={true}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

function DataStreams() {
  const streamCount = 50;
  const streams = useMemo(() => {
    return Array.from({ length: streamCount }, (_, i) => ({
      x: (Math.random() - 0.5) * 40,
      y: Math.random() * 30 - 15,
      z: (Math.random() - 0.5) * 20 - 10,
      speed: 0.5 + Math.random() * 1.5,
      length: 1 + Math.random() * 3,
    }));
  }, []);

  return (
    <group>
      {streams.map((stream, i) => (
        <DataStream key={i} {...stream} />
      ))}
    </group>
  );
}

function DataStream({ x, y, z, speed, length }) {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = ((state.clock.elapsedTime * speed + y) % 30) - 15;
    }
  });

  return (
    <mesh ref={ref} position={[x, y, z]}>
      <boxGeometry args={[0.02, length, 0.02]} />
      <meshBasicMaterial color="#00ff88" transparent opacity={0.6} />
    </mesh>
  );
}

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#0a0a0f']} />
        <fog attach="fog" args={['#0a0a0f', 10, 50]} />
        <ambientLight intensity={0.5} />
        <ParticleField />
        <FloatingGrid />
        <CyberSphere />
        <DataStreams />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;
