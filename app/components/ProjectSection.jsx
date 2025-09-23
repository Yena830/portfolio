"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { useInView } from "react-intersection-observer";
import { animate, motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

const projectsData = [
  {
    id: 1,
    title: "Smart Trip - AI Travel Planner",
    description: "AI-powered travel planner built with React + Vite, integrated with Google Maps, Unsplash, and Firebase. Generates personalized itineraries with map search, city images, Google OAuth, and full itinerary management.",
    image: "/images/projects/1.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Yena830/travel_agent",
    previewUrl: "https://travel-agent-luna.vercel.app/",
  },
  {
    id: 2,
    title: "Next.js Portfolio Website",
    description: "Personal Website",
    image: "/images/projects/2.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Yena830/portfolio",
    previewUrl: "https://yena830.vercel.app/",
  },
  {
    id: 3,
    title: "Whispers of the Maze",
    description: "A puzzle game where players navigate a hidden maze using only audio cues.",
    image: "/images/projects/5.png",
    tag: ["All","Web"],
    gitUrl: "https://github.com/Yena830/2025Spr_projects_Whispers_of_the_Maze",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "React Forum Website",
    description: "A website allow userd to share something.",
    image: "/images/projects/3.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Yena830/web-project-funny-fact",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "AI Mock Interview Platform",
    description: "AI Mock Interview Platform for job seekers.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },

];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileredProjects = projectsData.filter((p) => p.tag.includes(tag));
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const cardAnimation = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section id="projects" className="pt-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mt-8 mb-5 md:mb-10">
          My Projects
        </h2>
        <div className="flex flex-row justify-center items-center gap-2 sm:gap-4 text-white my-6 flex-wrap">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag === "Mobile"}
        />
      </div>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {fileredProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardAnimation}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              onOpenModal={() => openModal(project)}
            />
          </motion.div>
        ))}
        </div>
        <ProjectModal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
      </div>
    </section>
  );
};
export default ProjectSection;
