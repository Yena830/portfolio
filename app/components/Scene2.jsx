"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/robot_playground.glb");
  scene.scale.set(1.7, 1.7, 1.7);
  scene.position.set(0, -1.7, 0);
  return <primitive object={scene} />;
}

function Scene() {
  return (
    <Canvas
      className="relative z-0"
      style={{ width: "100%", height: "500px" }}
      dpr={[1, 2]} // 根据屏幕分辨率调整 DPI
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default Scene;
