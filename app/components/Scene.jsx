"use client";
import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import Model from "./Model";
import { OrbitControls } from "@react-three/drei";

const Scene = () => {
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  return (
    <Canvas
      gl={{ antialias: true }}
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 1.5]}
      className="relative inset-0 h-full w-50% xl:z-400 z-300"
    >
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Model
        isUserInteracting={isUserInteracting}
        setIsUserInteracting={setIsUserInteracting}
      />
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
