"use client";
import React from "react";
import { motion } from "framer-motion";

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
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
