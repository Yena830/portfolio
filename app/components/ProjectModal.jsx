"use client";
import React, { useEffect } from "react";
import Link from "next/link";

const ProjectModal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const stop = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-[92vw] md:w-[800px] bg-[#161515] rounded-xl shadow-xl overflow-hidden"
        onClick={stop}
      >
        <div
          className="w-full h-56 md:h-96"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="p-5 md:p-6 text-white">
          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
          <p className="text-pink-100 mb-4">{project.description}</p>
          <div className="flex gap-3">
            {project.gitUrl && project.gitUrl !== "/" && (
              <Link
                href={project.gitUrl}
                className="px-4 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-400 transition-colors"
                onClick={stop}
              >
                GitHub
              </Link>
            )}
            {project.previewUrl && project.previewUrl !== "/" && (
              <Link
                href={project.previewUrl}
                className="px-4 py-2 rounded-md bg-zinc-800 text-white hover:bg-zinc-700 transition-colors"
                onClick={stop}
              >
                Live Preview
              </Link>
            )}
          </div>
          {(!project.gitUrl || project.gitUrl === "/") && (
            <p className="text-zinc-400 text-sm mt-2">
              Repository link is unavailable due to confidentiality (private).
            </p>
          )}
        </div>
        <button
          className="absolute top-3 right-3 text-white/80 hover:text-white text-xl"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;


