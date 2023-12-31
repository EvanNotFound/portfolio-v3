"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AnimatedTitleWord({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const words = children.split(" ");

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.04 * i,
      },
    }),
  };

  // Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 400,
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
        <motion.h1
          variants={child}
          style={{ marginRight: "5px" }}
          key={index}
          className={className}
        >
          {word}
        </motion.h1>
      ))}
    </motion.div>
  );
}
