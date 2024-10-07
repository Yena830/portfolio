"use client";
import React, { useTransition, useState, useRef } from "react";
// import Image from "next/image";
import { TabButton } from "./TabButton";
import Scene from "./Scene";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="text-base list-disc pl-2 font-simibold">
        <li>MSIM, University of Illinois, Champaign-Urbana</li>
        <li>LAW, Fudan University</li>
        <li>ACCOUNTING, Tongji University</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>111</li>
        <li>222</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="py-5 xl:py-20 space-y-10">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-4 px-4 xl:gap-16 sm:py-16 xl:px-5">
        {/* <Image
          src="/images/computer.jpg"
          width={500}
          height={500}
          alt="Computer Image"
          className="rounded-xl"
        /> */}
        <Scene />

        <motion.div
          ref={ref}
          initial="hidden"
          variants={imageVariants}
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
        >
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-base sm:text-lg lg:text-xl xl:text-xl text-justify text-[#b7bfc5] leading-loose">
              I am a graduate student majoring in information science now. I am
              working towards the career path of a full-stack web developer. I
              have experience working with python, Java, JabaScript, React,
              HEML, CSS, and Git. I am a quick learner and I am always looking
              to expand my knowledge and skill set. I am a team player and I am
              exited to work with others to create amazing applications.
            </p>
            <div className="flex flex-row mt-8">
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("experience")}
                active={tab === "experience"}
              >
                {" "}
                Experience{" "}
              </TabButton>
            </div>
            <div className="mt-8 xl:text-xl">
              {TAB_DATA.find((e) => e.id === tab).content}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
