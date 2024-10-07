"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const SkillDataProvider = ({ src, width, height, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * 0.3 }}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt="skill images"
        className="w-10 h-10 sm:w-10 sm:h-10 lg:w-20 lg:h-20 xl:w-[${width}px] xl:h-[${height}px] "
      />
    </motion.div>
  );
};

export default SkillDataProvider;
