"use client";
import { useState } from "react";
import { motion } from "framer-motion";

// 轻量 cn 实现（项目无 '@/lib/utils'）
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const transforms = [
  { x: -0.8, y: -0.6, rotationZ: -29 },
  { x: -0.2, y: -0.4, rotationZ: -6 },
  { x: -0.05, y: 0.1, rotationZ: 12 },
  { x: -0.05, y: -0.1, rotationZ: -9 },
  { x: -0.1, y: 0.55, rotationZ: 3 },
  { x: 0, y: -0.1, rotationZ: 9 },
  { x: 0, y: 0.15, rotationZ: -12 },
  { x: 0, y: 0.15, rotationZ: -17 },
  { x: 0, y: -0.65, rotationZ: 9 },
  { x: 0.1, y: 0.4, rotationZ: 12 },
  { x: 0, y: -0.15, rotationZ: -9 },
  { x: 0.2, y: 0.15, rotationZ: 12 },
  { x: 0.8, y: 0.6, rotationZ: 20 }
];

export default function TextDisperse({ children, onHover, className, ...props }) {
  const [isAnimated, setIsAnimated] = useState(false);

  const splitWord = (word) => {
    const chars = [];
    word.split("").forEach((char, i) => {
      const t = transforms[i] || { x: 0, y: 0, rotationZ: 0 };
      chars.push(
        <motion.span
          custom={i}
          variants={{
            open: () => ({
              x: `${t.x}em`,
              y: `${t.y}em`,
              rotateZ: t.rotationZ,
              transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
              zIndex: 1
            }),
            closed: {
              x: 0,
              y: 0,
              rotateZ: 0,
              transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
              zIndex: 0
            }
          }}
          animate={isAnimated ? "open" : "closed"}
          key={`${char}-${i}`}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  const manageMouseEnter = () => {
    onHover?.(true);
    setIsAnimated(true);
  };

  const manageMouseLeave = () => {
    onHover?.(false);
    setIsAnimated(false);
  };

  return (
    <div
      className={cn(
        "relative flex cursor-pointer justify-between data-[index='4']:inline-flex data-[index='5']:right-[-40px] data-[index='5']:inline-flex",
        className
      )}
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
      {...props}
    >
      {splitWord(String(children))}
    </div>
  );
}


