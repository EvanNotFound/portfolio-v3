"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AnimatedText({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const words = [children];

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.02 * i,
      },
    }),
  };

  // Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "ease",

        duration: 0.2,
        delay: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ display: "flex" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "5px" }}
          key={index}
          className={className}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
