"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { TabButton } from "./TabButton";
import Scene from "./Scene";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>Java</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Illinois, Champaign-Urbana</li>
        <li>Fudan University</li>
        <li>Tongji University</li>
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
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="pt-6">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image
          src="/images/computer.jpg"
          width={500}
          height={500}
          alt="Computer Image"
          className="rounded-xl"
        /> */}
        <Scene />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-base md:text-lg text-justify text-[#cdd8df]">
            I am a graduate student majoring in information science now. I am
            working towards the career path of a full-stack web developer. I
            have experience working with python, Java, JabaScript, React, HEML,
            CSS, and Git. I am a quick learner and I am always looking to expand
            my knowledge and skill set. I am a team player and I am exited to
            work with others to create amazing applications.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
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
          <div className="mt-8 ">
            {TAB_DATA.find((e) => e.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
