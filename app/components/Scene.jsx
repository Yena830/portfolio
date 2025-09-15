"use client";
import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import Model from "./Model";
import { OrbitControls } from "@react-three/drei";

const Scene = () => {
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  return (
    <div className="w-full h-full">
      <Canvas
        gl={{ antialias: true }}
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        className="w-full h-full"
      >
        <directionalLight position={[-5, -5, 5]} intensity={4} />
        <Model
          isUserInteracting={isUserInteracting}
          setIsUserInteracting={setIsUserInteracting}
        />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Scene;
