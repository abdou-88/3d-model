import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import {Box} from './components/Box.js';

export default function App() {
   return (
     <Canvas
       camera={{ position: [2, 0, 12.25], fov: 15 }}
       style={{
         width: "100vw",
         height: "100vh",
       }}
     >
       <ambientLight intensity={1.25} />
       <ambientLight intensity={0.1} />
       <directionalLight intensity={0.4} />

       <Suspense fallback={null}>
         <Model position={[0.025, -1.62, 0]} />
       </Suspense>
       <OrbitControls />

       <pointLight position={[10, 10, 10]} />
       <Box position={[-1.2, 0, 0]} />
       <Box position={[1.2, 0, 0]} />
     </Canvas>
   );
}