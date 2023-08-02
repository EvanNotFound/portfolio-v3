"use client";
import React from "react";
import { motion } from "framer-motion";

const wrapperAnimation = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 16 },
  exit: { opacity: 0, y: 24 },
  transition: {
    type: "spring",
    stiffness: 260,
    damping: 17,
    duration: 5,
  },
};

export default function PageWrapper({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={className}
      variants={wrapperAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
