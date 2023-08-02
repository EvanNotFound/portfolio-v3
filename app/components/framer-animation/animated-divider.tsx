"use client";
import React from "react";
import { motion } from "framer-motion";

const divivderVariants = {
  hidden: { width: "0%" },
  visible: {
    width: "100%",
    transition: {
      duration: 0.4,
      delay: 0.1,
    },
  },
};

export default function AnimatedDivider({ className }: { className?: string }) {
  return (
    <motion.div
      initial={"hidden"}
      animate={"visible"}
      variants={divivderVariants}
      className={className}
    />
  );
}
