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
      <ul className="text-base list-disc pl-2 font-semibold text-[#b7bfc5]">
        <li>Master of Information Science, UIUC</li>
        <li>Law, Fudan University</li>
        <li>Accounting, Tongji University</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2 font-normal text-[#b7bfc5]">
        <p className="font-semibold text-[#b7bfc5]">Envision Energy: Technical Solutions Engineer</p>
          <ul className="list-disc pl-4">
            <li>Architected AI-driven document analysis system, processing multi-language content with 28% improvement.</li>
            <li>Implemented serverless backend with AWS Lambda, S3, and SQS, handling 1,000+ documents monthly.</li>
            <li>Engineered containerized OCR service using PaddleOCR on AWS Fargate for non-English documents.</li>
            <li>Deployed fine-tuned LLM for contract analysis, storing structured results in PostgreSQL JSONB columns.</li>
            <li>Developed React frontend with document preview and LLM-generated annotations, reducing report time by 32%.</li>
          </ul>

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
              I am a graduate student majoring in Information Science and
              currently pursuing a career as a full-stack web developer. I have
              experience working with Python, Java, JavaScript, React, HTML,
              CSS, and Git. I am a quick learner who is eager to expand my
              knowledge and skill set. I am a strong team player and excited to
              collaborate with others to create amazing applications.
            </p>
            <div className="flex flex-row mt-8 text-[#b7bfc5]">
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
            <div className="mt-8 ext-[#b7bfc5]">
              {TAB_DATA.find((e) => e.id === tab).content}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
