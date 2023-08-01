"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ArticleWrapper({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: -120 }}
      exit={{ opacity: 0, y: -80 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 17,
        duration: 5,
      }}
    >
      {children}
    </motion.div>
  );
}
