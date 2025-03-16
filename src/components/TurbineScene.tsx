import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Turbine } from './Turbine';

export function TurbineScene() {
  return (
    <div className="h-[300px] sm:h-[400px] w-full bg-valorant-black rounded-lg overflow-hidden">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Turbine />
      </Canvas>
    </div>
  );
}