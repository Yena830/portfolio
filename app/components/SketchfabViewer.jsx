"use client";
import React, { useEffect, useRef } from "react";

function SketchfabViewer() {
  const iframeRef = useRef();

  useEffect(() => {
    // Sketchfab 3D 模型的 Embed URL
    const embedUrl =
      "https://sketchfab.com/models/59fc99d8dcb146f3a6c16dbbcc4680da/embed";

    // 设置 iframe 的 src 属性
    iframeRef.current.src = embedUrl;
  }, []);

  return (
    <div style={{ width: "100%", height: "500px" }}>
      {/* 创建一个 iframe 用于嵌入 Sketchfab 模型 */}
      <iframe
        ref={iframeRef}
        title="Sketchfab Model"
        frameBorder="0"
        allow="autoplay; fullscreen; vr"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        style={{ width: "100%", height: "100%" }}
      ></iframe>
    </div>
  );
}

export default SketchfabViewer;
