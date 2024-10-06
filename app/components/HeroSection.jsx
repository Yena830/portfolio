"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Black_Ops_One } from "@next/font/google";

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: ["400"],
});

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
          <h1
            className={`text-white mb-4 text-4xl sm:text-5xl lg:text-8xl ${blackOpsOne.className}`}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01aae7] via-[#fab0cd] to-[#e33c82]">
              HELLO, I'M{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Yena",
                1000,
                "Yueyue Lin",
                1000,
                "A UIUC Student",
                1000,
                "Web Developer",
                1000,
                "Full Stack Dev",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-2xl">
            All our dreams can come true, if we have the courage to pursue
            them.✨
          </p>
          <div>
            <button
              className="
              inline-block
              font-bold
              px-0 
            py-0
            mr-4 
            w-full 
            sm:w-fit 
            rounded-full
            bg-gradient-to-br from-[#d6d144] via-[#01aae7]  to-[#ef1c74]  
            text-white
            hover:bg-slate-200
            "
            >
              <span className="block bg-[#ffffff00] hover:bg-[#ADB7BE] rounded-full px-6 py-3 duration-300">
                Hire me
              </span>
            </button>
            <button
              className="font-bold
              px-1
              py-1
            w-full 
            sm:w-fit 
              rounded-full
              bg-gradient-to-br from-[#0e9ed2] to-[#f0438c]
              text-white
              mt-3"
            >
              <span className="block bg-[#171516] hover:bg-[#252123] rounded-full px-5 py-2  duration-300">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-8 lg:mt-0">
          <div className="rounded-full bg-[#1a1919] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative">
            <Image
              src="/images/image2.png"
              alt="image"
              width={500}
              height={500}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              style={{ borderRadius: "80%" }}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
