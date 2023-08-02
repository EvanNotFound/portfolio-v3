import React from "react";
import { motion } from "framer-motion";

export default function FadeUpContainer({
  className,
  children,
  delay,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        y: {
          delay: delay ?? 0,
          duration: 0.05,
        },
        opacity: {
          delay: delay ? delay + 0.2 : 0.1,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
