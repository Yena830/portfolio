"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const EXPERIENCE_SLIDES = [
    {
        id: "education",
        title: "Education",
        subtitle: "Academic Excellence",
        summary: "Master Student in Information Science at UIUC",
        icon: "🎓",
        background: "/images/moon.jpg",
        details: (
            <ul className="text-base list-disc pl-2 font-semibold text-pink-100">
                <li>Master of Information Science, UIUC</li>
                <li>Law, Fudan University</li>
                <li>Accounting, Tongji University</li>
            </ul>
        )
    },
    {
        id: "current",
        title: "Current Role",
        subtitle: "Software Engineer Intern",
        summary: "Building AI-powered solutions at Amiggle LLC",
        icon: "💼",
        background: "/images/moon2.jpg",
        details: (
            <div className="font-normal text-pink-100 h-full">
                <p className="font-semibold text-pink-100 mb-3 text-sm">
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
        )
    },
    {
        id: "previous", 
        title: "Previous Experience",
        subtitle: "Technical Solutions Engineer",
        summary: "LLM systems & AWS architecture at Envision Energy",
        icon: "⚡",
        background: "/images/moon.jpg",
        details: (
            <div className="font-normal text-pink-100 h-full">
                <p className="font-semibold text-pink-100 mb-3 text-sm">
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
        )
    },
    {
        id: "skills",
        title: "Technical Skills",
        subtitle: "Full-Stack Development",
        summary: "Modern technologies & cloud platforms",
        icon: "🛠️",
        background: "/images/moon2.jpg",
        details: (
            <div className="font-normal text-pink-100 h-full">
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
        )
    }
];

const ExperienceSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSlide, setSelectedSlide] = useState(null);
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    // 自动轮播
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % EXPERIENCE_SLIDES.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % EXPERIENCE_SLIDES.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + EXPERIENCE_SLIDES.length) % EXPERIENCE_SLIDES.length);
    };

    const openModal = (slide) => {
        setSelectedSlide(slide);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedSlide(null);
    };

    return (
        <section id="experience" className="py-8 px-4 sm:px-6">
            <div className="container mx-auto max-w-6xl">
                <div ref={ref} className="relative">
                    {/* 轮播容器 */}
                    <div className="relative h-80 overflow-hidden rounded-2xl">
                        {/* 背景图片 */}
                        <div 
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url('${EXPERIENCE_SLIDES[currentSlide].background}')` }}
                        />
                        {/* 遮罩层 */}
                        <div className="absolute inset-0 bg-black/50" />
                        
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: 300 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -300 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="text-center text-white px-8">
                                    <h3 className="text-3xl font-bold mb-2">
                                        {EXPERIENCE_SLIDES[currentSlide].title}
                                    </h3>
                                    <p className="text-xl text-gray-200 mb-4">
                                        {EXPERIENCE_SLIDES[currentSlide].subtitle}
                                    </p>
                                    <p className="text-lg text-gray-300 mb-6">
                                        {EXPERIENCE_SLIDES[currentSlide].summary}
                                    </p>
                                    <button 
                                        onClick={() => openModal(EXPERIENCE_SLIDES[currentSlide])}
                                        className="px-6 py-3 bg-pink-400 hover:bg-pink-500 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* 导航按钮 */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300"
                    >
                        <ChevronLeftIcon className="w-6 h-6 text-white" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300"
                    >
                        <ChevronRightIcon className="w-6 h-6 text-white" />
                    </button>

                    {/* 指示器 */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {EXPERIENCE_SLIDES.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentSlide ? 'bg-pink-400' : 'bg-white/30'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Modal 弹窗 */}
                {isModalOpen && selectedSlide && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="relative max-w-4xl w-[90vw] max-h-[80vh] bg-[#161515] rounded-xl shadow-xl overflow-hidden"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="text-4xl">{selectedSlide.icon}</div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">{selectedSlide.title}</h3>
                                            <p className="text-lg text-gray-300">{selectedSlide.subtitle}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={closeModal}
                                        className="text-white/80 hover:text-white text-2xl font-bold"
                                        aria-label="Close"
                                    >
                                        ×
                                    </button>
                                </div>
                                <div className="text-pink-100 max-h-96 overflow-y-auto custom-scrollbar">
                                    {selectedSlide.details}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ExperienceSection;
