import React from "react";
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
} from "../constants/constants";
import SkillDataProvider from "./SkillDataProvider";

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative sm:py-14 lg:py-28"
    >
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl  font-bold text-white mt-8 mb-5 md:mb-10">
        Skills
      </h2>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10]"></div>
      </div>
    </section>
  );
};

export default SkillsSection;
