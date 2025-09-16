"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Black_Ops_One } from "@next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: ["400"],
});

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1
            className={`text-white mb-4 text-4xl sm:text-5xl lg:text-8xl ${blackOpsOne.className}`}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500">
              HELLO, I&apos;M{" "}
            </span>
            <br></br>
            <TypeAnimation className="text-[#F5F5F5]"
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Yena",
                1000,
                "Yueyue Lin",
                1000,
                "UIUC’er",
                1000,
                "Software Dev",
                1000,
                "Full Stack Dev",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          
          <p className="text-pink-100 text-base sm:text-base mb-6 lg:text-2xl ">
            All our dreams can come true, if we have the courage to pursue
            them.✨
          </p>

          <div>
            <Link
              href="/#contact"
              className="
              text-lg
              xl:text-xl
              inline-block
              font-bold
              px-0 
            py-0
            mr-4 
            w-full 
            sm:w-fit 
            rounded-full
            bg-gradient-to-br from-pink-400 to-pink-600
            text-white
            hover:scale-105
            duration-300
            "
            >
              <span className="block bg-[#ffffff00] hover:bg-pink-600 rounded-full px-6 py-3 xl:px-9 xl:py-5 ">
                Hire me
              </span>
            </Link>
            <Link href="/cv/Yueyue_Lin.pdf">
              <button
                className="
              text-lg
              xl:text-xl font-bold
              px-1
              py-1
              w-full 
              sm:w-fit 
              rounded-full
              bg-gradient-to-br from-pink-400 to-pink-600
              text-white
              mt-3 duration-300
              hover:scale-105"
              >
                <span className="block bg-[#171516] hover:bg-[#252123] rounded-full px-5 py-2 xl:px-8 xl:py-4  duration-300 ">
                  Download CV
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-8  lg:mt-0"
        >
          <div className="rounded-full bg-[#1a1919] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] relative">
            <Image
              src="/images/icon.jpg"
              alt="image"
              width={450}
              height={450}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              style={{ borderRadius: "80%" }}
            ></Image>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
