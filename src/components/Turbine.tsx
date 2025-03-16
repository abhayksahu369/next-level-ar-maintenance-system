import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder, Box } from '@react-three/drei';
import * as THREE from 'three';

export function Turbine() {
  const turbineRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (turbineRef.current) {
      turbineRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={turbineRef}>
      {/* Base */}
      <Cylinder args={[0.5, 0.7, 1, 32]} position={[0, -1.5, 0]}>
        <meshStandardMaterial color="#FF4655" roughness={0.3} metalness={0.9} />
      </Cylinder>

      {/* Main body */}
      <Cylinder args={[0.3, 0.3, 2, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#FF6B78" roughness={0.2} metalness={0.95} />
      </Cylinder>

      {/* Blades */}
      {[0, 120, 240].map((rotation, index) => (
        <Box
          key={index}
          args={[0.1, 1.5, 0.05]}
          position={[
            Math.cos((rotation * Math.PI) / 180) * 0.75,
            0,
            Math.sin((rotation * Math.PI) / 180) * 0.75
          ]}
          rotation={[0, (rotation * Math.PI) / 180, 0]}
        >
          <meshStandardMaterial color="#FF8A94" roughness={0.4} metalness={0.8} />
        </Box>
      ))}
    </group>
  );
}