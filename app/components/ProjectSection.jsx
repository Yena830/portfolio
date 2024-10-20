"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { useInView } from "react-intersection-observer";
import { animate, motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Smart Trip App",
    description: "AI customized trip assitance App",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Next.js Portfolio Website",
    description: "Personal Website",
    image: "/images/projects/2.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "React Forum Website",
    description: "A website allow userd to share something.",
    image: "/images/projects/3.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const fileredProjects = projectsData.filter((p) => p.tag.includes(tag));
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const cardAnimation = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section id="projects" className="pt-12">
      <h2 className="text-center text-4xl font-bold text-white mt-8 mb-5 md:mb-10">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-4 text-white my-6">
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
      <div ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
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
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default ProjectSection;
