import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

export const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-pink-100";
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold hover:text-white px-2 duration-300 ${buttonClasses}`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-0.5 bg-pink-400 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};
