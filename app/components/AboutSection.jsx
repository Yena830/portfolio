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
        title: "Current Role",
        id: "current",
        content: (
            <div className="font-normal text-[#b7bfc5] h-full">
                <p className="font-semibold text-[#b7bfc5] mb-3 text-sm">
                    Software Engineer Intern | Remote US <br />
                    Amiggle LLC | Jun. 2025 – Present
                </p>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li>Developing AI-powered mock interview system with multi-round voice-based interactions</li>
                    <li>Building modular LangChain pipelines with OpenAI and Gemini models for prompt customization</li>
                    <li>Designing resume-enhanced RAG system with Pinecone for personalized interview questions</li>
                    <li>Integrating ASR/TTS systems with open-source voice engines for realistic interview scenarios</li>
                    <li>Developing scalable REST APIs using FastAPI for agent workflows and session management</li>
                    <li>Containerizing and deploying backend services with Docker on AWS infrastructure</li>
                </ul>
            </div>
        ),
    },
    {
        title: "Previous Experience",
        id: "previous",
        content: (
            <div className="font-normal text-[#b7bfc5] h-full">
                <p className="font-semibold text-[#b7bfc5] mb-3 text-sm">
                    Technical Solutions Engineer | Shanghai, China <br />
                    Envision Energy Co. | Jul. 2023 – Nov. 2023
                </p>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li>Architected LLM-based document analysis system for multi-language contracts, achieving 28% efficiency improvement</li>
                    <li>Implemented serverless backend using AWS Lambda, S3, and SQS to process 1,000+ documents monthly</li>
                    <li>Engineered containerized OCR service with PaddleOCR on AWS Fargate to handle non-English documents</li>
                    <li>Deployed fine-tuned LLM for contract analysis, storing structured results in PostgreSQL JSONB columns</li>
                    <li>Developed React-based frontend with document preview and LLM-generated annotations</li>
                    <li>Reduced manual workload by 32% through intelligent automation and user-friendly interface design</li>
                </ul>
            </div>
        ),
    },
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className="font-normal text-[#b7bfc5] h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                        <p className="font-semibold mb-2 text-sm">Programming Languages</p>
                        <ul className="list-disc pl-4 space-y-1 text-xs">
                            <li>Java, Python, JavaScript, TypeScript</li>
                            <li>Go, C++</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold mb-2 text-sm">Frameworks & Tools</p>
                        <ul className="list-disc pl-4 space-y-1 text-xs">
                            <li>Spring Boot, Flask, FastAPI</li>
                            <li>React, Next.js, LangSmith</li>
                            <li>Git, Docker, Kubernetes, Terraform</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold mb-2 text-sm">Database Management</p>
                        <ul className="list-disc pl-4 space-y-1 text-xs">
                            <li>MySQL, PostgreSQL, MongoDB</li>
                            <li>DynamoDB, Redis, Elasticsearch, Pinecone</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold mb-2 text-sm">Cloud Platforms</p>
                        <ul className="list-disc pl-4 space-y-1 text-xs">
                            <li>AWS (EC2, Lambda, API Gateway, RDS)</li>
                            <li>S3, SNS, SQS, ECS, ElastiCache</li>
                            <li>Google Cloud Platform (GCP)</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                        <p className="font-semibold mb-2 text-sm">AI & LLM Tooling</p>
                        <ul className="list-disc pl-4 space-y-1 text-xs">
                            <li>OpenAI API, Google Gemini API</li>
                            <li>LangChain, Prompt Engineering</li>
                            <li>ASR/TTS, Pinecone Vector DB</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold mb-2 text-sm">Software Engineering</p>
                        <ul className="list-disc pl-4 space-y-1 text-xs">
                            <li>Microservices, RESTful APIs</li>
                            <li>CI/CD, TDD, System Design</li>
                            <li>Distributed Systems</li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Projects",
        id: "projects",
        content: (
            <div className="font-normal text-[#b7bfc5] h-full">
                <div className="space-y-3">
                    <div>
                        <p className="font-semibold mb-2 text-sm">AI Mock Interview Platform (Current)</p>
                        <ul className="list-disc pl-4 space-y-1 text-xs">
                            <li>AI-powered mock interview system with multi-round voice-based interactions</li>
                            <li>Modular LangChain pipelines with OpenAI/Gemini models and LangSmith evaluation</li>
                            <li>Resume-enhanced RAG system with Pinecone for personalized question generation</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold mb-2 text-sm">Campus Restaurant Discovery Platform</p>
                        <ul className="list-disc pl-4 space-y-1 text-xs">
                            <li>Scalable platform handling 500+ QPS using Java Spring Boot microservices</li>
                            <li>API Gateway with custom routing, deployed on EC2 with auto-scaling</li>
                            <li>ElastiCache optimization reducing load times by 79%, secure SMS/JWT authentication</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold mb-2 text-sm">LLM Travel Itinerary Planner Agent</p>
                        <ul className="list-disc pl-4 space-y-1 text-xs">
                            <li>RAG-based travel assistant integrating LLM with Google Maps API</li>
                            <li>Serverless architecture with Firebase Auth, Firestore, and Cloud Functions</li>
                            <li>Redis caching reducing API calls by 37%, enhanced accuracy via prompt engineering</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold mb-2 text-sm">Multi-language Contract Analysis System</p>
                        <ul className="list-disc pl-4 space-y-1 text-xs">
                            <li>LLM-based document processing system achieving 28% efficiency improvement</li>
                            <li>Serverless backend with AWS Lambda/S3/SQS handling 1,000+ documents monthly</li>
                            <li>Containerized OCR service with PaddleOCR, React frontend with 32% workload reduction</li>
                        </ul>
                    </div>
                </div>
            </div>
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
                            I am a Master&apos;s student in Information Science at UIUC with a passion for developing
                            intelligent systems and full-stack applications. Currently working as a Software Engineer
                            Intern at Amiggle LLC, I specialize in AI-powered solutions, leveraging cutting-edge
                            technologies like LangChain, OpenAI models, and cloud infrastructure. With experience
                            in building scalable systems from serverless backends to interactive frontends, I enjoy
                            solving complex problems and creating impactful software solutions. I&apos;m always eager
                            to learn new technologies and collaborate with teams to build innovative applications.
                        </p>
                        <div className="flex flex-row flex-wrap mt-8 text-[#b7bfc5] gap-2">
                            <TabButton
                                selectTab={() => handleTabChange("education")}
                                active={tab === "education"}
                            >
                                Education
                            </TabButton>
                            <TabButton
                                selectTab={() => handleTabChange("current")}
                                active={tab === "current"}
                            >
                                Current Role
                            </TabButton>
                            <TabButton
                                selectTab={() => handleTabChange("previous")}
                                active={tab === "previous"}
                            >
                                Previous Experience
                            </TabButton>
                            <TabButton
                                selectTab={() => handleTabChange("skills")}
                                active={tab === "skills"}
                            >
                                Skills
                            </TabButton>
                            <TabButton
                                selectTab={() => handleTabChange("projects")}
                                active={tab === "projects"}
                            >
                                Projects
                            </TabButton>
                        </div>
                        <div className="mt-8 text-[#b7bfc5] min-h-[300px] max-h-[300px] overflow-y-auto">
                            {TAB_DATA.find((e) => e.id === tab).content}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;