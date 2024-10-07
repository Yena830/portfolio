"use client";
import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Model = ({ isUserInteracting, setIsUserInteracting }) => {
  const modelRef = useRef();
  const { scene, animations } = useGLTF("/robot_playground.glb");
  const { actions } = useAnimations(animations, modelRef);
  const [timer, setTimer] = useState(null);

  const [modelScale, setModelScale] = useState(1.5);

  scene.position.set(0, -1.5, 0);
  scene.scale.set(1.5, 1.5, 1.5);

  useEffect(() => {
    if (actions && actions["Experiment"]) {
      actions["Experiment"].play();
    }
  }, [actions]);

  //   useEffect(() => {
  //     if (actions && actions["Experiment"]) {
  //       actions["Experiment"].paused = isUserInteracting;
  //     }
  //   }, [isUserInteracting, actions]);

  //   const handleClick = () => {
  //     setIsUserInteracting((prev) => !prev);
  //     const nowState = !prev;
  //     if (nowState) {
  //       clearTimeout(timer);
  //     } else {
  //       const newTimer = setTimeout(() => {
  //         setIsUserInteracting(false);
  //       }, 500);
  //       setTimer(newTimer);
  //     }
  //     return nowState;
  //   };
  return <primitive ref={modelRef} object={scene} />;
};

export default Model;
