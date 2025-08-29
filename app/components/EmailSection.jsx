"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
    const form = useRef();
    const videoRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [isVideoInView, setIsVideoInView] = useState(false);

    // 监听视频是否在视窗内
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVideoInView(entry.isIntersecting);
                if (entry.isIntersecting) {
                    video.play().catch(console.error);
                } else {
                    video.pause();
                }
            },
            {
                threshold: 0.5, // 当视频50%可见时开始播放
            }
        );

        observer.observe(video);

        return () => {
            observer.disconnect();
        };
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);

        emailjs
            .sendForm("service_ewflnf7", "template_7ypdkcl", form.current, {
                publicKey: "sEUhe3CwfKD7ZDmae",
            })
            .then(
                (result) => {
                    setSuccess(true);
                    setTimeout(() => {
                        setSuccess(false);
                    }, 3000);
                },
                (error) => {
                    setError(true);
                    setTimeout(() => {
                        setError(false);
                    }, 3000);
                }
            );
    };

    return (
        <section
            className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-8 relative"
            id="contact"
        >
            {/* 左侧内容 */}
            <div className="z-10 flex flex-col justify-between h-full">
                <div>
                    <h5 className="text-xl font-bold text-white my-2">
                        Let&apos;s Connect
                    </h5>
                    <p className="text-[#Adb7be] mb-6 max-w-md">
                        I&apos;m currently looking for entry level opportunities, my inbox is
                        always open. Whether you have a question or just want to say hi,
                        I&apos;ll try my best to get back to you!
                    </p>

                    {/* 猫咪视频部分 */}
                    <div className="mb-6 max-w-md">
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                            <video
                                ref={videoRef}
                                className="w-full rounded-lg"
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                style={{ height: '280px', objectFit: 'cover' }}
                            >
                                <source src="/videos/luna.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                                🐱 Meet Luna!
                            </div>
                        </div>
                    </div>
                </div>

                {/* 社交媒体图标放在底部 */}
                <div className="socials flex flex-row gap-2 mt-auto">
                    <Link href="https://github.com/Yena830">
                        <Image src="/github-icon.svg" width={50} height={50} alt="GitHub" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/yena830/">
                        <Image
                            src="/linkedin-icon.svg"
                            width={50}
                            height={50}
                            alt="LinkedIn"
                            style={{
                                filter:
                                    "invert(41%) sepia(93%) saturate(1963%) hue-rotate(177deg) brightness(110%) contrast(88%)",
                            }}
                        />
                    </Link>
                </div>
            </div>

            {/* 右侧表单 */}
            <div className="flex flex-col h-full">
                <form ref={form} onSubmit={sendEmail} className="flex flex-col h-full">
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="text-white block mb-2 text-sm font-medium"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="bg-[#312d2f] placeholder-[#ADB7BE] text-white text-sm rounded-lg block w-full p-2.5"
                            placeholder=" yourEmail@xxx.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="text-white block mb-2 text-sm font-medium">
                            Your name
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="bg-[#312d2f] placeholder-[#ADB7BE] text-white text-sm rounded-lg block w-full p-2.5"
                            placeholder="May I have your name?"
                        />
                    </div>
                    <div className="mb-6 flex-1">
                        <label
                            htmlFor="message"
                            className="text-white block mb-2 text-sm font-medium"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            required
                            className="bg-[#312d2f] placeholder-[#ADB7BE] text-white text-sm rounded-lg block w-full p-2.5 h-full min-h-[120px] resize-none"
                            placeholder="Let's talk about..."
                        />
                    </div>
                    <div className="mt-auto pt-4">
                        <button
                            type="submit"
                            className="bg-[#8B2E2E] w-full p-2.5 rounded-lg font-bold text-white hover:bg-[#7fc3dc] duration-500"
                        >
                            Send message
                        </button>
                        {error && (
                            <p className="text-[#FF6F61] mt-4">
                                An error occurred. Please try again later.
                            </p>
                        )}
                        {success && (
                            <p className="text-[#FF6F61] mt-4">Message sent successfully!</p>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default EmailSection;